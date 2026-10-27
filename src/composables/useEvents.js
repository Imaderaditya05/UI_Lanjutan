
import { ref, computed, watch } from 'vue'

// DATA AWAL
// Dimulai dari array kosong untuk menguji Empty State
const defaultEvents = []

// STORAGE KEYS
const EVENTS_STORAGE_KEY = 'gatherly_events'
const REGISTRATIONS_STORAGE_KEY = 'gatherly_user_registrations'

// SINGLE SOURCE OF TRUTH (Module-Level Singleton)
const savedData = localStorage.getItem(EVENTS_STORAGE_KEY)
const events = ref(savedData ? JSON.parse(savedData) : defaultEvents)

const savedRegs = localStorage.getItem(REGISTRATIONS_STORAGE_KEY)
const userRegistrations = ref(savedRegs ? JSON.parse(savedRegs) : [])

// WATCHERS: Sinkronisasi ke LocalStorage
watch(
  events,
  (newEvents) => {
    localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(newEvents))
  },
  { deep: true }
)

watch(
  userRegistrations,
  (newRegs) => {
    localStorage.setItem(REGISTRATIONS_STORAGE_KEY, JSON.stringify(newRegs))
  },
  { deep: true }
)

export function useEvents() {
  // DERIVED STATE
  const totalEvents = computed(() => events.value.length)
  const activeEvents = computed(() => events.value.filter((e) => !e.done))
  const completedEvents = computed(() => events.value.filter((e) => e.done))
  const totalRegistrations = computed(() => userRegistrations.value.length)

  // CREATE EVENT
  const createEvent = (eventData) => {
    const cleanLoc = eventData.loc.replace(/^📍|📍/g, '').trim()

    const newEvent = {
      id: Date.now(),
      title: eventData.title.trim(),
      date: eventData.date,
      loc: `📍 ${cleanLoc}`,
      cat: eventData.cat,
      quota: Number(eventData.quota) || 100,
      price: eventData.price || 'Free',
      desc: eventData.desc.trim(),
      done: false,
    }

    events.value.unshift(newEvent)
    return newEvent
  }

  // COMPLETE EVENT
  const completeEvent = (id) => {
    const target = events.value.find((e) => e.id === Number(id))

    if (target) {
      target.done = true
    }
  }

  // DELETE EVENT + CASCADING CLEANUP
  const deleteEvent = (id) => {
    const numId = Number(id)
    const index = events.value.findIndex((e) => e.id === numId)

    if (index !== -1) {
      events.value.splice(index, 1)
    }

    // Hapus seluruh tiket registrasi yang terkait dengan event
    userRegistrations.value = userRegistrations.value.filter(
      (r) => r.eventId !== numId
    )
  }

  // GET EVENT BY ID
  const getEventById = (id) => {
    return events.value.find((e) => e.id === Number(id))
  }

  // REGISTER ATTENDEE
  const registerAttendee = (eventId, participantData) => {
    const event = events.value.find((e) => e.id === Number(eventId))

    if (!event || event.done || event.quota <= 0) {
      return null
    }

    const bookingCode = 'GTH-' + Date.now().toString().slice(-4)

    const regRecord = {
      id: Date.now(),
      bookingCode,
      eventId: Number(eventId),
      eventTitle: event.title,
      eventCat: event.cat,
      eventDate: event.date,
      eventLoc: event.loc,
      eventPrice: event.price,
      registeredAt: new Date().toISOString(),
      fullName: participantData.fullName.trim(),
      email: participantData.email.trim(),
      phone: participantData.phone.trim(),
      dob: participantData.dob,
      reason: participantData.reason.trim(),
    }

    // Kurangi kuota event secara reaktif
    event.quota = Math.max(0, event.quota - 1)

    // Simpan registrasi ke riwayat pengguna
    userRegistrations.value.unshift(regRecord)

    return regRecord
  }

  // CEK STATUS PENDAFTARAN
  const isUserRegistered = (eventId) => {
    const numId = Number(eventId)
    const eventExists = events.value.some((e) => e.id === numId)

    if (!eventExists) return false

    return userRegistrations.value.some((r) => r.eventId === numId)
  }

  // GET REGISTRATION BY EVENT ID
  const getRegistrationByEventId = (eventId) => {
    return userRegistrations.value.find(
      (r) => r.eventId === Number(eventId)
    )
  }

  // CANCEL REGISTRATION
  const cancelRegistration = (eventId) => {
    const numId = Number(eventId)

    const regIdx = userRegistrations.value.findIndex(
      (r) => r.eventId === numId
    )

    if (regIdx !== -1) {
      userRegistrations.value.splice(regIdx, 1)

      // Pulihkan kuota event
      const event = events.value.find((e) => e.id === numId)

      if (event) {
        event.quota += 1
      }

      return true
    }

    return false
  }

  // RESET DATA EVENT
  const clearAllEvents = () => {
    events.value = []
    localStorage.removeItem(EVENTS_STORAGE_KEY)
  }

  // RESET DATA REGISTRASI
  const clearAllRegistrations = () => {
    userRegistrations.value = []
    localStorage.removeItem(REGISTRATIONS_STORAGE_KEY)
  }

  return {
    events,
    totalEvents,
    activeEvents,
    completedEvents,
    userRegistrations,
    totalRegistrations,
    createEvent,
    completeEvent,
    deleteEvent,
    getEventById,
    registerAttendee,
    isUserRegistered,
    getRegistrationByEventId,
    cancelRegistration,
    clearAllEvents,
    clearAllRegistrations,
  }
}
