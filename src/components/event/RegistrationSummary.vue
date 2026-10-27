
<script setup>
import AppCard from '@/components/ui/AppCard.vue'

defineProps({
  event: {
    type: Object,
    required: true,
  },
})

defineEmits(['back'])
</script>

<template>
  <div class="registration-summary-wrapper">
    <button
      type="button"
      class="btn-back"
      @click="$emit('back')"
    >
      &larr; Back to Event Detail
    </button>

    <AppCard class="summary-card">
      <span class="category-pill">
        {{ event.cat }}
      </span>

      <h3 class="event-name">
        {{ event.title }}
      </h3>

      <div class="summary-details">
        <div class="summary-item">
          <span class="item-label">Date &amp; Time</span>
          <span class="item-value">
            {{ event.date || 'Date not available' }}
          </span>
        </div>

        <div class="summary-item">
          <span class="item-label">Location</span>
          <span class="item-value">
            {{ event.loc || 'Location not available' }}
          </span>
        </div>

        <div class="summary-item">
          <span class="item-label">Available Seats</span>
          <span class="item-value text-accent">
            {{ event.quota ?? 0 }} seats remaining
          </span>
        </div>
      </div>

      <p class="summary-desc">
        {{ event.desc }}
      </p>
    </AppCard>
  </div>
</template>

<style scoped>
.registration-summary-wrapper {
  position: sticky;
  top: var(--space-6);
  align-self: start;
  min-width: 0;
}

.btn-back {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0;
  margin-bottom: var(--space-4);
  color: var(--text-muted);
  background: none;
  border: none;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease;
}

.btn-back:hover {
  color: var(--primary);
}

.btn-back:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 4px;
  border-radius: 2px;
}

.summary-card {
  padding: var(--space-6);
  background: white;
  border: 1px solid var(--border-color);
  border-radius: var(--space-4);
}

.category-pill {
  display: inline-block;
  padding: 4px 10px;
  margin-bottom: var(--space-3);
  color: var(--primary);
  background: rgba(102, 68, 255, 0.1);
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.event-name {
  margin: 0 0 var(--space-4);
  color: var(--text-main);
  font-size: 1.4rem;
  line-height: 1.3;
  overflow-wrap: anywhere;
}

.summary-details {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-4) 0;
  margin-bottom: var(--space-4);
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

.summary-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.item-label {
  color: var(--text-muted);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.item-value {
  color: var(--text-main);
  font-size: 0.95rem;
  font-weight: 600;
  overflow-wrap: anywhere;
}

.text-accent {
  color: #15803d;
  font-weight: 700;
}

.summary-desc {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .registration-summary-wrapper {
    position: static;
  }

  .summary-card {
    padding: var(--space-4);
  }
}
</style>
