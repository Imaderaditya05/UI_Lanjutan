
<template>
  <AppCard class="event-card-wrapper">
    <div class="event-body">
      <div class="event-meta">
        <div class="meta-left">
          <span class="event-date">{{ event.date }}</span>

          <span
            v-if="isRegistered"
            class="badge-registered"
          >
            Registered
          </span>
        </div>

        <span class="event-category">
          {{ event.cat }}
        </span>
      </div>

      <h3 class="event-title">{{ event.title }}</h3>

      <p class="event-loc">{{ event.loc }}</p>

      <p class="event-desc">{{ event.desc }}</p>

      <div class="card-footer">
        <button
          type="button"
          class="btn-link"
          @click="$emit('view-detail', event.id)"
        >
          View Event Details &rarr;
        </button>
      </div>
    </div>
  </AppCard>
</template>

<script setup>
import AppCard from '@/components/ui/AppCard.vue'

defineProps({
  event: {
    type: Object,
    required: true,
  },
  isRegistered: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['view-detail'])
</script>

<style scoped>
.event-card-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.event-card-wrapper:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.event-body {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: var(--space-6);
}

.event-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.meta-left {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.event-date {
  padding: var(--space-1) var(--space-2);
  color: var(--primary);
  background: rgba(102, 68, 255, 0.1);
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
}

.badge-registered {
  padding: 2px 8px;
  color: #1d4ed8;
  background: #dbeafe;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.event-category {
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
}

.event-title {
  margin: 0 0 var(--space-2);
  color: var(--text-main);
  font-size: 1.4rem;
  line-height: 1.4;
  overflow-wrap: anywhere;
}

.event-loc {
  margin: 0 0 var(--space-4);
  color: var(--text-muted);
  font-size: 0.95rem;
}

.event-desc {
  flex-grow: 1;
  margin: 0 0 var(--space-6);
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

.card-footer {
  margin-top: auto;
  padding-top: var(--space-4);
  border-top: 1px solid var(--border-color);
}

.btn-link {
  padding: 0;
  color: var(--text-main);
  background: none;
  border: none;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
}

.btn-link:hover {
  color: var(--primary);
}

.btn-link:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 4px;
  border-radius: 2px;
}

@media (max-width: 600px) {
  .event-body {
    padding: var(--space-4);
  }

  .event-title {
    font-size: 1.2rem;
  }

  .event-meta {
    align-items: flex-start;
  }
}
</style>
