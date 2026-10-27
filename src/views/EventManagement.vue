
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useEvents } from '@/composables/useEvents'
import AppModal from '@/components/ui/AppModal.vue'
import AppButton from '@/components/ui/AppButton.vue'
import OrganizerEventCard from '@/components/event/OrganizerEventCard.vue'
import EventCreateForm from '@/components/event/EventCreateForm.vue'

const router = useRouter()

const {
  activeEvents,
  completedEvents,
  createEvent,
  completeEvent,
  deleteEvent,
} = useEvents()

// Tab: active, create, completed
const currentTab = ref('active')

// Notification state
const errorMessage = ref('')
const successMessage = ref('')

// Confirmation modal state
const isModalOpen = ref(false)
const modalAction = ref('complete')
const selectedEvent = ref(null)

const handleOpenCompleteModal = (event) => {
  selectedEvent.value = event
  modalAction.value = 'complete'
  isModalOpen.value = true
}

const handleOpenDeleteModal = (event) => {
  selectedEvent.value = event
  modalAction.value = 'delete'
  isModalOpen.value = true
}

const handleConfirmModal = () => {
  if (!selectedEvent.value) return

  if (modalAction.value === 'complete') {
    completeEvent(selectedEvent.value.id)
  } else if (modalAction.value === 'delete') {
    deleteEvent(selectedEvent.value.id)
  }

  isModalOpen.value = false
  selectedEvent.value = null
}

const handleCancelModal = () => {
  isModalOpen.value = false
  selectedEvent.value = null
}

const handleCreateEvent = (eventData) => {
  errorMessage.value = ''
  successMessage.value = ''

  try {
    createEvent(eventData)
    successMessage.value =
      'Event published successfully and is now live!'
    currentTab.value = 'active'

    setTimeout(() => {
      successMessage.value = ''
    }, 3000)
  } catch (error) {
    errorMessage.value =
      'Unable to publish the event. Please try again.'
    console.error('Failed to create event:', error)
  }
}

const handleCancelCreate = () => {
  currentTab.value = 'active'
}
</script>

