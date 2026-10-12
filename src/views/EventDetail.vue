
<script setup>
import { useRoute, useRouter } from 'vue-router'
import AppCard from '@/components/ui/AppCard.vue'
import AppButton from '@/components/ui/AppButton.vue'

const route = useRoute()
const router = useRouter()

const agenda = [
  {
    time: '09:00 AM',
    activity: 'Registration & QR Check-in Scanning',
  },
  {
    time: '10:00 AM',
    activity: 'Session 1: Vue Router & Navigation Fundamentals',
  },
  {
    time: '11:30 AM',
    activity: 'Coffee Break & Networking Session',
  },
  {
    time: '01:00 PM',
    activity: 'Session 2: Layout System & Grid Implementation',
  },
  {
    time: '03:00 PM',
    activity: 'Q&A & Closing Remarks',
  },
]

function goBack() {
  router.push('/browse/events')
}

function registerEvent() {
  alert('Registration feature will be available soon!')
}
</script>

<template>
  <div class="event-detail-page">
    <!-- Back Button -->
    <button class="btn-back" @click="goBack">
      &larr; Back to Events
    </button>

    <!-- Event Header -->
    <section class="detail-header">
      <div class="header-content">
        <span class="event-tag">Workshop & Training</span>

        <h1>Vue.js Mastery Workshop {{ route.params.id }}</h1>

        <div class="meta-info">
          <span class="meta-item">📅 October 12, 2026</span>
          <span class="meta-item">📍 Tech Hub, Jakarta Pusat</span>
          <span class="meta-item">🎟️ Quota: 150 Attendees</span>
        </div>
      </div>
    </section>

    <!-- Asymmetrical Layout -->
    <div class="detail-content grid-asymmetric">
      <!-- Main Description -->
      <main class="main-desc">
        <h2>About This Event</h2>

        <p>
          Welcome to the biggest web interface development training event
          of the year! Gatherly is collaborating with the local developer
          community to host a comprehensive workshop designed specifically
          to bring together professionals, enthusiasts, and students.
        </p>

        <p>
          In this session, we will discuss various current industry
          challenges, dissect the implementation of Single Page Applications
          (SPA), and practice hands-on Layout System design prioritizing
          visual hierarchy. You will gain practical insights that can be
          directly applied to your future projects or career.
        </p>

        <!-- Event Agenda -->
        <h2 class="agenda-title">Event Agenda</h2>

        <ul class="agenda-list">
          <li v-for="item in agenda" :key="item.time">
            <strong>{{ item.time }}</strong>
            <span>{{ item.activity }}</span>
          </li>
        </ul>
      </main>

      <!-- Ticket Sidebar -->
      <aside class="sidebar">
        <AppCard class="ticket-card sticky-pane">
          <h3>Attendee Registration</h3>

          <p class="price">Free</p>

          <p class="ticket-desc">
            Secure your seat now before the quota is full.
          </p>

          <AppButton
            variant="primary"
            class="btn-register"
            @click="registerEvent"
          >
            Register Now
          </AppButton>

          <p class="spots">Only 12 seats left!</p>
        </AppCard>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.event-detail-page {
  animation: fadeIn 0.5s ease;
}

/* Back Button */
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

/* Event Header */
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

/* Event Tag */
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

/* Event Title */
.detail-header h1 {
  color: var(--text-main);
  font-size: 2.8rem;
  margin-bottom: var(--space-6);
  line-height: 1.2;
}

/* Meta Information */
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

/* Asymmetrical Layout */
.grid-asymmetric {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-12);
}

.main-desc {
  min-width: 0;
}

/* Content Heading */
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

/* Event Agenda */
.agenda-title {
  margin-top: var(--space-12);
}

.agenda-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.agenda-list li {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: var(--space-4) 0;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-muted);
  font-size: 1.05rem;
}

.agenda-list li strong {
  display: inline-block;
  min-width: 100px;
  color: var(--text-main);
}

/* Sidebar */
.sidebar {
  min-width: 0;
}

/* Sticky Pane */
.sticky-pane {
  position: sticky;
  top: 100px;
}

/* Ticket Card */
.ticket-card {
  padding: var(--space-8);
  text-align: center;
}

.ticket-card h3 {
  font-size: 1.5rem;
  color: var(--text-main);
  margin-bottom: var(--space-2);
}

.price {
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: var(--space-2);
}

.ticket-desc {
  color: var(--text-muted);
  margin-bottom: var(--space-6);
}

/* Register Button */
.btn-register {
  width: 100%;
}

.spots {
  margin-top: var(--space-4);
  color: #e63946;
  font-weight: 600;
  font-size: 0.95rem;
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

  .agenda-list li {
    flex-direction: column;
    gap: 4px;
  }
}
</style>
