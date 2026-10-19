
<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="dashboard-layout">
    <!-- RAIL: Navigasi samping -->
    <aside class="dashboard-rail">
      <div class="rail-brand">
        <router-link to="/">Gatherly Organizer</router-link>
      </div>

      <nav class="rail-nav">
        <router-link
          to="/dashboard"
          class="rail-link"
          exact-active-class="active"
        >
          Dashboard
        </router-link>

        <router-link
          to="/dashboard/events"
          class="rail-link"
          active-class="active"
        >
          Event Management
        </router-link>
      </nav>

      <div class="rail-footer">
        <router-link to="/" class="rail-link">
          &larr; Back to Public
        </router-link>
      </div>
    </aside>

    <!-- PANE: Area utama -->
    <main class="dashboard-pane">
      <header class="pane-header">
        <h1>Dashboard</h1>
        <div class="user-profile">Admin</div>
      </header>

      <div class="pane-content">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
/* DASHBOARD LAYOUT */
.dashboard-layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
  background-color: var(--bg-gray, #f8f8fb);
}

/* SIDEBAR */
.dashboard-rail {
  width: 260px;
  min-width: 260px;
  height: 100vh;
  box-sizing: border-box;
  background-color: #1c1948;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.2rem;
}

/* BRAND */
.rail-brand {
  margin-bottom: 2.5rem;
  padding: 0 0.8rem;
}

.rail-brand a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 800;
}

/* NAVIGATION */
.rail-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.rail-link {
  display: block;
  padding: 0.9rem 1rem;
  border-radius: 10px;
  color: #d8d7e8;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: background 0.2s ease, color 0.2s ease;
}

.rail-link:hover {
  background: rgba(255, 255, 255, 0.08);
  color: white;
}

.rail-link.active {
  background: #6644ff;
  color: white;
  border-left: 4px solid var(--primary, #a18aff);
}

/* FOOTER */
.rail-footer {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* MAIN PANE */
.dashboard-pane {
  flex: 1;
  min-width: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
}

/* HEADER */
.pane-header {
  min-height: 80px;
  box-sizing: border-box;
  background: white;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
  position: sticky;
  top: 0;
  z-index: 10;
}

.pane-header h1 {
  color: #1c1948;
  font-size: 1.5rem;
  margin: 0;
}

/* USER PROFILE */
.user-profile {
  background: #f1edff;
  color: #6644ff;
  padding: 0.6rem 1rem;
  border-radius: 10px;
  font-weight: 600;
}

/* CONTENT */
.pane-content {
  flex: 1;
  padding: 2.5rem;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .dashboard-rail {
    width: 210px;
    min-width: 210px;
    padding: 1.5rem 0.8rem;
  }

  .pane-header {
    padding: 0 1.5rem;
  }

  .pane-content {
    padding: 1.5rem;
  }
}

@media (max-width: 600px) {
  .dashboard-rail {
    width: 160px;
    min-width: 160px;
    padding: 1rem 0.5rem;
  }

  .rail-brand {
    padding: 0 0.5rem;
  }

  .rail-brand a {
    font-size: 0.9rem;
  }

  .rail-link {
    font-size: 0.8rem;
    padding: 0.7rem 0.5rem;
  }

  .pane-header {
    padding: 0 1rem;
  }

  .pane-content {
    padding: 1rem;
  }
}
</style>
