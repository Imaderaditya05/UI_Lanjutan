
<script setup>
import { reactive, ref } from 'vue'
import AppCard from '@/components/ui/AppCard.vue'
import AppButton from '@/components/ui/AppButton.vue'

const emit = defineEmits(['submit', 'cancel'])

// State formulir
const initialForm = () => ({
  title: '',
  cat: 'Workshop',
  date: '',
  loc: '',
  quota: 100,
  price: 'Free',
  desc: '',
})

const form = reactive(initialForm())

const errorMessage = ref('')
const successMessage = ref('')
let successTimeout

const formatEventDate = (date) => {
  if (!date) return ''

  const dateObj = new Date(date)

  if (Number.isNaN(dateObj.getTime())) return ''

  const datePart = dateObj.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })

  const timePart = dateObj.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })

  return `${datePart} • ${timePart}`
}

// Submit formulir
const handleSubmitEvent = () => {
  errorMessage.value = ''
  successMessage.value = ''

  if (
    !form.title.trim() ||
    !form.date ||
    !form.loc.trim() ||
    !form.desc.trim()
  ) {
    errorMessage.value =
      'Please fill in all required fields before publishing the event.'
    return
  }

  if (new Date(form.date).getTime() <= Date.now()) {
    errorMessage.value = 'Please select a future date and time.'
    return
  }

  if (
    !Number.isInteger(Number(form.quota)) ||
    Number(form.quota) < 10
  ) {
    errorMessage.value = 'Attendee quota must be at least 10.'
    return
  }

  const eventData = {
    title: form.title.trim(),
    cat: form.cat,
    date: formatEventDate(form.date),
    loc: form.loc.trim(),
    quota: Number(form.quota),
    price: form.price,
    desc: form.desc.trim(),
  }

  emit('submit', eventData)

  // Reset formulir setelah dikirim ke komponen induk
  Object.assign(form, initialForm())

  successMessage.value =
    'Event submitted successfully!'

  clearTimeout(successTimeout)

  successTimeout = setTimeout(() => {
    successMessage.value = ''
  }, 3000)
}

const handleCancel = () => {
  errorMessage.value = ''
  successMessage.value = ''
  emit('cancel')
}
</script>

<template>
  <AppCard class="form-card">
    <h3>Create New Event Form</h3>

    <p class="form-subtitle">
      Information entered here will be instantly published
      to the Gatherly public catalog.
    </p>

    <div
      v-if="errorMessage"
      class="alert-box alert-error"
      role="alert"
    >
      ⚠️ {{ errorMessage }}
    </div>

    <div
      v-if="successMessage"
      class="alert-box alert-success"
      role="status"
    >
      🎉 {{ successMessage }}
    </div>

    <form
      class="event-form"
      @submit.prevent="handleSubmitEvent"
    >
      <div class="form-group">
        <label for="event-title">
          Event Title <span class="required">*</span>
        </label>

        <input
          id="event-title"
          v-model="form.title"
          type="text"
          placeholder="e.g. Modern UI/UX Masterclass"
          class="form-input"
          maxlength="150"
          required
        />
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="event-category">
            Event Category
          </label>

          <select
            id="event-category"
            v-model="form.cat"
            class="form-input"
          >
            <option value="Workshop">Workshop</option>
            <option value="Meetup">Meetup</option>
            <option value="Competition">Competition</option>
            <option value="Seminar">Seminar</option>
            <option value="Conference">Conference</option>
          </select>
        </div>

        <div class="form-group">
          <label for="event-date">
            Date &amp; Time <span class="required">*</span>
          </label>

          <input
            id="event-date"
            v-model="form.date"
            type="datetime-local"
            class="form-input"
            :min="new Date().toISOString().slice(0, 16)"
            required
          />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="event-location">
            Event Location <span class="required">*</span>
          </label>

          <input
            id="event-location"
            v-model="form.loc"
            type="text"
            placeholder="e.g. Innovation Center, Jakarta"
            class="form-input"
            maxlength="200"
            required
          />
        </div>

        <div class="form-group">
          <label for="event-quota">
            Attendee Quota
          </label>

          <input
            id="event-quota"
            v-model.number="form.quota"
            type="number"
            min="10"
            step="1"
            placeholder="100"
            class="form-input"
            required
          />
        </div>
      </div>

      <div class="form-group">
        <label for="event-price">
          Event Price
        </label>

        <select
          id="event-price"
          v-model="form.price"
          class="form-input"
        >
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
      </div>

      <div class="form-group">
        <label for="event-description">
          Event Description <span class="required">*</span>
        </label>

        <textarea
          id="event-description"
          v-model="form.desc"
          rows="4"
          maxlength="2000"
          placeholder="Describe the agenda, speakers, and key takeaways..."
          class="form-input form-textarea"
          required
        ></textarea>
      </div>

      <div class="form-actions">
        <button
          type="button"
          class="btn-secondary-action"
          @click="handleCancel"
        >
          Cancel
        </button>

        <AppButton
          variant="primary"
          type="submit"
        >
          📣 Publish Event Now
        </AppButton>
      </div>
    </form>
  </AppCard>
</template>

<style scoped>
.form-card {
  padding: var(--space-8);
  max-width: 800px;
  margin: 0 auto var(--space-12);
  box-sizing: border-box;
}

.form-card h3 {
  font-size: 1.5rem;
  color: var(--text-main);
  margin: 0 0 var(--space-1);
}

.form-subtitle {
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0 0 var(--space-6);
}

.alert-box {
  padding: var(--space-3) var(--space-4);
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: var(--space-6);
}

.alert-error {
  background: #fff3e3;
  color: #c92a2a;
  border: 1px solid #ffa8a8;
}

.alert-success {
  background: #d3f9d8;
  color: #2b8a3e;
  border: 1px solid #b2f2bb;
}

.event-form {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.form-group label {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-main);
}

.required {
  color: #e63946;
}

.form-input {
  width: 100%;
  min-width: 0;
  padding: 12px 14px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
  transition:
    border-color 0.2s,
    box-shadow 0.2s,
    background-color 0.2s;
  background: white;
  color: var(--text-main);
  box-sizing: border-box;
  font-family: inherit;
}

.form-input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(102, 68, 255, 0.15);
}

.form-textarea {
  resize: vertical;
  line-height: 1.5;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--space-4);
  margin-top: 12px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
}

.btn-secondary-action {
  background: var(--bg-light);
  border: 1px solid var(--border-color);
  padding: var(--space-3) var(--space-6);
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  color: var(--text-muted);
  transition: background 0.2s, color 0.2s;
}

.btn-secondary-action:hover {
  background: #e9ecef;
  color: var(--text-main);
}

@media (max-width: 768px) {
  .form-card {
    padding: var(--space-4);
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .form-actions {
    flex-direction: column-reverse;
    align-items: stretch;
  }

  .form-actions > * {
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
