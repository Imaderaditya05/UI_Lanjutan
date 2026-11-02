<template>
  <div class="browse-page">
    <!-- Header -->
    <div class="browse-header">
      <h1>Browse & Discover</h1>
      <p>Find the events and categories that matter most to you.</p>
    </div>

    <!-- Browse Home -->
    <div class="browse-home">
      <h2>Explore Gatherly</h2>

      <p class="browse-description">
        Discover exciting events and explore different categories available on Gatherly.
      </p>

      <div class="browse-options">
        <!-- Event List -->
        <router-link to="/browse/events" class="browse-option">
          <div class="icon">📅</div>

          <div class="option-content">
            <h3>Event List</h3>

            <p>See all upcoming events and activities happening near you.</p>
          </div>

          <span class="arrow"> → </span>
        </router-link>

        <!-- Category -->
        <router-link to="/browse/category" class="browse-option">
          <div class="icon">🗂️</div>

          <div class="option-content">
            <h3>Category</h3>

            <p>Explore events based on different categories.</p>
          </div>

          <span class="arrow"> → </span>
        </router-link>
      </div>
    </div>

    <!-- Child Pages -->
    <router-view />
  </div>
</template>

<style scoped>
.browse-page {
  width: 100%;
  animation: fadeIn 0.4s ease;
}

/* =========================
   HEADER
========================= */

.browse-header {
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}

.browse-header h1 {
  font-size: 2.5rem;
  color: #1c1948;
  margin-bottom: 0.6rem;
}

.browse-header p {
  color: #666;
  font-size: 1.1rem;
}

/* =========================
   BROWSE HOME CARD
========================= */

.browse-home {
  background: white;

  border: 1px solid #eee;
  border-radius: 18px;

  padding: 2.5rem;

  margin-bottom: 2rem;
}

.browse-home h2 {
  color: #1c1948;

  font-size: 2rem;

  margin-bottom: 0.7rem;
}

.browse-description {
  color: #666;

  font-size: 1rem;

  line-height: 1.6;

  margin-bottom: 2rem;
}

/* =========================
   OPTIONS
========================= */

.browse-options {
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 1.5rem;
}

.browse-option {
  display: flex;

  align-items: center;

  gap: 1.2rem;

  padding: 1.5rem;

  border: 1px solid #eee;

  border-radius: 14px;

  background: white;

  text-decoration: none;

  transition: all 0.25s ease;
}

.browse-option:hover {
  transform: translateY(-4px);

  border-color: #6644ff;

  background: #f8f6ff;

  box-shadow: 0 8px 20px rgba(102, 68, 255, 0.08);
}

/* =========================
   ICON
========================= */

.icon {
  width: 55px;
  height: 55px;

  display: flex;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  background: #f1edff;

  border-radius: 12px;

  font-size: 1.6rem;
}

/* =========================
   TEXT
========================= */

.option-content {
  flex: 1;
}

.option-content h3 {
  color: #1c1948;

  font-size: 1.2rem;

  margin-bottom: 0.4rem;
}

.option-content p {
  color: #666;

  font-size: 0.9rem;

  line-height: 1.5;

  margin: 0;
}

/* =========================
   ARROW
========================= */

.arrow {
  color: #6644ff;

  font-size: 1.5rem;

  font-weight: 600;
}

/* =========================
   ANIMATION
========================= */

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

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 768px) {
  .browse-home {
    padding: 1.5rem;
  }

  .browse-options {
    grid-template-columns: 1fr;
  }

  .browse-header h1 {
    font-size: 2rem;
  }
}
</style>
