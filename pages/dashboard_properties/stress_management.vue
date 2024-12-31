<template>
  <div class="min-h-screen w-[1200px]">
   

    <div class="container mx-auto py-10">
      <!-- Page Header -->
      <header class="text-center mb-8">
        <h1 class="text-4xl font-bold text-pink-700">Stress Management</h1>
        <p class="text-xl text-purple-600 mt-4">
          Track and visualize your stress levels to better manage your PCOS
          symptoms.
        </p>
      </header>
      <div
        class="absolute top-0 left-0 w-32 h-32 rounded-full mix-blend-multiply filter blur-xl opacity-70"
      ></div>
      <!-- Stress Level Logging Form -->
      <section
        class="mb-12 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6"
      >
        <h2 class="text-2xl font-semibold text-pink-600 mb-4">
          Log Your Stress Level
        </h2>
        <form @submit.prevent="logStressLevel" class="space-y-2">
          <div>
            <label
              for="stressLevel"
              class="block text-sm font-medium text-gray-700"
            >
              Stress Level (1-10)
            </label>
            <input
              v-model="newStressLevel"
              type="range"
              min="1"
              max="10"
              step="1"
              class="w-full mb-2"
            />
            <!-- Conditionally display the selected stress level -->
            <p
              v-if="newStressLevel !== null"
              class="text-center text-lg font-semibold text-pink-700"
            >
              Selected Stress Level: {{ newStressLevel }}
            </p>
          </div>

          <div>
            <label for="notes" class="block text-sm font-medium text-gray-700"
              >Notes (optional)</label
            >
            <textarea
              v-model="notes"
              id="notes"
              name="notes"
              rows="3"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-md hover:from-pink-600 hover:to-purple-600 transition-colors duration-300"
          >
            Log Stress Level
          </button>
        </form>
        <div
          class="absolute top-0 right-0 w-32 h-32  rounded-full mix-blend-multiply filter blur-xl opacity-70 "
        ></div>
      </section>

      <!-- Stress Level Chart -->
      <section
        class="mb-12 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6"
      >
        <div
          class="absolute bottom-0 left-0 w-32"
        ></div>
        <h2 class="text-2xl font-semibold text-pink-600 mb-4">
          Stress Level Chart
        </h2>
        <canvas id="stressChart"></canvas>
      </section>

      <!-- Recent Stress Level Entries -->
      <section
        class="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6"
      >
        <h2 class="text-2xl font-semibold text-pink-600 mb-4">
          Recent Entries
        </h2>
        <ul class="space-y-4">
          <li
            v-for="(entry, index) in recentEntries"
            :key="index"
            class="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4 shadow-md"
          >
            <div class="flex justify-between items-center">
              <span class="text-lg font-semibold text-purple-700"
                >Level: {{ entry.level }}</span
              >
              <span class="text-sm text-gray-500">{{
                formatDate(entry.date)
              }}</span>
            </div>
            <p v-if="entry.notes" class="text-gray-700 mt-2">
              {{ entry.notes }}
            </p>
          </li>
        </ul>
      </section>
      <div
        class="absolute bottom-0 left-0 w-32 h-32 filter blur-xl opacity-70  animation-delay-4000"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import axios from 'axios'; 
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale, 
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary Chart.js components
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

// Reactive state variables
const newStressLevel = ref(null); // No initial value
const notes = ref(""); // For user notes
const stressLevels = ref([]); // Array to store stress entries
const recentEntries = ref([]); // For the last 5 entries
let stressChart = null; // Chart instance

// Method: Log Stress Level
const logStressLevel = async () => {
  if (!newStressLevel.value) {
    alert("Please select a stress level.");
    return;
  }

  // Create a new entry
  const entry = {
    level: parseInt(newStressLevel.value),
    notes: notes.value,
    date: new Date(),
  };

  // Update stress levels and recent entries
  stressLevels.value.push(entry);
  recentEntries.value.unshift(entry);

  // Keep only the last 5 entries
  if (recentEntries.value.length > 5) {
    recentEntries.value.pop();
  }

  // Reset the form fields
  newStressLevel.value = null;
  notes.value = "";

  // Update the chart
  updateChart();

  // Send the stress levels to the backend
  await sendStressDataToBackend();
};

// Method: Format Date
const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
};

// Method: Update Chart
const updateChart = () => {
  if (stressChart && stressChart.data) {
    // Update chart labels and data
    stressChart.data.labels = stressLevels.value.map((entry) =>
      formatDate(entry.date)
    );
    stressChart.data.datasets[0].data = stressLevels.value.map(
      (entry) => entry.level
    );
    stressChart.update();
  }
};

// Method to send stress data to the backend
const sendStressDataToBackend = async () => {
  try {
    const response = await axios.post('http://localhost:5000/stress_management', {
      stress_management: stressLevels.value
    });
    console.log("Data sent to backend:", response.data);
  } catch (error) {
    console.error("Error sending data to backend:", error);
  }
};

// Initialize the Chart.js instance
onMounted(() => {
  const ctx = document.getElementById("stressChart").getContext("2d");
  stressChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [], // Start empty
      datasets: [
        {
          label: "Stress Level",
          data: [], // Start empty
          borderColor: "rgb(219, 39, 119)",
          backgroundColor: "rgba(219, 39, 119, 0.1)",
          borderWidth: 2,
          tension: 0.3, // Adds a smooth curve
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          ticks: { color: "rgba(75, 75, 75, 1)" },
        },
        y: {
          beginAtZero: true,
          max: 10, // Max stress level is 10
          ticks: { stepSize: 1, color: "rgba(75, 75, 75, 1)" },
        },
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "rgba(75, 75, 75, 1)",
          },
        },
      },
    },
  });
});

// Watch for changes in stressLevels and update the chart
watch(stressLevels, updateChart, { deep: true });

// Set page metadata
definePageMeta({
  layout: "dashboard-properties",
});
</script>


<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
