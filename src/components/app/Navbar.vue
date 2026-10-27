
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const isScrolled = ref(false)
const showDropdown = ref(false)
const showMobileMenu = ref(false)
const showLanguageMenu = ref(false)

const menus = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Browse',
    path: '/browse',
    children: [
      { name: 'Event List', path: '/browse/events' },
      { name: 'Category', path: '/browse/category' },
      { name: 'Your Events', path: '/browse/your-events' },
    ],
  },
  { name: 'Contact', path: '/contact' },
  { name: 'Organizer Dashboard', path: '/dashboard' },
]

const isBrowseActive = computed(() => route.path.startsWith('/browse'))

const isMenuActive = (menu) => {
  if (menu.path === '/') return route.path === '/'
  if (menu.path === '/browse') return isBrowseActive.value
  if (menu.path === '/dashboard') return route.path.startsWith('/dashboard')
  return route.path === menu.path
}

function handleScroll() {
  isScrolled.value = window.scrollY > 10
}

function closeMenus() {
  showDropdown.value = false
  showMobileMenu.value = false
  showLanguageMenu.value = false
}

function toggleBrowse() {
  showDropdown.value = !showDropdown.value
}

function toggleMobileMenu() {
  showMobileMenu.value = !showMobileMenu.value
  showDropdown.value = false
}

function selectLanguage(language) {
  // Tampilan bahasa berubah; penerjemahan konten
  // perlu diintegrasikan secara terpisah.
  currentLanguage.value = language
  showLanguageMenu.value = false
}

const currentLanguage = ref('EN')

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="navbar-container">
      <!-- Logo -->
      <RouterLink to="/" class="logo" @click="closeMenus">
        <svg
          class="logo-icon"
          width="28"
          height="32"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12 2L22 8V20L12 26L2 20V8L12 2Z"
            stroke="white"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <path
            d="M7 10L12 7L17 10V18L12 21L7 18V10Z"
            stroke="#A194FF"
            stroke-width="1.5"
          />
        </svg>

        <span class="logo-text">Gatherly</span>
      </RouterLink>

      <!-- Navigation -->
      <ul class="nav-menu" :class="{ 'mobile-open': showMobileMenu }">
        <li
          v-for="menu in menus"
          :key="menu.name"
          class="nav-item"
          :class="{
            'browse-item': menu.children,
            'menu-active': isMenuActive(menu),
          }"
          @mouseenter="menu.children && (showDropdown = true)"
          @mouseleave="menu.children && (showDropdown = false)"
        >
          <!-- Browse Dropdown -->
          <template v-if="menu.children">
            <button
              type="button"
              class="nav-link browse-button"
              :class="{ active: isBrowseActive }"
              :aria-expanded="showDropdown"
              @click="toggleBrowse"
            >
              {{ menu.name }}

              <svg
                class="dropdown-indicator"
                :class="{ rotated: showDropdown }"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <ul v-if="showDropdown" class="dropdown-menu">
              <li
                v-for="child in menu.children"
                :key="child.name"
                class="dropdown-item"
              >
                <RouterLink
                  :to="child.path"
                  class="dropdown-link"
                  :class="{ 'dropdown-active': route.path === child.path }"
                  @click="closeMenus"
                >
                  {{ child.name }}
                </RouterLink>
              </li>
            </ul>
          </template>

          <!-- Regular Menu -->
          <RouterLink
            v-else
            :to="menu.path"
            class="nav-link"
            :class="{ active: isMenuActive(menu) }"
            @click="closeMenus"
          >
            {{ menu.name }}
          </RouterLink>
        </li>
      </ul>

      <!-- Right Section -->
      <div class="nav-right">
        <div class="language-wrapper">
          <button
            type="button"
            class="lang-selector"
            :aria-expanded="showLanguageMenu"
            @click="showLanguageMenu = !showLanguageMenu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path
                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
              />
            </svg>

            <span class="lang-text">{{ currentLanguage }}</span>

            <svg
              class="chevron"
              :class="{ rotated: showLanguageMenu }"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          <ul v-if="showLanguageMenu" class="language-menu">
            <li>
              <button type="button" @click="selectLanguage('EN')">
                English
                <span v-if="currentLanguage === 'EN'">✓</span>
              </button>
            </li>
            <li>
              <button type="button" @click="selectLanguage('ID')">
                Indonesia
                <span v-if="currentLanguage === 'ID'">✓</span>
              </button>
            </li>
          </ul>
        </div>

        <!-- Hamburger -->
        <button
          type="button"
          class="hamburger-btn"
          :aria-expanded="showMobileMenu"
          aria-label="Toggle navigation menu"
          @click="toggleMobileMenu"
        >
          <svg
            v-if="!showMobileMenu"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>

          <svg
            v-else
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* NAVBAR */
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  background: #1c1948;
  border-bottom: 1px solid #333;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.navbar-scrolled {
  background: rgba(28, 25, 72, 0.96);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  min-height: 72px;
  margin: 0 auto;
  padding: 0 32px;
}

