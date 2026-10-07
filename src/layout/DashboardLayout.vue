<template>
  <!-- =========================================
       RAIL & PANE SYSTEM
  ========================================== -->
  <div class="dashboard-layout">

    <!-- =======================================
         RAIL
         Navigasi samping tetap
    ======================================== -->
    <aside class="dashboard-rail">

      <!-- Brand -->
      <div class="rail-brand">
        <router-link to="/">
          Gatherly Organizer
        </router-link>
      </div>


      <!-- Navigation -->
      <nav class="rail-nav">

        <router-link
          to="/dashboard"
          class="rail-link"
          active-class="active"
        >
          Overview
        </router-link>

        <a
          href="#"
          class="rail-link"
        >
          My Events
        </a>

        <a
          href="#"
          class="rail-link"
        >
          Attendees
        </a>

        <a
          href="#"
          class="rail-link"
        >
          QR Check-in
        </a>

      </nav>


      <!-- Footer -->
      <div class="rail-footer">

        <router-link
          to="/"
          class="rail-link"
        >
          ← Back to Public
        </router-link>

      </div>

    </aside>


    <!-- =======================================
         PANE
         Area utama yang dapat di-scroll
    ======================================== -->
    <main class="dashboard-pane">

      <!-- Header -->
      <header class="pane-header">

        <h1>
          Dashboard
        </h1>

        <div class="user-profile">
          Admin
        </div>

      </header>


      <!-- Dynamic Content -->
      <div class="pane-content">

        <RouterView />

      </div>

    </main>

  </div>
</template>


<style scoped>

/* =========================================
   DASHBOARD LAYOUT
   RAIL & PANE SYSTEM
========================================= */

.dashboard-layout {

  /*
   * Rail & Pane menggunakan Flexbox.
   * Rail berada di kiri,
   * Pane berada di kanan.
   */

  display: flex;

  width: 100%;

  height: 100vh;

  /*
   * Mengunci halaman agar tidak
   * melakukan scroll secara global.
   */

  overflow: hidden;

  background: #f8f8fb;
}


/* =========================================
   RAIL / SIDEBAR
========================================= */

.dashboard-rail {

  /*
   * Sidebar memiliki ukuran tetap.
   */

  width: 260px;

  min-width: 260px;

  height: 100vh;

  background: #1c1948;

  color: white;

  display: flex;

  flex-direction: column;

  padding: 2rem 1.2rem;
}


/* =========================================
   BRAND
========================================= */

.rail-brand {

  margin-bottom: 2.5rem;

  padding:
    0 0.8rem;
}


.rail-brand a {

  color: white;

  text-decoration: none;

  font-size: 1.3rem;

  font-weight: 800;
}


/* =========================================
   NAVIGATION
========================================= */

.rail-nav {

  display: flex;

  flex-direction: column;

  gap: 0.5rem;
}


.rail-link {

  display: block;

  padding:
    0.9rem 1rem;

  border-radius: 10px;

  color: #d8d7e8;

  text-decoration: none;

  font-size: 0.95rem;

  font-weight: 500;

  transition:
    background 0.2s ease,
    color 0.2s ease;
}


.rail-link:hover {

  background:
    rgba(255, 255, 255, 0.08);

  color: white;
}


/* Active Navigation */

.rail-link.active {

  background: #6644ff;

  color: white;
}


/* =========================================
   RAIL FOOTER
========================================= */

.rail-footer {

  margin-top: auto;

  padding-top: 1rem;

  border-top:
    1px solid rgba(255, 255, 255, 0.1);
}


/* =========================================
   MAIN PANE
========================================= */

.dashboard-pane {

  /*
   * Pane mengambil seluruh sisa ruang.
   */

  flex: 1;

  min-width: 0;

  height: 100vh;

  /*
   * Hanya area ini yang dapat
   * melakukan scrolling.
   */

  overflow-y: auto;

  overflow-x: hidden;
}


/* =========================================
   PANE HEADER
========================================= */

.pane-header {

  height: 80px;

  background: white;

  border-bottom:
    1px solid #eee;

  display: flex;

  align-items: center;

  justify-content: space-between;

  padding:
    0 2.5rem;

  position: sticky;

  top: 0;

  z-index: 10;
}


.pane-header h1 {

  color: #1c1948;

  font-size: 1.7rem;

  margin: 0;
}


/* =========================================
   USER PROFILE
========================================= */

.user-profile {

  background: #f1edff;

  color: #6644ff;

  padding:
    0.6rem 1rem;

  border-radius: 10px;

  font-weight: 600;
}


/* =========================================
   PANE CONTENT
========================================= */

.pane-content {

  padding: 2.5rem;
}


/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 768px) {

  .dashboard-rail {

    width: 210px;

    min-width: 210px;

    padding:
      1.5rem 0.8rem;
  }


  .pane-header {

    padding:
      0 1.5rem;
  }


  .pane-content {

    padding: 1.5rem;
  }

}


@media (max-width: 600px) {

  .dashboard-rail {

    width: 180px;

    min-width: 180px;
  }


  .rail-brand a {

    font-size: 1rem;
  }


  .rail-link {

    font-size: 0.85rem;

    padding:
      0.7rem;
  }

}

</style>