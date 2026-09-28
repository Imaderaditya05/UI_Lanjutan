<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <RouterLink to="/" class="logo"> Gatherly </RouterLink>

      <!-- Menu -->
      <div class="nav-menu">
        <!-- Home -->
        <RouterLink to="/" class="nav-link" active-class="active" exact-active-class="active">
          Home
        </RouterLink>

        <!-- About -->
        <RouterLink to="/about" class="nav-link" active-class="active"> About </RouterLink>

        <!-- Browse Dropdown -->
        <div class="dropdown" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
          <button
            class="nav-link browse-button"
            :class="{ active: isBrowseActive }"
            @click="showDropdown = !showDropdown"
          >
            Browse
            <span class="arrow">▼</span>
          </button>

          <!-- Dropdown Menu -->
          <div v-if="showDropdown" class="dropdown-menu">
            <!-- Browse Home -->
            <RouterLink to="/browse" class="dropdown-item" @click="showDropdown = false">
              Browse Home
            </RouterLink>

            <!-- Event List -->
            <RouterLink to="/browse/events" class="dropdown-item" @click="showDropdown = false">
              Event List
            </RouterLink>

            <!-- Category -->
            <RouterLink to="/browse/category" class="dropdown-item" @click="showDropdown = false">
              Category
            </RouterLink>
          </div>
        </div>

        <!-- Contact -->
        <RouterLink to="/contact" class="nav-link" active-class="active"> Contact </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const showDropdown = ref(false)

const isBrowseActive = computed(() => {
  return route.path.startsWith('/browse')
})
</script>

<style scoped>
.navbar {
  width: 100%;
  background: white;
  border-bottom: 1px solid #eee;
  position: relative;
  z-index: 1000;
}

.navbar-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.7rem;
  font-weight: 800;
  color: #1c1948;
  text-decoration: none;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;

  padding: 0.8rem 1rem;

  border-radius: 10px;

  color: #444;
  text-decoration: none;

  font-size: 1rem;
  font-weight: 500;

  background: transparent;
  border: none;

  cursor: pointer;

  transition: all 0.2s ease;
}

.nav-link:hover {
  background: #f1edff;
  color: #6644ff;
}

.nav-link.active {
  background: #6644ff;
  color: white;
}

/* Browse */
.dropdown {
  position: relative;
}

.browse-button {
  font-family: inherit;
}

.arrow {
  font-size: 0.7rem;
}

/* Dropdown */
.dropdown-menu {
  position: absolute;

  top: calc(100% + 8px);
  right: 0;

  width: 190px;

  background: white;

  border: 1px solid #eee;
  border-radius: 12px;

  padding: 0.5rem;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  z-index: 9999;
}

/* Menjaga dropdown tidak langsung hilang */
.dropdown-menu::before {
  content: '';

  position: absolute;

  top: -10px;
  left: 0;

  width: 100%;
  height: 10px;
}

.dropdown-item {
  display: block;

  padding: 0.85rem 1rem;

  color: #444;

  text-decoration: none;

  border-radius: 8px;

  font-size: 0.95rem;

  transition: all 0.2s ease;
}

.dropdown-item:hover {
  background: #f1edff;
  color: #6644ff;
}

/* Mobile */
@media (max-width: 768px) {
  .navbar-container {
    padding: 1rem;
  }

  .nav-menu {
    gap: 0.2rem;
  }

  .nav-link {
    padding: 0.6rem 0.7rem;
    font-size: 0.9rem;
  }

  .logo {
    font-size: 1.4rem;
  }
}
</style>