/* LOGO */
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  color: #fff;
  text-decoration: none;
  padding-right: 24px;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: translateY(-2px);
}

.logo-icon {
  flex-shrink: 0;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.logo:hover .logo-icon {
  transform: rotate(15deg) scale(1.1);
}

.logo-text {
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

/* MAIN MENU */
.nav-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex: 1;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
}

.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 42px;
  padding: 10px 18px;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: #fff;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.nav-link.active {
  background: #6644ff;
  color: #fff;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(102, 68, 255, 0.3);
}

.dropdown-indicator,
.chevron {
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.dropdown-indicator.rotated,
.chevron.rotated {
  transform: rotate(180deg);
}

/* DROPDOWN MENU */
.dropdown-menu {
  position: absolute;
  display: block;
  top: calc(100% - 2px);
  left: 0;
  min-width: 210px;
  margin: 0;
  padding: 6px;
  list-style: none;
  background: #d8d8d8;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.2s ease-out;
}

.dropdown-item {
  position: relative;
  margin: 0;
  padding: 0;
}

.dropdown-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  color: #333;
  font-size: 0.9rem;
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition:
    background-color 0.2s,
    color 0.2s;
}

.dropdown-link:hover,
.dropdown-link.dropdown-active {
  background: #c4c4c4;
  color: #1c1948;
}

.dropdown-item:last-child .dropdown-link {
  border-bottom: none;
}

/* RIGHT SECTION */
.nav-right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.language-wrapper {
  position: relative;
}

.lang-selector {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: #fff;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.lang-selector:hover {
  background: rgba(255, 255, 255, 0.1);
}

.language-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 150px;
  margin: 0;
  padding: 6px;
  list-style: none;
  background: #fff;
  border: 1px solid #e4e4e7;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  animation: fadeIn 0.2s ease-out;
}

.language-menu button {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-radius: 5px;
  background: transparent;
  color: #333;
  font-family: inherit;
  text-align: left;
  cursor: pointer;
}

.language-menu button:hover {
  background: #f1edff;
  color: #6644ff;
}

/* HAMBURGER */
.hamburger-btn {
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hamburger-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.05);
}

/* ANIMATION */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* TABLET */
@media (max-width: 1100px) {
  .navbar-container {
    padding: 0 20px;
  }

  .logo {
    padding-right: 12px;
  }

  .logo-text {
    font-size: 1.2rem;
  }

  .nav-menu {
    gap: 4px;
  }

  .nav-link {
    padding: 9px 11px;
    font-size: 0.82rem;
  }
}

/* MOBILE NAVIGATION */
@media (max-width: 768px) {
  .navbar-container {
    position: relative;
    min-height: 64px;
    flex-wrap: wrap;
    padding: 10px 16px;
  }

  .logo {
    padding-right: 0;
    margin-right: auto;
  }

  .logo-text {
    font-size: 1.2rem;
  }

  .nav-right {
    gap: 8px;
    margin-left: 12px;
  }

  .lang-selector {
    padding: 8px;
  }

  .hamburger-btn {
    display: flex;
  }

  .nav-menu {
    display: none;
    flex: 0 0 100%;
    width: 100%;
    height: auto;
    align-items: stretch;
    flex-direction: column;
    gap: 6px;
    order: 3;
    padding: 14px 0 4px;
  }

  .nav-menu.mobile-open {
    display: flex;
    animation: fadeIn 0.2s ease-out;
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    height: auto;
  }

  .nav-link {
    justify-content: space-between;
    width: 100%;
    min-height: 44px;
    padding: 12px 14px;
    font-size: 0.9rem;
  }

  .dropdown-menu {
    position: static;
    width: 100%;
    min-width: 0;
    margin-top: 5px;
    padding: 5px;
    box-shadow: none;
    background: rgba(255, 255, 255, 0.96);
  }

  .dropdown-link {
    padding: 12px 18px;
  }

  .language-menu {
    z-index: 1001;
  }
}

/* SMALL MOBILE */
@media (max-width: 420px) {
  .navbar-container {
    padding-right: 12px;
    padding-left: 12px;
  }

  .logo-icon {
    width: 24px;
    height: 28px;
  }

  .logo-text {
    font-size: 1.1rem;
  }

  .lang-selector {
    gap: 5px;
    padding: 7px;
  }

  .hamburger-btn {
    width: 40px;
    height: 40px;
  }
}
</style>
