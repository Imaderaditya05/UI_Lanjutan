
<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: 'Action Confirmation',
  },
  message: {
    type: String,
    default: '',
  },
  confirmText: {
    type: String,
    default: 'Yes, Proceed',
  },
  cancelText: {
    type: String,
    default: 'Cancel',
  },
  showCancel: {
    type: Boolean,
    default: true,
  },
  variant: {
    type: String,
    default: 'danger',
    validator: (value) =>
      ['danger', 'primary', 'success'].includes(value),
  },
  badgeText: {
    type: String,
    default: '',
  },
  badgeVariant: {
    type: String,
    default: '',
    validator: (value) =>
      ['', 'danger', 'primary', 'success'].includes(value),
  },
})

defineEmits(['confirm', 'close'])
</script>

<template>
  <Transition name="modal-fade">
    <div
      v-if="isOpen"
      class="modal-overlay"
      @click.self="$emit('close')"
      @keydown.esc="$emit('close')"
    >
      <div
        class="modal-card"
        role="dialog"
        aria-modal="true"
        :aria-label="title"
      >
        <div class="modal-header">
          <span
            v-if="badgeText"
            class="modal-badge"
            :class="`badge-${badgeVariant || variant}`"
          >
            {{ badgeText }}
          </span>

          <h3 class="modal-title">{{ title }}</h3>
        </div>

        <div class="modal-body">
          <p v-if="message" class="modal-message">
            {{ message }}
          </p>

          <slot />
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button
              v-if="showCancel"
              type="button"
              class="btn-cancel"
              @click="$emit('close')"
            >
              {{ cancelText }}
            </button>

            <button
              type="button"
              class="btn-confirm"
              :class="`btn-${variant}`"
              @click="$emit('confirm')"
            >
              {{ confirmText }}
            </button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* OVERLAY */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4, 16px);
  overflow-y: auto;
  background-color: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* MODAL CARD */
.modal-card {
  width: 100%;
  max-width: 480px;
  max-height: calc(100vh - 32px);
  overflow-y: auto;
  padding: var(--space-6, 24px);
  background: #fff;
  border: 1px solid var(--border-color, #e4e4e7);
  border-radius: var(--space-4, 16px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  animation: scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes scaleUp {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }

  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* HEADER */
.modal-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2, 8px);
  margin-bottom: var(--space-3, 12px);
}

.modal-badge {
  align-self: flex-start;
  padding: 4px 10px;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-danger {
  color: #b91c1c;
  background: #fee2e2;
  border-color: #fecaca;
}

.badge-primary {
  color: #6d28d9;
  background: #ede9fe;
  border-color: #ddd6fe;
}

.badge-success {
  color: #15803d;
  background: #dcfce7;
  border-color: #86efac;
}

.modal-title {
  margin: 0;
  color: var(--text-main, #1c1948);
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.4;
}

/* BODY */
.modal-body {
  margin-bottom: var(--space-4, 16px);
}

.modal-message {
  margin: 0;
  color: var(--text-muted, #666);
  font-size: 0.95rem;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

/* FOOTER */
.modal-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-3, 12px);
  margin-top: var(--space-6, 24px);
  padding-top: var(--space-4, 16px);
  border-top: 1px solid var(--border-color, #e4e4e7);
}

.btn-cancel,
.btn-confirm {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 10px 20px;
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.1s ease,
    box-shadow 0.2s ease;
}

.btn-cancel {
  color: var(--text-muted, #666);
  background: var(--bg-light, #fdfdfd);
  border: 1px solid var(--border-color, #e4e4e7);
}

.btn-cancel:hover {
  color: var(--text-main, #1c1948);
  background: #e2e8f0;
}

.btn-confirm {
  color: #fff;
  border: none;
}

.btn-danger {
  background: #e63946;
}

.btn-danger:hover {
  background: #d62828;
}

.btn-primary {
  background: var(--primary, #6644ff);
  box-shadow: 0 4px 14px rgba(102, 68, 255, 0.25);
}

.btn-primary:hover {
  background: var(--primary-hover, #5533ee);
}

.btn-success {
  background: #16a34a;
  box-shadow: 0 4px 14px rgba(22, 163, 74, 0.25);
}

.btn-success:hover {
  background: #15803d;
}

.btn-confirm:active,
.btn-cancel:active {
  transform: scale(0.98);
}

.btn-confirm:focus-visible,
.btn-cancel:focus-visible {
  outline: 3px solid rgba(102, 68, 255, 0.35);
  outline-offset: 2px;
}

/* TRANSITION */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* MOBILE */
@media (max-width: 480px) {
  .modal-card {
    padding: 20px;
  }

  .modal-title {
    font-size: 1.2rem;
  }

  .modal-footer {
    gap: 8px;
  }

  .btn-cancel,
  .btn-confirm {
    padding: 10px 14px;
  }
}
</style>
