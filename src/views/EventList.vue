<template>
  <div class="event-list-page">
    <!-- =========================================
         HEADER SECTION
    ========================================== -->
    <div class="header-section">
      <h2 class="section-title">Upcoming Events</h2>

      <p class="section-desc">
        Discover workshops, seminars, tech meetups, and competitions near you.
      </p>
    </div>

    <!-- =========================================
         EVENT GRID
         ADAPTIVE GRID
    ========================================== -->
    <div class="event-grid">
      <!-- EVENT CARD -->
      <div class="event-card" v-for="event in events" :key="event.id">
        <div class="event-body">
          <!-- EVENT META -->
          <div class="event-meta">
            <!-- Recognition over Recall -->
            <span class="event-date">
              {{ event.date }}
            </span>

            <span class="event-category">
              {{ event.category }}
            </span>
          </div>

          <!-- EVENT TITLE -->
          <h3 class="event-title">
            {{ event.title }}
          </h3>

          <!-- EVENT LOCATION -->
          <p class="event-loc">📍 {{ event.location }}</p>

          <!-- EVENT DESCRIPTION -->
          <p class="event-desc">
            {{ event.description }}
          </p>

          <!-- CARD FOOTER -->
          <div class="card-footer">
            <router-link :to="`/browse/events/${event.id}`" class="btn-link">
              View Event Details &rarr;
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const events = [
  {
    id: 1,
    date: 'Oct 12, 2026',
    category: 'Workshop',
    title: 'Vue.js Mastery Workshop',
    location: 'Tech Hub, Jakarta',
    description:
      'Learn advanced Vue 3 concepts, Composition API, and state management to build high-performance web applications interactively.',
  },

  {
    id: 2,
    date: 'Oct 15, 2026',
    category: 'Meetup',
    title: 'National Tech Meetup',
    location: 'Main Auditorium, City Center',
    description:
      'A gathering of hundreds of developers and technology enthusiasts to share the latest industry trends and expand professional networks.',
  },

  {
    id: 3,
    date: 'Nov 02, 2026',
    category: 'Competition',
    title: 'Startup Pitch Competition',
    location: 'Innovation Center',
    description:
      'Watch the best local startup founders pitch their innovative ideas live in front of a panel of renowned investors.',
  },

  {
    id: 4,
    date: 'Nov 10, 2026',
    category: 'Workshop',
    title: 'UI/UX Design Sprint',
    location: 'Creative Studio',
    description:
      'A hands-on session to improve user interfaces by implementing layout systems and visual hierarchy principles.',
  },

  {
    id: 5,
    date: 'Nov 20, 2026',
    category: 'Seminar',
    title: 'Digital Marketing Seminar',
    location: 'Grand Hotel Hall',
    description:
      'An in-depth seminar discussing modern digital marketing strategies, from SEO optimization to user conversion tactics.',
  },

  {
    id: 6,
    date: 'Dec 05, 2026',
    category: 'Conference',
    title: 'Community Leaders Summit',
    location: 'Gatherly HQ',
    description:
      'An exclusive year-end conference for community leaders to formulate sustainable ecosystem development strategies.',
  },
]
</script>

<style scoped>
/* =========================================
   EVENT LIST PAGE
========================================= */

.event-list-page {
  width: 100%;
  animation: fadeIn 0.4s ease;
}

/* =========================================
   HEADER
========================================= */

.header-section {
  width: 100%;
  margin-bottom: 28px;
}

.section-title {
  margin: 0 0 8px;

  color: var(--text-main);

  font-size: 2rem;
  font-weight: 800;
  line-height: 1.2;
}

.section-desc {
  margin: 0;

  color: var(--text-muted);

  font-size: 1rem;
  line-height: 1.5;
}

/* =========================================
   EVENT GRID
   ADAPTIVE GRID SYSTEM
========================================= */

.event-grid {
  /*
   * ADAPTIVE GRID
   *
   * Tidak menentukan jumlah kolom secara
   * langsung.
   *
   * Card akan menyesuaikan ruang yang tersedia.
   */

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  gap: 16px;

  /*
   * FULL WIDTH
   *
   * Grid menggunakan seluruh area content.
   */
  width: 100%;
}

/* =========================================
   EVENT CARD
   COMMON REGION
========================================= */

.event-card {
  min-width: 0;

  background: white;

  border: 1px solid var(--border-color);

  border-radius: 10px;

  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.025);

  display: flex;
  flex-direction: column;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

/* =========================================
   HOVER
========================================= */

.event-card:hover {
  transform: translateY(-3px);

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}

/* =========================================
   EVENT BODY
   PROXIMITY
========================================= */

.event-body {
  padding: 16px;

  display: flex;
  flex-direction: column;

  height: 100%;
}

/* =========================================
   EVENT META
========================================= */

.event-meta {
  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 8px;

  margin-bottom: 16px;
}

/* =========================================
   EVENT DATE
   RECOGNITION OVER RECALL
========================================= */

.event-date {
  display: inline-block;

  background: rgba(102, 68, 255, 0.1);

  color: var(--primary);

  padding: 4px 7px;

  border-radius: 5px;

  font-size: 0.7rem;

  font-weight: 600;

  white-space: nowrap;
}

/* =========================================
   EVENT CATEGORY
========================================= */

.event-category {
  color: var(--text-muted);

  font-size: 0.65rem;

  font-weight: 600;

  text-transform: uppercase;

  letter-spacing: 0.4px;

  white-space: nowrap;
}

/* =========================================
   EVENT TITLE
========================================= */

.event-title {
  margin: 0 0 12px;

  color: var(--text-main);

  font-size: 1.05rem;

  font-weight: 750;

  line-height: 1.3;
}

/* =========================================
   EVENT LOCATION
========================================= */

.event-loc {
  margin: 0 0 14px;

  color: var(--text-muted);

  font-size: 0.78rem;

  line-height: 1.4;
}

/* =========================================
   EVENT DESCRIPTION
========================================= */

.event-desc {
  margin: 0 0 18px;

  color: var(--text-muted);

  font-size: 0.78rem;

  line-height: 1.5;

  flex-grow: 1;
}

/* =========================================
   CARD FOOTER
========================================= */

.card-footer {
  margin-top: auto;

  padding-top: 12px;

  border-top: 1px solid var(--border-color);
}

/* =========================================
   BUTTON LINK
========================================= */

.btn-link {
  display: inline-block;

  color: var(--text-main);

  font-size: 0.75rem;

  font-weight: 600;

  text-decoration: none;

  transition: color 0.2s ease;
}

.btn-link:hover {
  color: var(--primary);
}

/* =========================================
   ANIMATION
========================================= */

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

/* =========================================
   ADAPTIVE BEHAVIOR
========================================= */

/*
 * Tablet
 *
 * Grid otomatis berubah menjadi
 * 2 kolom ketika 3 card tidak lagi
 * muat dengan nyaman.
 */

@media (max-width: 1100px) {
  .event-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

/*
 * Mobile
 */

@media (max-width: 700px) {
  .event-grid {
    grid-template-columns: 1fr;

    gap: 14px;
  }

  .section-title {
    font-size: 1.7rem;
  }

  .section-desc {
    font-size: 0.9rem;
  }

  .event-body {
    padding: 16px;
  }
}
</style>
