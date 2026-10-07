<template>
  <div class="event-detail-page">

    <!-- =========================================
         BACK BUTTON
    ========================================== -->
    <button
      class="btn-back"
      @click="$router.push('/browse/events')"
    >
      ← Back to Events
    </button>


    <!-- =========================================
         EVENT HEADER
    ========================================== -->
    <section class="detail-header">

      <div class="header-content">

        <span class="event-tag">
          Workshop & Training
        </span>

        <h1>
          Vue.js Mastery Workshop {{ route.params.id }}
        </h1>

        <div class="meta-info">

          <span class="meta-item">
            📅 October 12, 2026
          </span>

          <span class="meta-item">
            📍 Tech Hub, Jakarta Pusat
          </span>

          <span class="meta-item">
            👥 Quota: 150 Attendees
          </span>

        </div>

      </div>

    </section>


    <!-- =========================================
         ASYMMETRICAL LAYOUT
    ========================================== -->
    <div class="detail-content grid-asymmetric">

      <!-- =======================================
           MAIN DESCRIPTION
           F-PATTERN
      ======================================== -->
      <main class="main-desc">

        <h2>
          About This Event
        </h2>

        <p>
          Welcome to the biggest web interface development training
          event of the year! Gatherly is collaborating with the local
          developer community to host a comprehensive workshop designed
          specifically to bring together professionals, enthusiasts,
          and students.
        </p>

        <p>
          In this session, we will discuss various current industry
          challenges, dissect the implementation of Single Page
          Applications (SPA), and practice hands-on Layout System
          design prioritizing visual hierarchy. You will gain practical
          insights that can be directly applied to your future projects
          or career.
        </p>


        <!-- =====================================
             EVENT AGENDA
        ====================================== -->
        <h2 class="agenda-title">
          Event Agenda
        </h2>

        <ul class="agenda-list">

          <li>
            <strong>09:00 AM</strong>
            Registration & QR Check-in Scanning
          </li>

          <li>
            <strong>10:00 AM</strong>
            Session 1: Vue Router & Navigation Fundamentals
          </li>

          <li>
            <strong>11:30 AM</strong>
            Coffee Break & Networking Session
          </li>

          <li>
            <strong>01:00 PM</strong>
            Session 2: Layout System & Grid Implementation
          </li>

          <li>
            <strong>03:00 PM</strong>
            Q&A & Closing Remarks
          </li>

        </ul>

      </main>


      <!-- =======================================
           TICKET SIDEBAR
           FOCAL POINT & STICKY PANE
      ======================================== -->
      <aside class="sidebar">

        <div class="ticket-card sticky-pane">

          <h3>
            Attendee Registration
          </h3>

          <p class="price">
            Free
          </p>

          <p class="ticket-desc">
            Secure your seat now before the quota is full.
          </p>

          <!-- STRONGEST FOCAL POINT -->
          <button class="btn-register">
            Register Now
          </button>

          <p class="spots">
            Only 12 seats left!
          </p>

        </div>

      </aside>

    </div>

  </div>
</template>


<script setup>

import { useRoute } from 'vue-router'

const route = useRoute()

</script>


<style scoped>

/* =========================================
   EVENT DETAIL PAGE
========================================= */

.event-detail-page {

  animation: fadeIn 0.5s ease;

}


/* =========================================
   BACK BUTTON
========================================= */

.btn-back {

  background: none;

  border: none;

  font-size: 1rem;

  cursor: pointer;

  margin-bottom: var(--space-6);

  color: var(--text-muted);

  font-weight: 500;

  padding: 0;

  transition: color 0.2s ease;

}


.btn-back:hover {

  color: var(--primary);

}


/* =========================================
   EVENT HEADER
========================================= */

.detail-header {

  background: var(--bg-light);

  border-radius: var(--space-4);

  border: 1px solid var(--border-color);

  padding: var(--space-12);

  margin-bottom: var(--space-8);

}


.header-content {

  max-width: 800px;

}


/* =========================================
   EVENT TAG
========================================= */

.event-tag {

  display: inline-block;

  background: rgba(102, 68, 255, 0.1);

  color: var(--primary);

  padding: var(--space-1) var(--space-4);

  border-radius: 50px;

  font-weight: 600;

  font-size: 0.9rem;

  margin-bottom: var(--space-4);

}


/* =========================================
   EVENT TITLE
========================================= */

