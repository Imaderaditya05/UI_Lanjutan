<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <RouterLink to="/" class="logo">
        <span class="logo-icon">◇</span>
        <span>Gatherly</span>
      </RouterLink>

      <!-- Menu -->
      <div class="nav-menu">
        <!-- Home -->
        <RouterLink to="/" class="nav-link" active-class="active" exact-active-class="active">
          Home
        </RouterLink>

        <!-- About -->
        <RouterLink to="/about" class="nav-link" active-class="active"> About </RouterLink>

        <!-- Browse -->
        <div class="dropdown" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
          <button
            class="nav-link browse-button"
            :class="{ active: isBrowseActive }"
            @click="showDropdown = !showDropdown"
          >
            Browse
            <span class="arrow">▼</span>
          </button>

          <div v-if="showDropdown" class="dropdown-menu">
            <RouterLink to="/browse" class="dropdown-item" @click="showDropdown = false">
              Browse Home
            </RouterLink>

            <RouterLink to="/browse/events" class="dropdown-item" @click="showDropdown = false">
              Event List
            </RouterLink>

            <RouterLink to="/browse/category" class="dropdown-item" @click="showDropdown = false">
              Category
            </RouterLink>
          </div>
        </div>

        <!-- Contact -->
        <RouterLink to="/contact" class="nav-link" active-class="active"> Contact </RouterLink>

        <!-- Organizer Dashboard -->
        <RouterLink to="/dashboard" class="nav-link organizer-link" active-class="active">
          Organizer Dashboard
        </RouterLink>
      </div>

      <!-- Right Side -->
      <div class="navbar-right">
        <!-- Language -->
        <button class="language-button">
          🌐 EN
          <span>▼</span>
        </button>

        <!-- Menu Icon -->
        <button class="menu-button">☰</button>
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
/* =========================
   NAVBAR
========================= */

.navbar {
  width: 100%;
  height: 64px;

  background: #1c1948;

  position: sticky;
  top: 0;

  z-index: 1000;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}
.navbar-container {
  width: 100%;
  max-width: 1440px;
  height: 100%;

  margin: 0 auto;
  padding: 0 32px;

  display: flex;
  align-items: center;
}

/* =========================
   LOGO
========================= */

.logo {
  display: flex;
  align-items: center;
  gap: 7px;

  margin-right: 55px;

  color: white;

  text-decoration: none;

  font-size: 1rem;
  font-weight: 700;

  white-space: nowrap;
}

.logo-icon {
  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid white;
  border-radius: 5px;

  font-size: 10px;
}

/* =========================
   NAV MENU
========================= */

.nav-menu {
  display: flex;
  align-items: center;

  gap: 8px;

  height: 100%;
}

.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 38px;

  padding: 7px 16px;

  border-radius: 7px;

  color: #ffffff;

  text-decoration: none;

  font-family: inherit;
  font-size: 0.78rem;
  font-weight: 600;

  background: transparent;
  border: none;

  cursor: pointer;

  white-space: nowrap;

  transition:
    background 0.2s ease,
    color 0.2s ease;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
  background: #6644ff;
  color: white;
}

/* =========================
   ORGANIZER DASHBOARD
========================= */

.organizer-link {
  font-size: 0.72rem;
}

/* =========================
   BROWSE
========================= */

.dropdown {
  position: relative;
  height: 100%;

  display: flex;
  align-items: center;
}

.browse-button {
  font-family: inherit;
}

.arrow {
  margin-left: 5px;
  font-size: 0.55rem;
}

/* =========================
   DROPDOWN
========================= */

.dropdown-menu {
  position: absolute;

  top: calc(100% - 2px);
  left: 0;

  width: 180px;

  padding: 6px;

  background: white;

  border: 1px solid #e4e4e7;
  border-radius: 8px;

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);

  z-index: 9999;
}

.dropdown-menu::before {
  content: '';

  position: absolute;

  top: -8px;
  left: 0;

  width: 100%;
  height: 8px;
}

.dropdown-item {
  display: block;

  padding: 10px 12px;

  color: #333;

  text-decoration: none;

  border-radius: 6px;

  font-size: 0.8rem;
  font-weight: 500;

  transition:
    background 0.2s ease,
    color 0.2s ease;
}

.dropdown-item:hover {
  background: #f1edff;
  color: #6644ff;
}

/* =========================
   RIGHT SIDE
========================= */

.navbar-right {
  margin-left: auto;

  display: flex;
  align-items: center;

  gap: 8px;
}

.language-button {
  display: flex;
  align-items: center;
  gap: 5px;

  padding: 7px 10px;

  color: white;

  background: transparent;
  border: none;

  font-family: inherit;
  font-size: 0.72rem;

  cursor: pointer;
}

.language-button span {
  font-size: 0.5rem;
}

.language-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
}

.menu-button {
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;

  background: rgba(255, 255, 255, 0.1);

  border: none;
  border-radius: 6px;

  font-size: 15px;

  cursor: pointer;
}

.menu-button:hover {
  background: rgba(255, 255, 255, 0.18);
}

/* =========================
   TABLET
========================= */

@media (max-width: 1100px) {
  .navbar-container {
    padding: 0 20px;
  }

  .logo {
    margin-right: 20px;
  }

  .nav-link {
    padding: 7px 10px;
    font-size: 0.72rem;
  }

  .organizer-link {
    display: none;
  }
}

/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {
  .navbar {
    height: auto;
    min-height: 60px;
  }

  .navbar-container {
    padding: 10px 16px;

    flex-wrap: wrap;
  }

  .logo {
    margin-right: auto;
  }

  .nav-menu {
    width: 100%;

    order: 3;

    overflow-x: auto;

    padding-top: 8px;
  }

  .navbar-right {
    margin-left: 10px;
  }

  .nav-link {
    flex-shrink: 0;
  }

  .language-button {
    display: none;
  }
}
</style>
