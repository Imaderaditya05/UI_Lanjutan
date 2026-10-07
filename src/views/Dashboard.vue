<template>
  <div class="dashboard-overview">

    <h2>
      Welcome back, Organizer
    </h2>


    <!-- =========================================
         METRICS
         GROUPING & PROXIMITY
    ========================================== -->

    <div class="metrics-grid">

      <div class="metric-card">

        <h3>
          Total Tickets Sold
        </h3>

        <p class="metric-value">
          1,245
        </p>

      </div>


      <div class="metric-card">

        <h3>
          Page Views
        </h3>

        <p class="metric-value">
          8,302
        </p>

      </div>


      <div class="metric-card">

        <h3>
          Revenue
        </h3>

        <p class="metric-value">
          $12,450
        </p>

      </div>

    </div>


    <!-- =========================================
         REGISTRATION TABLE
         DATA DENSITY & F-PATTERN
    ========================================== -->

    <div class="data-table-container">

      <h3>
        Recent Registrations
      </h3>


      <div class="table-wrapper">

        <table class="data-table">

          <thead>

            <tr>
              <th>Attendee Name</th>
              <th>Event</th>
              <th>Registration Date</th>
              <th>Status</th>
            </tr>

          </thead>


          <tbody>

            <tr
              v-for="i in 5"
              :key="i"
            >

              <td>
                John Doe {{ i }}
              </td>

              <td>
                Community Gathering {{ i }}
              </td>

              <td>
                Oct 1{{ i }}, 2026
              </td>

              <td>
                <span class="status-badge">
                  Confirmed
                </span>
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>
</template>


<style scoped>

/* =========================================
   DASHBOARD OVERVIEW
========================================= */

.dashboard-overview h2 {

  margin-bottom: var(--space-6);

  color: var(--text-main);

}


/* =========================================
   METRICS GRID
========================================= */

.metrics-grid {

  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(250px, 1fr));

  gap: var(--space-6);

  margin-bottom: var(--space-8);

}


/* =========================================
   METRIC CARD
   GROUPING & PROXIMITY
========================================= */

.metric-card {

  background: white;

  padding: var(--space-6);

  border-radius: var(--space-3);

  border:
    1px solid var(--border-color);

  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.02);

}


.metric-card h3 {

  font-size: 1rem;

  color: var(--text-muted);

  margin-bottom: var(--space-2);

}


.metric-value {

  font-size: 2.2rem;

  font-weight: 700;

  color: var(--primary);

  margin: 0;

}


/* =========================================
   DATA TABLE
   DATA DENSITY
========================================= */

.data-table-container {

  background: white;

  padding: var(--space-6);

  border-radius: var(--space-3);

  border:
    1px solid var(--border-color);

}


.data-table-container h3 {

  margin-bottom: var(--space-4);

  font-size: 1.2rem;

  color: var(--text-main);

}


/* =========================================
   TABLE WRAPPER
========================================= */

.table-wrapper {

  width: 100%;

  overflow-x: auto;

}


/* =========================================
   TABLE
========================================= */

.data-table {

  width: 100%;

  border-collapse: collapse;

}


.data-table th,
.data-table td {

  padding:
    var(--space-3)
    var(--space-4);

  text-align: left;

  border-bottom:
    1px solid var(--border-color);

}


.data-table th {

  background: var(--bg-gray);

  color: var(--text-muted);

  font-weight: 600;

  font-size: 0.9rem;

}


.data-table td {

  color: var(--text-main);

  font-size: 0.95rem;

}


/* =========================================
   STATUS BADGE
========================================= */

.status-badge {

  background:
    rgba(46, 204, 113, 0.1);

  color: #2ecc71;

  padding:
    var(--space-1)
    var(--space-2);

  border-radius: 4px;

  font-size: 0.8rem;

  font-weight: 600;

}


/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 768px) {

  .metrics-grid {

    grid-template-columns: 1fr;

  }

}

</style>