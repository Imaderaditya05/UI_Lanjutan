
<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useEvents } from '@/composables/useEvents'

import EventCard from '@/components/event/EventCard.vue'
import SearchBar from '@/components/event/SearchBar.vue'
import CategoryFilter from '@/components/event/CategoryFilter.vue'
import AppButton from '@/components/ui/AppButton.vue'

const router = useRouter()

// Mengambil data event dari shared composable
const { activeEvents } = useEvents()

// Search dan category filter
const searchQuery = ref('')
const selectedCategory = ref('All')

const categories = [
  'All',
  'Workshop',
  'Meetup',
  'Competition',
  'Seminar',
  'Conference',
]

// Filter event secara reaktif
const filteredEvents = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return activeEvents.value.filter((event) => {
    const title = (event.title || '').toLowerCase()
    const location = (event.loc || '').toLowerCase()
    const category = (event.cat || '').toLowerCase()
    const description = (event.desc || '').toLowerCase()

    const matchSearch =
      title.includes(query) ||
      location.includes(query) ||
      category.includes(query) ||
      description.includes(query)

    const matchCategory =
      selectedCategory.value === 'All' ||
      event.cat === selectedCategory.value

    return matchSearch && matchCategory
  })
})

// Navigasi ke halaman detail event
function handleViewDetail(id) {
  router.push(`/browse/events/${id}`)
}
</script>

<template>
  <div class="event-list-page">
    <!-- Header -->
    <div class="header-section">
      <h2 class="section-title">
        Upcoming Events
      </h2>

      <p class="section-desc">
        Discover workshops, seminars, tech meetups, and competitions near you.
      </p>
    </div>

    <!-- Search and Category Filter -->
    <div class="filters-section">
      <SearchBar v-model="searchQuery" />

      <CategoryFilter
        :categories="categories"
        v-model="selectedCategory"
      />
    </div>

    <!-- Active Event Grid -->
    <div
      v-if="filteredEvents.length > 0"
      class="event-grid"
    >
      <EventCard
        v-for="event in filteredEvents"
        :key="event.id"
        :event="event"
        @view-detail="handleViewDetail"
      />
    </div>

    <!-- Empty State -->
    <div
      v-else
      class="empty-state"
    >
      <div class="empty-icon">📊</div>

      <h3>No Events Available Yet</h3>

      <p>
        {{
          searchQuery || selectedCategory !== 'All'
            ? 'No events match your search or selected category. Try changing your filters.'
            : 'There are currently no active events scheduled. Are you an organizer? Publish and manage your first event through the Dashboard!'
        }}
      </p>

      <div
        v-if="!searchQuery && selectedCategory === 'All'"
        class="empty-action"
      >
        <AppButton
          variant="primary"
          @click="router.push('/dashboard')"
        >
          Go to Organizer Dashboard →
        </AppButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-list-page {
  width: 100%;
  animation: fadeIn 0.4s ease;
}

/* Header */
.header-section {
  margin-bottom: var(--space-8);
}

.section-title {
  margin: 0 0 var(--space-2);
  color: var(--text-main);
  font-size: 2.2rem;
}

.section-desc {
  margin: 0;
  color: var(--text-muted);
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Filters */
.filters-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

/* Adaptive Event Grid */
.event-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-6);
  width: 100%;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: var(--space-12) var(--space-8);
  color: var(--text-muted);
  background: white;
  border-radius: var(--space-4);
  border: 1px dashed var(--border-color);
  max-width: 600px;
  margin: var(--space-8) auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
}

.empty-icon {
  font-size: 3.5rem;
  margin-bottom: var(--space-3);
}

.empty-state h3 {
  font-size: 1.5rem;
  color: var(--text-main);
  margin: 0 0 var(--space-2);
}

.empty-state p {
  line-height: 1.6;
  margin: 0 0 var(--space-6);
  font-size: 1rem;
}

.empty-action {
  display: flex;
  justify-content: center;
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 700px) {
  .section-title {
    font-size: 1.7rem;
  }

  .section-desc {
    font-size: 0.95rem;
  }

  .event-grid {
    grid-template-columns: 1fr;
  }

  .empty-state {
    padding: var(--space-8) var(--space-4);
  }
}
</style>
