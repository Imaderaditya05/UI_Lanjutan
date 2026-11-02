<template>
  <nav class="breadcrumb">
    <router-link to="/" class="breadcrumb-link"> Home </router-link>

    <span v-for="(item, index) in breadcrumbs" :key="index" class="breadcrumb-item">
      <span class="separator">/</span>

      <router-link
        v-if="item.path && index < breadcrumbs.length - 1"
        :to="item.path"
        class="breadcrumb-link"
      >
        {{ item.name }}
      </router-link>

      <span v-else class="breadcrumb-current">
        {{ item.name }}
      </span>
    </span>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const breadcrumbs = computed(() => {
  const paths = route.path.split('/').filter(Boolean)

  const result = []

  let currentPath = ''

  paths.forEach((path) => {
    currentPath += `/${path}`

    let name = path.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())

    // Nama khusus berdasarkan URL
    if (path === 'browse') {
      name = 'Browse'
    }

    if (path === 'events') {
      name = 'Events'
    }

    if (path === 'category') {
      name = 'Category'
    }

    if (/^\d+$/.test(path)) {
      name = `Event ${path}`
    }

    result.push({
      name,
      path: currentPath,
    })
  })

  return result
})
</script>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding: 1rem 0;
  font-size: 0.95rem;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.separator {
  color: #aaa;
}

.breadcrumb-link {
  color: #6644ff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.breadcrumb-link:hover {
  color: #5533ee;
}

.breadcrumb-current {
  color: #666;
  font-weight: 500;
}
</style>
