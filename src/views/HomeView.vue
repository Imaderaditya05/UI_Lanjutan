<template>
  <div class="home-page">

    <!-- =========================================
         HERO SECTION
    ========================================== -->
    <section class="hero-section">
      <div class="hero-content">

        <span class="badge">
          Welcome to Gatherly
        </span>

        <h1 class="hero-title">
          Connect, Discover, and Experience
        </h1>

        <p class="hero-subtitle">
          A community event platform designed to bring ideas together.
          Discover hundreds of events near you.
        </p>

        <div class="hero-action">

          <router-link
            to="/browse/events"
            class="btn btn-primary"
          >
            Discover Events
          </router-link>

          <router-link
            to="/about"
            class="btn btn-secondary"
          >
            Learn More
          </router-link>

        </div>

      </div>
    </section>


    <!-- =========================================
         FEATURES SECTION
    ========================================== -->
    <section class="features-section">

      <div class="features-header">
        <h2>Why Choose Gatherly?</h2>

        <p>
          Everything you need to host or attend unforgettable events.
        </p>
      </div>


      <div class="features-grid">

        <!-- Feature 1 -->
        <div class="feature-card">

          <div class="feature-icon">
            🔎
          </div>

          <h3>
            Discover Easily
          </h3>

          <p>
            Find events tailored to your interests using our smart
            category and location filters.
          </p>

        </div>


        <!-- Feature 2 -->
        <div class="feature-card">

          <div class="feature-icon">
            🎟️
          </div>

          <h3>
            Seamless Ticketing
          </h3>

          <p>
            Register with one click and get your digital QR ticket
            instantly on your device.
          </p>

        </div>


        <!-- Feature 3 -->
        <div class="feature-card">

          <div class="feature-icon">
            📊
          </div>

          <h3>
            Host Like a Pro
          </h3>

          <p>
            Manage attendees, track revenue, and scan QR codes
            with our comprehensive dashboard.
          </p>

        </div>

      </div>

    </section>


    <!-- =========================================
         SITEMAP SECTION
    ========================================== -->
    <section class="sitemap-visual">

      <h2>
        Website Structure / Site-Map
      </h2>

      <p class="sitemap-desc">
        A quick overview of how this application is structured
        via Vue Router.
      </p>


      <ul class="tree">

        <li>
          <router-link to="/">
            Home
          </router-link>
        </li>

        <li>
          <router-link to="/about">
            About
          </router-link>
        </li>

        <li>

          <router-link to="/browse">
            Browse
          </router-link>

          <ul>

            <li>
              <router-link to="/browse/events">
                Event List
              </router-link>
            </li>

            <li>
              <router-link to="/browse/events/1">
                Event Detail (Example)
              </router-link>
            </li>

            <li>
              <router-link to="/browse/category">
                Category
              </router-link>
            </li>

          </ul>

        </li>

        <li>
          <router-link to="/contact">
            Contact
          </router-link>
        </li>

      </ul>

    </section>

  </div>
</template>


<style scoped>

/* =========================================
   HOME PAGE
========================================= */

.home-page {
  display: flex;
  flex-direction: column;
  gap: var(--space-12);

  animation: fadeIn 0.5s ease;
}


/* =========================================
   HERO SECTION
   THE FOLD
========================================= */

.hero-section {

  /* THE FOLD
     Memastikan bagian utama memenuhi sebagian besar
     area layar sehingga informasi utama dan tombol
     langsung terlihat oleh pengguna. */

  min-height: 65vh;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  background: var(--bg-light);

  border-radius: var(--space-6);

  border: 1px solid var(--border-color);

  padding: var(--space-12) var(--space-6);

  margin-bottom: var(--space-12);

  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.02);
}


/* =========================================
   HERO CONTENT
   Z-PATTERN
========================================= */

.hero-content {

  max-width: 800px;

  display: flex;

  flex-direction: column;

  align-items: center;
}


/* =========================================
   BADGE
========================================= */

.badge {

  display: inline-block;

  padding: 0.5rem 1.2rem;

  background: rgba(102, 68, 255, 0.08);

  color: var(--primary);

  border-radius: 50px;

  font-weight: 600;

  font-size: 0.9rem;

  margin-bottom: var(--space-8);

  letter-spacing: 0.5px;
}


/* =========================================
   HERO TITLE
   SCALE / VISUAL HIERARCHY
========================================= */

.hero-title {

  /* SCALE:
     Ukuran judul dibuat paling besar
     sebagai fokus utama pengguna. */

  font-size: 4rem;

  font-weight: 800;

  color: var(--text-main);

  line-height: 1.1;

  margin-bottom: var(--space-6);
}


/* =========================================
   HERO SUBTITLE
========================================= */

.hero-subtitle {

  font-size: 1.25rem;

  color: var(--text-muted);

  line-height: 1.6;

  margin-bottom: var(--space-8);

  max-width: 600px;
}


/* =========================================
   HERO ACTION
========================================= */

.hero-action {

  display: flex;

  gap: var(--space-4);

  justify-content: center;

  flex-wrap: wrap;
}


/* =========================================
   BUTTON
========================================= */