<template>
  <div class="event-management-page">
    <!-- PAGE HEADER -->
    <div class="page-header">
      <div>
        <h2>Event Management Control</h2>
        <p class="subtitle">
          Manage event lifecycle, publish new events, and archive completed ones.
        </p>
      </div>

      <AppButton
        variant="primary"
        @click="currentTab = 'create'"
      >
        ＋ Create New Event
      </AppButton>
    </div>

    <!-- TAB NAVIGATION -->
    <div class="tabs-container">
      <button
        :class="['tab-btn', { active: currentTab === 'active' }]"
        @click="currentTab = 'active'"
      >
        ⚡ Active Events ({{ activeEvents.length }})
      </button>

      <button
        :class="['tab-btn', { active: currentTab === 'create' }]"
        @click="currentTab = 'create'"
      >
        ＋ Create Event
      </button>

      <button
        :class="['tab-btn', { active: currentTab === 'completed' }]"
        @click="currentTab = 'completed'"
      >
        ✅ Completed Events ({{ completedEvents.length }})
      </button>
    </div>

    <!-- NOTIFICATIONS -->
    <div
      v-if="errorMessage"
      class="alert-box alert-error"
      role="alert"
    >
      ⚠️ {{ errorMessage }}
    </div>

    <div
      v-if="successMessage"
      class="alert-box alert-success"
      role="status"
    >
      🎉 {{ successMessage }}
    </div>

    <!-- TAB 1: ACTIVE EVENTS -->
    <section
      v-if="currentTab === 'active'"
      class="tab-pane"
    >
      <div
        v-if="activeEvents.length > 0"
        class="events-grid"
      >
        <OrganizerEventCard
          v-for="item in activeEvents"
          :key="item.id"
          :event="item"
          @view-detail="(id) => router.push(`/browse/events/${id}`)"
          @complete="handleOpenCompleteModal"
          @delete="handleOpenDeleteModal"
        />
      </div>

      <div
        v-else
        class="empty-state"
      >
        <div class="empty-icon">📅</div>
        <h3>No Active Events</h3>
        <p>
          All events have ended or none have been created yet.
          Please create a new event.
        </p>

        <AppButton
          variant="primary"
          @click="currentTab = 'create'"
        >
          Create Event Now
        </AppButton>
      </div>
    </section>

    <!-- TAB 2: CREATE EVENT -->
    <section
      v-if="currentTab === 'create'"
      class="tab-pane"
    >
      <EventCreateForm
        @submit="handleCreateEvent"
        @cancel="handleCancelCreate"
      />
    </section>

    <!-- TAB 3: COMPLETED EVENTS -->
    <section
      v-if="currentTab === 'completed'"
      class="tab-pane"
    >
      <div
        v-if="completedEvents.length > 0"
        class="events-grid"
      >
        <OrganizerEventCard
          v-for="item in completedEvents"
          :key="item.id"
          :event="item"
          :is-completed="true"
          @view-detail="(id) => router.push(`/browse/events/${id}`)"
          @delete="handleOpenDeleteModal"
        />
      </div>

      <div
        v-else
        class="empty-state"
      >
        <div class="empty-icon">🗃️</div>
        <h3>No Completed Events</h3>
        <p>
          Events marked as completed will be archived here permanently.
        </p>
      </div>
    </section>

    <!-- CONFIRMATION MODAL -->
    <AppModal
      :is-open="isModalOpen"
      :title="
        modalAction === 'complete'
          ? 'Complete Event?'
          : 'Delete Event Permanently?'
      "
      :message="
        modalAction === 'complete'
          ? `Are you sure you want to mark '${selectedEvent?.title}' as completed? Once completed, the status is final and the event will be automatically removed from public listings.`
          : `Are you sure you want to permanently delete '${selectedEvent?.title}'? This action cannot be undone and will permanently remove this event from all records.`
      "
      :confirm-text="
        modalAction === 'complete'
          ? 'Yes, Complete'
          : 'Yes, Delete Permanently'
      "
      cancel-text="Cancel"
      :variant="modalAction === 'complete' ? 'success' : 'danger'"
      :badge-text="
        modalAction === 'complete' ? 'CONFIRMATION' : 'WARNING'
      "
      @confirm="handleConfirmModal"
      @close="handleCancelModal"
    />
  </div>
</template>

<style scoped>
.event-management-page {
  max-width: 1200px;
  margin: 0 auto;
}

/* PAGE HEADER */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-8);
  flex-wrap: wrap;
  gap: var(--space-4);
}

.page-header h2 {
  font-size: 2rem;
  color: var(--text-main);
  margin-bottom: var(--space-1);
}

.subtitle {
  color: var(--text-muted);
  font-size: 1rem;
}

/* TAB SYSTEM */
.tabs-container {
  display: flex;
  gap: var(--space-3);
  border-bottom: 2px solid var(--border-color);
  margin-bottom: var(--space-8);
  padding-bottom: var(--space-2);
}

.tab-btn {
  background: none;
  border: none;
  padding: var(--space-3) var(--space-6);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-muted);
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s;
}

.tab-btn:hover {
  background-color: rgba(102, 68, 255, 0.05);
  color: var(--primary);
}

.tab-btn.active {
  background-color: var(--primary);
  color: white;
}

/* EVENT GRID */
.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-6);
  margin-bottom: var(--space-12);
}

/* EMPTY STATE */
.empty-state {
  text-align: center;
  padding: var(--space-12);
  background: white;
  border: 1px dashed var(--border-color);
  border-radius: var(--space-4);
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: var(--space-3);
}

.empty-state h3 {
  font-size: 1.4rem;
  margin-bottom: var(--space-2);
}

.empty-state p {
  color: var(--text-muted);
  margin-bottom: var(--space-6);
}

/* ALERTS */
.alert-box {
  padding: var(--space-3) var(--space-4);
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: var(--space-6);
}

.alert-error {
  background: #ffe3e3;
  color: #c92a2a;
  border: 1px solid #ffa8a8;
}

.alert-success {
  background: #d3f9d8;
  color: #2b8a3e;
  border: 1px solid #b2f2bb;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .page-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .tabs-container {
    overflow-x: auto;
  }

  .tab-btn {
    white-space: nowrap;
  }

  .events-grid {
    grid-template-columns: 1fr;
  }
}
</style>
