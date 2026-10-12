<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

import EventCard from '@/components/event/EventCard.vue'
import SearchBar from '@/components/event/SearchBar.vue'
import CategoryFilter from '@/components/event/CategoryFilter.vue'

const router = useRouter()

const events = [
  {
    id: 1,
    title: 'Vue.js Mastery Workshop',
    date: 'Oct 12, 2026',
    loc: '📍 Tech Hub, Jakarta',
    cat: 'Workshop',
    desc: 'Learn advanced Vue 3 concepts, Composition API, and state management to build high-performance web applications interactively.',
  },
  {
    id: 2,
    title: 'National Tech Meetup',
    date: 'Oct 15, 2026',
    loc: '📍 Main Auditorium, City Center',
    cat: 'Meetup',
    desc: 'A gathering of hundreds of developers and technology enthusiasts to share the latest industry trends and expand professional networks.',
  },
  {
    id: 3,
    title: 'Startup Pitch Competition',
    date: 'Nov 02, 2026',
    loc: '📍 Innovation Center',
    cat: 'Competition',
    desc: 'Watch the best local startup founders pitch their innovative ideas live in front of a panel of renowned investors.',
  },
  {
    id: 4,
    title: 'UI/UX Design Sprint',
    date: 'Nov 10, 2026',
    loc: '📍 Creative Studio',
    cat: 'Workshop',
    desc: 'A hands-on session on designing user interfaces and implementing visual hierarchy principles.',
  },
  {
    id: 5,
    title: 'Digital Marketing Seminar',
    date: 'Nov 20, 2026',
    loc: '📍 Grand Hotel Hall',
    cat: 'Seminar',
    desc: 'An in-depth seminar discussing modern digital marketing strategies, from SEO optimization to user conversion tactics.',
  },
  {
    id: 6,
    title: 'Community Leaders Summit',
    date: 'Dec 05, 2026',
    loc: '📍 Gatherly HQ',
    cat: 'Conference',
    desc: 'An exclusive year-end conference for community leaders to formulate sustainable ecosystem development strategies.',
  },
]

const searchQuery = ref('')
const selectedCategory = ref('All')

const categories = ['All', 'Workshop', 'Meetup', 'Competition', 'Seminar', 'Conference']

const filteredEvents = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return events.filter((event) => {
    const matchSearch =
      event.title.toLowerCase().includes(query) ||
      event.loc.toLowerCase().includes(query) ||
      event.cat.toLowerCase().includes(query) ||
      event.desc.toLowerCase().includes(query)

    const matchCategory = selectedCategory.value === 'All' || event.cat === selectedCategory.value

    return matchSearch && matchCategory
  })
})

function handleViewDetail(id) {
  router.push(`/browse/events/${id}`)
}
</script>

<template>
  <div class="event-list-page">
    <div class="header-section">
      <h2 class="section-title">Upcoming Events</h2>
      <p class="section-desc">
        Discover workshops, seminars, tech meetups, and competitions near you.
      </p>
    </div>

    <div class="filters-section">
      <SearchBar v-model="searchQuery" />

      <CategoryFilter :categories="categories" v-model="selectedCategory" />
    </div>

    <div class="event-grid" v-if="filteredEvents.length > 0">
      <EventCard
        v-for="event in filteredEvents"
        :key="event.id"
        :event="event"
        @view-detail="handleViewDetail"
      />
    </div>

    <div v-else class="empty-state">
      <p>No events found matching your criteria.</p>
    </div>
  </div>
</template>

<style scoped>
.event-list-page {
  width: 100%;
  animation: fadeIn 0.4s ease;
}

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

.filters-section {
  margin-bottom: var(--space-6);
}

.event-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-6);
  width: 100%;
}

.empty-state {
  padding: var(--space-12);
  text-align: center;
  color: var(--text-muted);
  background: var(--bg-light);
  border: 1px solid var(--border-color);
  border-radius: var(--space-4);
}

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
}
</style>
