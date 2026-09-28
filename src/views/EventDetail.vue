<template>
  <div class="event-detail-page">

    <!-- Back Button -->
    <button class="btn-back" @click="$router.back()">
      ← Back to Events
    </button>

    <!-- Event Header -->
    <section class="detail-header">
      <div class="header-content">

        <span class="event-tag">
          Technology
        </span>

        <h1>
          Tech Innovation Summit 2026
        </h1>

        <div class="meta-info">

          <div class="meta-item">
            📅
            <span>15 October 2026</span>
          </div>

          <div class="meta-item">
            🕐
            <span>09:00 AM - 05:00 PM</span>
          </div>

          <div class="meta-item">
            📍
            <span>Jakarta Convention Center</span>
          </div>

        </div>

      </div>
    </section>

    <!-- Main Content -->
    <div class="detail-content">

      <!-- Main Description -->
      <main class="main-desc">

        <h2>
          About This Event
        </h2>

        <p>
          Join us at the Tech Innovation Summit 2026 and discover
          the latest innovations, technologies, and digital trends
          that are shaping the future.
        </p>

        <p>
          This event brings together technology enthusiasts,
          industry professionals, entrepreneurs, and innovators
          to share knowledge, ideas, and experiences.
        </p>

        <!-- Agenda -->
        <h2 class="agenda-title">
          Event Agenda
        </h2>

        <ul class="agenda-list">

          <li>
            <strong>09:00 AM</strong>
            Registration & Networking
          </li>

          <li>
            <strong>10:00 AM</strong>
            Opening & Keynote Session
          </li>

          <li>
            <strong>11:30 AM</strong>
            Technology Innovation Panel
          </li>

          <li>
            <strong>01:00 PM</strong>
            Lunch Break
          </li>

          <li>
            <strong>02:00 PM</strong>
            Workshop & Discussion
          </li>

          <li>
            <strong>04:00 PM</strong>
            Closing & Networking
          </li>

        </ul>

      </main>

      <!-- Ticket Sidebar -->
      <aside class="sidebar">

        <div class="ticket-card">

          <h3>
            Get Your Ticket
          </h3>

          <div class="price">
            Rp 150.000
          </div>

          <p class="ticket-desc">
            Secure your spot and join this exciting event.
          </p>

          <button class="btn-register">
            Register Now
          </button>

          <p class="spots">
            🔥 Only 25 spots left
          </p>

        </div>

      </aside>

    </div>

  </div>
</template>

<script setup>
// Event Detail Page
</script>

<style scoped>
.event-detail-page {
  animation: fadeIn 0.5s ease;
}

/* ==============================
   BACK BUTTON
============================== */

.btn-back {
  background: none;
  border: none;
  color: #666;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: color 0.2s;
  padding: 0;
}

.btn-back:hover {
  color: #6644ff;
}

/* ==============================
   EVENT HEADER
============================== */

.detail-header {
  background: #fdfdfd;
  border-radius: 20px;
  border: 1px solid #f0f0f0;
  padding: 4rem 3rem;
  margin-bottom: 3rem;
}

.header-content {
  max-width: 800px;
}

.event-tag {
  display: inline-block;
  background: rgba(102, 68, 255, 0.1);
  color: #6644ff;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.header-content h1 {
  color: #1c1948;
  font-size: 2.8rem;
  margin-bottom: 2rem;
  line-height: 1.2;
}

/* ==============================
   META INFORMATION
============================== */

.meta-info {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #555;
  font-weight: 500;
  font-size: 1.05rem;
}

/* ==============================
   DETAIL CONTENT
============================== */

.detail-content {
  display: flex;
  gap: 4rem;
}

/* ==============================
   MAIN DESCRIPTION
============================== */

.main-desc {
  flex: 2;
}

.main-desc h2 {
  color: #1c1948;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.main-desc h2::before {
  content: "";
  display: block;
  width: 20px;
  height: 4px;
  background: #6644ff;
  border-radius: 2px;
}

.main-desc p {
  color: #444;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
}

/* ==============================
   AGENDA
============================== */

.agenda-title {
  margin-top: 3rem;
}

.agenda-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.agenda-list li {
  padding: 1rem 0;
  border-bottom: 1px solid #f0f0f0;
  color: #444;
  font-size: 1.05rem;
}

.agenda-list li strong {
  display: inline-block;
  min-width: 100px;
  color: #1c1948;
}

/* ==============================
   SIDEBAR
============================== */

.sidebar {
  flex: 1;
}

/* ==============================
   TICKET CARD
============================== */

.ticket-card {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid #f0f0f0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
  text-align: center;
  position: sticky;
  top: 100px;
}

.ticket-card h3 {
  color: #1c1948;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

/* ==============================
   PRICE
============================== */

.price {
  font-size: 2.8rem;
  font-weight: 800;
  color: #6644ff;
  margin-bottom: 0.5rem;
}

.ticket-desc {
  color: #666;
  margin-bottom: 2rem;
}

/* ==============================
   REGISTER BUTTON
============================== */

.btn-register {
  width: 100%;
  padding: 1.2rem;
  background: #1c1948;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-register:hover {
  background: #6644ff;
}

/* ==============================
   AVAILABLE SPOTS
============================== */

.spots {
  margin-top: 1.5rem;
  color: #e63946;
  font-weight: 600;
  font-size: 0.95rem;
}

/* ==============================
   ANIMATION
============================== */

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

/* ==============================
   RESPONSIVE
============================== */

@media (max-width: 900px) {
  .detail-content {
    flex-direction: column;
  }

  .detail-header {
    padding: 3rem 2rem;
  }

  .header-content h1 {
    font-size: 2.2rem;
  }

  .ticket-card {
    position: static;
  }
}

@media (max-width: 600px) {
  .detail-header {
    padding: 2rem 1.5rem;
  }

  .header-content h1 {
    font-size: 1.8rem;
  }

  .meta-info {
    flex-direction: column;
    gap: 1rem;
  }

  .detail-content {
    gap: 2rem;
  }

  .ticket-card {
    padding: 2rem 1.5rem;
  }
}
</style>