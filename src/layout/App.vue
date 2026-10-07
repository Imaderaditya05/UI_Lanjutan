<script setup lang="ts">
import Navbar from '@/components/app/Navbar.vue'
import Breadcrumb from '@/components/app/Breadcrumb.vue'
</script>

<template>
  <div class="app-layout">
    <Navbar />

    <main class="main-content">
      <Breadcrumb />

      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
}

.main-content {
  flex: 1;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 32px 48px;
}

/* Tablet */
@media (max-width: 900px) {
  .main-content {
    padding: 0 24px 40px;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .main-content {
    padding: 0 16px 32px;
  }
}
</style>