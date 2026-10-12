
<script setup>
import { useRouter } from 'vue-router'
import AppButton from '@/components/ui/AppButton.vue'
import AppCard from '@/components/ui/AppCard.vue'

const router = useRouter()

const features = [
  {
    icon: '🔎',
    title: 'Discover Easily',
    description:
      'Find events tailored to your interests using our smart category and location filters.',
  },
  {
    icon: '🎟️',
    title: 'Seamless Ticketing',
    description:
      'Register with one click and get your digital QR ticket instantly on your device.',
  },
  {
    icon: '📊',
    title: 'Host Like a Pro',
    description:
      'Manage attendees, track revenue, and scan QR codes with our comprehensive dashboard.',
  },
]

const sitemap = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Browse',
    path: '/browse',
    children: [
      { label: 'Event List', path: '/browse/events' },
      { label: 'Event Detail (Example)', path: '/browse/events/1' },
      { label: 'Category', path: '/browse/category' },
    ],
  },
  { label: 'Contact', path: '/contact' },
]

function discoverEvents() {
  router.push('/browse/events')
}
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">
          Connect, Discover, and Experience
        </h1>

        <p class="hero-subtitle">
          A community event platform designed to bring ideas together.
          Discover hundreds of events near you.
        </p>

        <div class="hero-action">
          <AppButton
            variant="primary"
            @click="discoverEvents"
          >
            Discover Events
          </AppButton>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="features-header">
        <h2>Why Choose Gatherly?</h2>
        <p>
          Everything you need to host or attend unforgettable events.
        </p>
      </div>

      <div class="features-grid">
        <AppCard
          v-for="feature in features"
          :key="feature.title"
          class="feature-card"
        >
          <div class="feature-icon">
            {{ feature.icon }}
          </div>

          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </AppCard>
      </div>
    </section>

    <!-- Sitemap Section -->
    <section class="sitemap-visual">
      <h2>Website Structure / Site-Map</h2>

      <p class="sitemap-desc">
        A quick overview of how this application is structured via Vue Router.
      </p>

      <ul class="tree">
        <li
          v-for="item in sitemap"
          :key="item.path"
        >
          <router-link :to="item.path">
            {{ item.label }}
          </router-link>

          <ul v-if="item.children">
            <li
              v-for="child in item.children"
              :key="child.path"
            >
              <router-link :to="child.path">
                {{ child.label }}
              </router-link>
            </li>
          </ul>
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

/* Hero Section */
.hero-section {
  min-height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--bg-light);
  border-radius: var(--space-6);
  border: 1px solid var(--border-color);
  padding: var(--space-12) var(--space-6);
  margin-bottom: var(--space-6);
}

.hero-content {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-title {
  margin: 0 0 var(--space-6);
  font-size: 4rem;
  font-weight: 800;
  color: var(--text-main);
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  margin: 0 0 var(--space-8);
  max-width: 600px;
  line-height: 1.6;
}

.hero-action {
  display: flex;
  justify-content: center;
}

/* Features Section */
.features-section {
  padding: 0 var(--space-12);
}

.features-header {
  text-align: center;
  margin-bottom: var(--space-8);
}

.features-header h2 {
  font-size: 2.2rem;
  color: var(--text-main);
  margin: 0 0 var(--space-2);
}

.features-header p {
  color: var(--text-muted);
  font-size: 1.1rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-8);
}

.feature-card {
  padding: var(--space-8);
  text-align: center;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: var(--space-4);
}

.feature-card h3 {
  font-size: 1.3rem;
  color: var(--text-main);
  margin-bottom: var(--space-2);
}

.feature-card p {
  color: var(--text-muted);
  line-height: 1.6;
}

/* Sitemap Section */
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
  .hero-title {
    font-size: 2.8rem;
  }

  .features-section {
    padding: 0 var(--space-4);
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
    font-size: 1rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .sitemap-visual {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.9rem;
  }

  .sitemap-visual {
    padding: 18px;
  }

  .tree,
  .tree ul {
    padding-left: 14px;
  }
}
</style>
