<template>
  <div class="h-[340px] bg-gray-50 flex items-center justify-center rounded-md">
    <canvas id="stressChart"></canvas>
  </div>
</template>

<script>
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale, // Ensure 'CategoryScale' is imported
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components
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

export default {
  mounted() {
    const ctx = document.getElementById("stressChart").getContext("2d");
    const stressChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // Days of the week
        datasets: [
          {
            label: "Cycle Length (days)",
            data: [28, 30, 2, 31, 10, 30],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderWidth: 2,
            tension: 0.3, // Smooth curves
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Allows it to resize properly with the parent container
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              color: "rgba(75, 75, 75, 1)",
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Days",
            },
          },
        },
      },
    });
  },
};
</script>

<style scoped>
/* Add specific styles if needed */
</style>
