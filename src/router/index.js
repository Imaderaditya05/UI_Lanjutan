
import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layout/App.vue'
import DashboardLayout from '@/layout/DashboardLayout.vue'

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      // HOME
      {
        path: '',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
        meta: { breadcrumb: 'Home' },
      },

      // ABOUT
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
        meta: { breadcrumb: 'About' },
      },

      // BROWSE
      {
        path: 'browse',
        name: 'browse',
        component: () => import('@/views/Browse.vue'),
        meta: { breadcrumb: 'Browse' },
        children: [
          // EVENT LIST
          {
            path: 'events',
            name: 'events',
            component: () => import('@/views/EventList.vue'),
            meta: { breadcrumb: 'Event List' },
          },

          // EVENT DETAIL
          {
            path: 'events/:id',
            name: 'event-detail',
            component: () => import('@/views/EventDetail.vue'),
            meta: { breadcrumb: 'Event Detail' },
          },

          // CATEGORY
          {
            path: 'category',
            name: 'category',
            component: () => import('@/views/Category.vue'),
            meta: { breadcrumb: 'Category' },
          },
        ],
      },

      // CONTACT
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/Contact.vue'),
        meta: { breadcrumb: 'Contact' },
      },
    ],
  },

  // DASHBOARD / ORGANIZER
  {
    path: '/dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/views/Dashboard.vue'),
        meta: { breadcrumb: 'Dashboard' },
      },
      {
        path: 'events',
        name: 'dashboard-events',
        component: () => import('@/views/EventManagement.vue'),
        meta: { breadcrumb: 'Event Management' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