.btn {

  padding: var(--space-3) var(--space-8);

  border-radius: 12px;

  font-weight: 600;

  text-decoration: none;

  transition:
    transform 0.2s,
    background-color 0.2s;
}


/* =========================================
   PRIMARY BUTTON
   FOCAL POINT
========================================= */

.btn-primary {

  background: var(--primary);

  color: white;

  font-size: 1.1rem;

  font-weight: 600;

  text-decoration: none;

  padding: var(--space-3) var(--space-8);

  border-radius: 12px;

  transition:
    transform 0.2s,
    background-color 0.2s;

  /* Membuat tombol menjadi focal point */

  box-shadow:
    0 8px 20px rgba(102, 68, 255, 0.3);
}


.btn-primary:hover {

  background: var(--primary-hover);

  transform: translateY(-2px);
}


/* =========================================
   SECONDARY BUTTON
========================================= */

.btn-secondary {

  background: white;

  color: var(--text-main);

  border: 1px solid var(--border-color);

  font-size: 1.1rem;

  padding: var(--space-3) var(--space-8);

  border-radius: 12px;

  transition:
    transform 0.2s,
    border-color 0.2s;
}


.btn-secondary:hover {

  border-color: var(--primary);

  color: var(--primary);

  transform: translateY(-2px);
}


/* =========================================
   FEATURES SECTION
========================================= */

.features-section {

  padding: 0 var(--space-12);
}


/* =========================================
   FEATURES HEADER
========================================= */

.features-header {

  text-align: center;

  margin-bottom: var(--space-8);
}


.features-header h2 {

  font-size: 2.2rem;

  color: var(--text-main);

  margin-bottom: var(--space-2);
}


.features-header p {

  color: var(--text-muted);

  font-size: 1.1rem;
}


/* =========================================
   FEATURES GRID
   ADAPTIVE GRID
========================================= */

.features-grid {

  /* GRID SYSTEM:
     Membagi fitur secara otomatis menjadi
     beberapa kolom sesuai ukuran layar. */

  display: grid;

  grid-template-columns:
    repeat(
      auto-fit,
      minmax(280px, 1fr)
    );

  gap: var(--space-8);
}


/* =========================================
   FEATURE CARD
   COMMON REGION
========================================= */

.feature-card {

  background: var(--bg-light);

  padding: var(--space-8);

  border-radius: var(--space-4);

  border: 1px solid var(--border-color);

  text-align: center;

  transition:
    transform 0.2s,
    box-shadow 0.2s;
}


.feature-card:hover {

  transform: translateY(-5px);

  box-shadow:
    0 10px 25px rgba(0, 0, 0, 0.04);
}


/* =========================================
   FEATURE ICON
========================================= */

.feature-icon {

  font-size: 3rem;

  margin-bottom: var(--space-4);
}


/* =========================================
   FEATURE TITLE
========================================= */

.feature-card h3 {

  font-size: 1.3rem;

  color: var(--text-main);

  margin-bottom: var(--space-2);
}


/* =========================================
   FEATURE DESCRIPTION
========================================= */

.feature-card p {

  color: var(--text-muted);

  line-height: 1.6;

  margin: 0;
}


/* =========================================
   SITEMAP
========================================= */

.sitemap-visual {

  padding: var(--space-12);

  background: var(--bg-gray);

  border-radius: var(--space-4);

  border: 1px solid var(--border-color);
}


.sitemap-visual h2 {

  color: var(--text-main);

  margin-bottom: var(--space-2);
}


.sitemap-desc {

  color: var(--text-muted);

  margin-bottom: var(--space-8);
}


/* =========================================
   TREE STRUCTURE
========================================= */

.tree,
.tree ul {

  list-style: none;

  padding-left: 20px;
}


.tree li {

  margin: 12px 0;

  position: relative;
}


.tree li::before {

  content: "";

  position: absolute;

  top: -12px;

  left: -15px;

  border-left: 1px solid var(--border-color);

  border-bottom: 1px solid var(--border-color);

  width: 10px;

  height: 30px;
}


.tree a {

  text-decoration: none;

  color: var(--text-main);

  font-weight: 500;

  padding: 8px 16px;

  border-radius: 8px;

  display: inline-block;

  transition: all 0.2s;

  background: white;

  border: 1px solid var(--border-color);
}


.tree a:hover {

  border-color: var(--primary);

  color: var(--primary);
}


.tree .router-link-exact-active {

  background: var(--primary);

  color: white;

  border-color: var(--primary);
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

  .features-section {

    padding: 0 var(--space-6);

  }

}


@media (max-width: 768px) {

  .home-page {

    gap: var(--space-8);

  }


  .hero-section {

    min-height: 70vh;

    padding: var(--space-8) var(--space-4);

  }


  .hero-title {

    font-size: 2.5rem;

  }


  .hero-subtitle {

    font-size: 1rem;

  }


  .hero-action {

    flex-direction: column;

    width: 100%;

  }


  .btn {

    width: 100%;

    text-align: center;

  }


  .features-section {

    padding: 0 var(--space-4);

  }


  .features-grid {

    grid-template-columns: 1fr;

  }


  .sitemap-visual {

    padding: var(--space-6);

  }

}

</style>