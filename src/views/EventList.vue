<template>
  <div class="event-list-page">

    <!-- =========================================
         HEADER SECTION
    ========================================== -->
    <div class="header-section">

      <h2 class="section-title">
        Upcoming Events
      </h2>

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
      <div
        class="event-card"
        v-for="event in events"
        :key="event.id"
      >

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
          <p class="event-loc">
            📍 {{ event.location }}
          </p>


          <!-- EVENT DESCRIPTION -->
          <p class="event-desc">
            {{ event.description }}
          </p>


          <!-- CARD FOOTER -->
          <div class="card-footer">

            <router-link
              :to="`/browse/events/${event.id}`"
              class="btn-link"
            >
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
      'Learn advanced Vue 3 concepts, Composition API, and state management to build high-performance web applications interactively.'
  },

  {
    id: 2,
    date: 'Oct 15, 2026',
    category: 'Meetup',
    title: 'National Tech Meetup',
    location: 'Main Auditorium, City Center',
    description:
      'A gathering of hundreds of developers and technology enthusiasts to share the latest industry trends and expand professional networks.'
  },

  {
    id: 3,
    date: 'Nov 02, 2026',
    category: 'Competition',
    title: 'Startup Pitch Competition',
    location: 'Innovation Center',
    description:
      'Watch the best local startup founders pitch their innovative ideas live in front of a panel of renowned investors.'
  },

  {
    id: 4,
    date: 'Nov 10, 2026',
    category: 'Workshop',
    title: 'UI/UX Design Sprint',
    location: 'Creative Studio',
    description:
      'A hands-on session to improve user interfaces by implementing layout systems and visual hierarchy principles.'
  },

  {
    id: 5,
    date: 'Nov 20, 2026',
    category: 'Seminar',
    title: 'Digital Marketing Seminar',
    location: 'Grand Hotel Hall',
    description:
      'An in-depth seminar discussing modern digital marketing strategies, from SEO optimization to user conversion tactics.'
  },

  {
    id: 6,
    date: 'Dec 05, 2026',
    category: 'Conference',
    title: 'Community Leaders Summit',
    location: 'Gatherly HQ',
    description:
      'An exclusive year-end conference for community leaders to formulate sustainable ecosystem development strategies.'
  }

]

</script>


<style scoped>

/* =========================================
   EVENT LIST PAGE
========================================= */

.event-list-page {
  animation: fadeIn 0.4s ease;
}


/* =========================================
   HEADER
========================================= */

.header-section {
  margin-bottom: var(--space-8);
}


.section-title {

  font-size: 2.2rem;

  color: var(--text-main);

  margin-bottom: var(--space-2);
}


.section-desc {

  color: var(--text-muted);

  font-size: 1.1rem;
}


/* =========================================
   EVENT GRID
   ADAPTIVE GRID
========================================= */

.event-grid {

  /*
   * ADAPTIVE GRID
   * Jumlah kolom akan menyesuaikan
   * dengan ukuran layar.
   */

  display: grid;

  grid-template-columns:
    repeat(auto-fill, minmax(320px, 1fr));

  gap: var(--space-6);
}


/* =========================================
   EVENT CARD
   COMMON REGION
========================================= */

.event-card {

  /*
   * COMMON REGIONS
   * Border dan radius membantu pengguna
   * melihat informasi event sebagai satu
   * kesatuan.
   */

  background: white;

  border-radius: var(--space-4);

  border: 1px solid var(--border-color);

  box-shadow:
    0 4px 15px rgba(0, 0, 0, 0.02);

  display: flex;

  flex-direction: column;

  transition:
    transform 0.2s,
    box-shadow 0.2s;
}


/* =========================================
   HOVER
========================================= */

.event-card:hover {

  transform: translateY(-4px);

  box-shadow:
    0 12px 25px rgba(0, 0, 0, 0.06);
}


/* =========================================
   EVENT BODY
   PROXIMITY
========================================= */

.event-body {

  padding: var(--space-6);

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

  margin-bottom: var(--space-4);
}


/* =========================================
   EVENT DATE
   RECOGNITION OVER RECALL
========================================= */

.event-date {

  background:
    rgba(102, 68, 255, 0.1);

  color: var(--primary);

  padding:
    var(--space-1) var(--space-2);

  border-radius: 6px;

  font-weight: 600;

  font-size: 0.85rem;
}


/* =========================================
   EVENT CATEGORY
========================================= */

.event-category {

  color: var(--text-muted);

  font-size: 0.85rem;

  font-weight: 500;

  text-transform: uppercase;

  letter-spacing: 0.5px;
}


/* =========================================
   EVENT TITLE
========================================= */

.event-title {

  color: var(--text-main);

  margin-bottom: var(--space-2);

  font-size: 1.4rem;
}


/* =========================================
   EVENT LOCATION
========================================= */

.event-loc {

  color: var(--text-muted);

  font-size: 0.95rem;

  margin-bottom: var(--space-4);
}


/* =========================================
   EVENT DESCRIPTION
========================================= */

.event-desc {

  color: var(--text-muted);

  line-height: 1.6;

  font-size: 0.95rem;

  margin-bottom: var(--space-6);

  flex-grow: 1;
}


/* =========================================
   CARD FOOTER
========================================= */

.card-footer {

  border-top:
    1px solid var(--border-color);

  padding-top: var(--space-4);
}


/* =========================================
   BUTTON LINK
========================================= */

.btn-link {

  display: inline-block;

  color: var(--text-main);

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
   RESPONSIVE
========================================= */

@media (max-width: 768px) {

  .event-grid {

    grid-template-columns: 1fr;

  }


  .event-body {

    padding: var(--space-6);

  }


  .section-title {

    font-size: 2rem;

  }

}

</style>