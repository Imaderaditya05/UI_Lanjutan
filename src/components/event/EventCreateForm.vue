
<script setup>
import { reactive, ref, onBeforeUnmount } from 'vue'
import AppCard from '@/components/ui/AppCard.vue'
import AppButton from '@/components/ui/AppButton.vue'

const props = defineProps({
  submitting: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['submit', 'cancel'])

// STATE FORMULIR
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

// STATE VALIDASI
const errors = reactive({
  title: '',
  date: '',
  loc: '',
  quota: '',
  desc: '',
})

const errorMessage = ref('')

// FORMAT TANGGAL EVENT
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

// VALIDASI SETIAP FIELD
const validateField = (field) => {
  switch (field) {
    case 'title':
      if (!form.title.trim()) {
        errors.title = 'Event title is required.'
      } else if (form.title.trim().length < 3) {
        errors.title = 'Event title must be at least 3 characters.'
      } else {
        errors.title = ''
      }
      break

    case 'date':
      if (!form.date) {
        errors.date = 'Event date and time is required.'
      } else if (new Date(form.date).getTime() <= Date.now()) {
        errors.date = 'Please select a future date and time.'
      } else {
        errors.date = ''
      }
      break

    case 'loc':
      errors.loc = form.loc.trim()
        ? ''
        : 'Event location is required.'
      break

    case 'quota':
      if (
        !Number.isInteger(Number(form.quota)) ||
        Number(form.quota) < 10
      ) {
        errors.quota = 'Attendee quota must be at least 10.'
      } else {
        errors.quota = ''
      }
      break

    case 'desc':
      if (!form.desc.trim()) {
        errors.desc = 'Event description is required.'
      } else if (form.desc.trim().length < 10) {
        errors.desc = 'Description must be at least 10 characters.'
      } else {
        errors.desc = ''
      }
      break
  }
}

// VALIDASI SELURUH FORM
const validateAll = () => {
  validateField('title')
  validateField('date')
  validateField('loc')
  validateField('quota')
  validateField('desc')

  return (
    !errors.title &&
    !errors.date &&
    !errors.loc &&
    !errors.quota &&
    !errors.desc
  )
}

// SUBMIT EVENT
const handleSubmitEvent = () => {
  if (props.submitting) return

  errorMessage.value = ''

  const isValid = validateAll()

  if (!isValid) {
    errorMessage.value =
      'Please correct the highlighted fields before publishing the event.'
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
    done: false,
  }

  // Kirim data ke komponen induk.
  // Reset dilakukan setelah penyimpanan API berhasil.
  emit('submit', eventData)
}

// RESET FORM
const resetForm = () => {
  Object.assign(form, initialForm())

  Object.keys(errors).forEach((key) => {
    errors[key] = ''
  })

  errorMessage.value = ''
}

// CANCEL FORM
const handleCancel = () => {
  if (props.submitting) return

  resetForm()
  emit('cancel')
}

// Agar komponen induk dapat memanggil resetForm()
defineExpose({
  resetForm,
})
</script>

<template>
  <AppCard class="form-card">
    <h3>Create New Event Form</h3>

    <p class="form-subtitle">
      Information entered here will be instantly published to the Gatherly public catalog.
    </p>

    <!-- ERROR GLOBAL -->
    <div
      v-if="errorMessage"
      class="alert-box alert-error"
      role="alert"
    >
      ⚠️ {{ errorMessage }}
    </div>

    <!-- FORM -->
    <form
      class="event-form"
      @submit.prevent="handleSubmitEvent"
      novalidate
    >
      <!-- EVENT TITLE -->
      <div class="form-group">
        <label for="event-title">
          Event Title <span class="required">*</span>
        </label>

        <input
          id="event-title"
          v-model="form.title"
          type="text"
          placeholder="e.g. Modern UI/UX Masterclass"
          :class="['form-input', { 'input-error': errors.title }]"
          maxlength="150"
          :disabled="submitting"
          @input="validateField('title')"
        />

        <span v-if="errors.title" class="field-error">
          {{ errors.title }}
        </span>
      </div>

      <!-- CATEGORY AND DATE -->
      <div class="form-row">
        <div class="form-group">
          <label for="event-category">
            Event Category <span class="required">*</span>
          </label>

          <select
            id="event-category"
            v-model="form.cat"
            class="form-input"
            :disabled="submitting"
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
            :class="{ 'input-error': errors.date }"
            :min="new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
              .toISOString()
              .slice(0, 16)"
            :disabled="submitting"
            @change="validateField('date')"
          />

          <span v-if="errors.date" class="field-error">
            {{ errors.date }}
          </span>
        </div>
      </div>

      <!-- LOCATION AND QUOTA -->
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
            :class="['form-input', { 'input-error': errors.loc }]"
            maxlength="200"
            :disabled="submitting"
            @input="validateField('loc')"
          />

          <span v-if="errors.loc" class="field-error">
            {{ errors.loc }}
          </span>
        </div>

        <div class="form-group">
          <label for="event-quota">
            Attendee Quota <span class="required">*</span>
          </label>

          <input
            id="event-quota"
            v-model.number="form.quota"
            type="number"
            min="10"
            step="1"
            placeholder="100"
            :class="['form-input', { 'input-error': errors.quota }]"
            :disabled="submitting"
            @input="validateField('quota')"
          />

          <span v-if="errors.quota" class="field-error">
            {{ errors.quota }}
          </span>
        </div>
      </div>

      <!-- EVENT PRICE -->
      <div class="form-group">
        <label for="event-price">
          Event Price
        </label>

        <select
          id="event-price"
          v-model="form.price"
          class="form-input"
          :disabled="submitting"
        >
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
      </div>

      <!-- DESCRIPTION -->
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
          :class="['form-input', 'form-textarea', { 'input-error': errors.desc }]"
          :disabled="submitting"
          @input="validateField('desc')"
        ></textarea>

        <span v-if="errors.desc" class="field-error">
          {{ errors.desc }}
        </span>
      </div>

      <!-- FORM ACTIONS -->
      <div class="form-actions">
        <button
          type="button"
          class="btn-secondary-action"
          :disabled="submitting"
          @click="handleCancel"
        >
          Cancel
        </button>

        <AppButton
          variant="primary"
          type="submit"
          :loading="submitting"
          :disabled="submitting"
        >
          🚀 Publish Event Now
        </AppButton>
      </div>
    </form>
  </AppCard>
</template>

<style scoped>
.form-card {
  padding: var(--space-8);
  max-width: 800px;
  width: 100%;
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

.required {
  color: #e63946;
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

.event-form {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.form-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
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

.form-input {
  width: 100%;
  min-width: 0;
  padding: 12px 14px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  background: white;
  color: var(--text-main);
  box-sizing: border-box;
  font-family: inherit;
}

.form-input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(102, 68, 255, 0.15);
}

.form-input:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.form-textarea {
  resize: vertical;
  line-height: 1.5;
}

.input-error {
  border-color: #e63946 !important;
  background-color: #fff5f5 !important;
}

.field-error {
  color: #c92a2a;
  font-size: 0.82rem;
  font-weight: 500;
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

.btn-secondary-action:hover:not(:disabled) {
  background: #e9ecef;
  color: var(--text-main);
}

.btn-secondary-action:disabled {
  opacity: 0.6;
  cursor: not-allowed;
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