.detail-header h1 {

  color: var(--text-main);

  font-size: 2.8rem;

  margin-bottom: var(--space-6);

  line-height: 1.2;

}


/* =========================================
   META INFORMATION
========================================= */

.meta-info {

  display: flex;

  flex-wrap: wrap;

  gap: var(--space-6);

}


.meta-item {

  color: var(--text-muted);

  font-weight: 500;

  font-size: 1.05rem;

}


/* =========================================
   ASYMMETRICAL LAYOUT
========================================= */

.grid-asymmetric {

  /*
   * ASYMMETRICAL LAYOUT
   *
   * Kolom kiri lebih besar untuk informasi.
   * Kolom kanan menjadi area konversi/tiket.
   */

  display: grid;

  grid-template-columns: 2fr 1fr;

  gap: var(--space-12);

}


/* =========================================
   MAIN DESCRIPTION
   F-PATTERN
========================================= */

.main-desc {

  min-width: 0;

}


/* =========================================
   CONTENT HEADING
========================================= */

.main-desc h2 {

  color: var(--text-main);

  margin-bottom: var(--space-4);

  font-size: 1.8rem;

  border-left: 4px solid var(--primary);

  padding-left: var(--space-2);

}


.main-desc p {

  color: #444;

  line-height: 1.8;

  margin-bottom: var(--space-6);

  font-size: 1.05rem;

}


/* =========================================
   EVENT AGENDA
========================================= */

.agenda-title {

  margin-top: var(--space-12);

}


.agenda-list {

  list-style: none;

  padding: 0;

  margin: 0;

}


.agenda-list li {

  padding: var(--space-4) 0;

  border-bottom:
    1px solid var(--border-color);

  color: var(--text-muted);

  font-size: 1.05rem;

}


.agenda-list li strong {

  display: inline-block;

  min-width: 100px;

  color: var(--text-main);

}


/* =========================================
   SIDEBAR
========================================= */

.sidebar {

  min-width: 0;

}


/* =========================================
   STICKY PANE
========================================= */

.sticky-pane {

  /*
   * Sticky Pane
   *
   * Kartu tiket tetap berada pada area
   * yang terlihat ketika halaman di-scroll.
   */

  position: sticky;

  top: 100px;

}


/* =========================================
   TICKET CARD
   FOCAL POINT
========================================= */

.ticket-card {

  background: white;

  padding: var(--space-8);

  border-radius: var(--space-4);

  border:
    1px solid var(--border-color);

  box-shadow:
    0 8px 30px rgba(0, 0, 0, 0.06);

  text-align: center;

}


/* =========================================
   TICKET TITLE
========================================= */

.ticket-card h3 {

  font-size: 1.5rem;

  color: var(--text-main);

  margin-bottom: var(--space-2);

}


/* =========================================
   PRICE
========================================= */

.price {

  font-size: 2.8rem;

  font-weight: 800;

  color: var(--primary);

  margin-bottom: var(--space-2);

}


/* =========================================
   TICKET DESCRIPTION
========================================= */

.ticket-desc {

  color: var(--text-muted);

  margin-bottom: var(--space-6);

}


/* =========================================
   REGISTER BUTTON
   STRONGEST FOCAL POINT
========================================= */

.btn-register {

  width: 100%;

  padding: var(--space-4);

  background: var(--primary);

  color: white;

  border: none;

  border-radius: 12px;

  font-size: 1.1rem;

  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

}


.btn-register:hover {

  background: var(--primary-hover);

  transform: translateY(-2px);

}


/* =========================================
   AVAILABLE SPOTS
========================================= */

.spots {

  margin-top: var(--space-4);

  color: #e63946;

  font-weight: 600;

  font-size: 0.95rem;

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

@media (max-width: 900px) {

  .grid-asymmetric {

    grid-template-columns: 1fr;

  }


  .detail-header {

    padding: var(--space-8);

  }


  .detail-header h1 {

    font-size: 2.2rem;

  }


  .sticky-pane {

    position: static;

  }

}


@media (max-width: 600px) {

  .detail-header {

    padding: var(--space-6);

  }


  .detail-header h1 {

    font-size: 1.8rem;

  }


  .meta-info {

    flex-direction: column;

    gap: var(--space-3);

  }


  .grid-asymmetric {

    gap: var(--space-8);

  }


  .ticket-card {

    padding: var(--space-6);

  }

}

</style>