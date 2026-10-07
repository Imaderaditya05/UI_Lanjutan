<template>
  <div class="home-page">
    <!-- =========================================
         HERO SECTION
    ========================================== -->
    <section class="hero-section">
      <div class="hero-content">
        <span class="badge"> Welcome to Gatherly </span>

        <h1 class="hero-title">Connect, Discover, and Experience</h1>

        <p class="hero-subtitle">
          A community event platform designed to bring ideas together. Discover hundreds of events
          near you.
        </p>

        <div class="hero-action">
          <router-link to="/browse/events" class="btn btn-primary"> Discover Events </router-link>

          <router-link to="/about" class="btn btn-secondary"> Learn More </router-link>
        </div>
      </div>
    </section>

    <!-- =========================================
         FEATURES SECTION
    ========================================== -->
    <section class="features-section">
      <div class="features-header">
        <h2>Why Choose Gatherly?</h2>

        <p>Everything you need to host or attend unforgettable events.</p>
      </div>

      <div class="features-grid">
        <!-- Feature 1 -->
        <div class="feature-card">
          <div class="feature-icon">🔎</div>

          <h3>Discover Easily</h3>

          <p>
            Find events tailored to your interests using our smart category and location filters.
          </p>
        </div>

        <!-- Feature 2 -->
        <div class="feature-card">
          <div class="feature-icon">🎟️</div>

          <h3>Seamless Ticketing</h3>

          <p>Register with one click and get your digital QR ticket instantly on your device.</p>
        </div>

        <!-- Feature 3 -->
        <div class="feature-card">
          <div class="feature-icon">📊</div>

          <h3>Host Like a Pro</h3>

          <p>
            Manage attendees, track revenue, and scan QR codes with our comprehensive dashboard.
          </p>
        </div>
      </div>
    </section>

    <!-- =========================================
         SITEMAP SECTION
    ========================================== -->
    <section class="sitemap-visual">
      <h2>Website Structure / Site-Map</h2>

      <p class="sitemap-desc">
        A quick overview of how this application is structured via Vue Router.
      </p>

      <ul class="tree">
        <li>
          <router-link to="/"> Home </router-link>
        </li>

        <li>
          <router-link to="/about"> About </router-link>
        </li>

        <li>
          <router-link to="/browse"> Browse </router-link>

          <ul>
            <li>
              <router-link to="/browse/events"> Event List </router-link>
            </li>

            <li>
              <router-link to="/browse/events/1"> Event Detail (Example) </router-link>
            </li>

            <li>
              <router-link to="/browse/category"> Category </router-link>
            </li>
          </ul>
        </li>

        <li>
          <router-link to="/contact"> Contact </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 40px;
  animation: fadeIn 0.5s ease;
}

/* =========================
   HERO
========================= */

.hero-section {
  min-height: 430px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  background: var(--bg-light);

  border-radius: 20px;
  border: 1px solid var(--border-color);

  padding: 48px 24px;
}

.hero-content {
  width: 100%;
  max-width: 760px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.badge {
  display: inline-block;

  padding: 7px 16px;
  margin-bottom: 20px;

  background: rgba(102, 68, 255, 0.08);
  color: var(--primary);

  border-radius: 50px;

  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.3px;
}

.hero-title {
  margin: 0 0 18px;

  color: var(--text-main);

  font-size: 3.2rem;
  font-weight: 800;
  line-height: 1.1;

  max-width: 720px;
}

.hero-subtitle {
  margin: 0 0 28px;

  max-width: 560px;

  color: var(--text-muted);

  font-size: 1rem;
  line-height: 1.6;
}

.hero-action {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 12px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 44px;

  padding: 10px 24px;

  border-radius: 8px;

  font-size: 0.9rem;
  font-weight: 600;

  text-decoration: none;

  transition: all 0.2s ease;
}

.btn-primary {
  background: var(--primary);
  color: white;

  border: 1px solid var(--primary);

  box-shadow: 0 6px 16px rgba(102, 68, 255, 0.22);
}

.btn-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
}

.btn-secondary {
  background: white;
  color: var(--text-main);

  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  border-color: var(--primary);
  color: var(--primary);

  transform: translateY(-2px);
}

/* =========================
   FEATURES
========================= */

.features-section {
  padding: 0 16px;
}

.features-header {
  text-align: center;

  margin-bottom: 24px;
}

.features-header h2 {
  margin: 0 0 8px;

  color: var(--text-main);

  font-size: 1.8rem;
  font-weight: 750;
}

.features-header p {
  margin: 0;

  color: var(--text-muted);

  font-size: 0.95rem;
}

.features-grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 20px;
}

.feature-card {
  background: var(--bg-light);

  padding: 24px;

  border-radius: 14px;

  border: 1px solid var(--border-color);

  text-align: center;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);

  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.05);
}

.feature-icon {
  width: 52px;
  height: 52px;

  margin: 0 auto 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(102, 68, 255, 0.08);

  border-radius: 12px;

  font-size: 1.7rem;
}

.feature-card h3 {
  margin: 0 0 8px;

  color: var(--text-main);

  font-size: 1.05rem;
}

.feature-card p {
  margin: 0;

  color: var(--text-muted);

  font-size: 0.88rem;

  line-height: 1.5;
}

/* =========================
   SITEMAP
========================= */

.sitemap-visual {
  padding: 32px;

  background: var(--bg-gray);

  border-radius: 14px;

  border: 1px solid var(--border-color);
}

.sitemap-visual h2 {
  margin: 0 0 8px;

  color: var(--text-main);

  font-size: 1.5rem;
}

.sitemap-desc {
  margin: 0 0 24px;

  color: var(--text-muted);

  font-size: 0.9rem;
}

.tree,
.tree ul {
  list-style: none;
  padding-left: 20px;
}

.tree li {
  position: relative;

  margin: 10px 0;
}

.tree li::before {
  content: '';

  position: absolute;

  top: -10px;
  left: -15px;

  width: 10px;
  height: 28px;

  border-left: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

.tree a {
  display: inline-block;

  padding: 7px 14px;

  color: var(--text-main);

  background: white;

  border: 1px solid var(--border-color);
  border-radius: 7px;

  text-decoration: none;

  font-size: 0.85rem;
  font-weight: 500;

  transition: all 0.2s ease;
}

.tree a:hover {
  color: var(--primary);
  border-color: var(--primary);
}

.tree .router-link-exact-active {
  color: white;
  background: var(--primary);
  border-color: var(--primary);
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

@media (max-width: 900px) {
  .hero-title {
    font-size: 2.6rem;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .home-page {
    gap: 32px;
  }

  .hero-section {
    min-height: 380px;

    padding: 40px 20px;
  }

  .hero-title {
    font-size: 2.3rem;
  }

  .hero-subtitle {
    font-size: 0.95rem;
  }

  .hero-action {
    width: 100%;
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .features-section {
    padding: 0;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .sitemap-visual {
    padding: 24px;
  }
}
</style>
