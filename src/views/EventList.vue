
<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useEvents } from '@/composables/useEvents'

import EventCard from '@/components/event/EventCard.vue'
import SearchBar from '@/components/event/SearchBar.vue'
import CategoryFilter from '@/components/event/CategoryFilter.vue'
import AppButton from '@/components/ui/AppButton.vue'

const router = useRouter()

// Mengambil event aktif dan fungsi pengecekan registrasi
const { activeEvents, isUserRegistered } = useEvents()

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

// Filter event aktif secara reaktif
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
    <!-- HEADER -->
    <div class="header-section">
      <h2 class="section-title">
        Upcoming Events
      </h2>

      <p class="section-desc">
        Discover workshops, seminars, tech meetups, and competitions near you.
      </p>
    </div>

    <!-- SEARCH DAN FILTER KATEGORI -->
    <div class="filters-section">
      <SearchBar v-model="searchQuery" />

      <CategoryFilter
        :categories="categories"
        v-model="selectedCategory"
      />
    </div>

    <!-- GRID EVENT AKTIF -->
    <div
      v-if="filteredEvents.length > 0"
      class="event-grid"
    >
      <EventCard
        v-for="event in filteredEvents"
        :key="event.id"
        :event="event"
        :is-registered="isUserRegistered(event.id)"
        @view-detail="handleViewDetail"
      />
    </div>

    <!-- EMPTY STATE -->
    <div
      v-else
      class="empty-state"
    >
      <div class="empty-badge">
        CATALOG EMPTY
      </div>

      <h3>No Events Available Yet</h3>

      <p>
        {{
          searchQuery.trim() || selectedCategory !== 'All'
            ? 'No events match your search or selected category. Try changing your filters.'
            : 'There are currently no active events scheduled. Are you an organizer? Publish and manage your first event today through the Dashboard!'
        }}
      </p>

      <div
        v-if="!searchQuery.trim() && selectedCategory === 'All'"
        class="empty-action"
      >
        <AppButton
          variant="primary"
          @click="router.push('/dashboard')"
        >
          Go to Organizer Dashboard &rarr;
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

/* HEADER */
.header-section {
  margin-bottom: var(--space-8);
}

.section-title {
  font-size: 2.2rem;
  margin-bottom: var(--space-2);
  color: var(--text-main);
}

.section-desc {
  color: var(--text-muted);
  font-size: 1.1rem;
  margin: 0;
}

/* SEARCH DAN FILTER */
.filters-section {
  margin-bottom: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

/* ADAPTIVE EVENT GRID */
.event-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-6);
}

/* FRIENDLY EMPTY STATE */
.empty-state {
  text-align: center;
  padding: var(--space-12) var(--space-8);
  color: var(--text-muted);
  background: white;
  border: 1px dashed var(--border-color);
  border-radius: var(--space-4);
  max-width: 600px;
  margin: var(--space-8) auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
}

.empty-badge {
  display: inline-block;
  background: var(--bg-light);
  color: var(--text-muted);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 4px 12px;
  border-radius: 50px;
  border: 1px solid var(--border-color);
  margin-bottom: var(--space-4);
}

.empty-state h3 {
  font-size: 1.5rem;
  color: var(--text-main);
  margin-bottom: var(--space-2);
}

.empty-state p {
  line-height: 1.6;
  margin-bottom: var(--space-6);
  font-size: 1rem;
}

.empty-action {
  display: flex;
  justify-content: center;
}

/* ANIMATION */
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

/* RESPONSIVE */
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
