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
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], // Days of the week
        datasets: [
          {
            label: "Stress Levels",
            data: [3, 85, 84, 16, 2], // Dummy data
            borderColor: "rgba(255, 99, 132, 1)", // Line color
            backgroundColor: "rgba(255, 99, 132, 0.2)", // Fill color
            borderWidth: 2,
            tension: 0.3, // Smooth curves
          },
          {
            label: "weight management",
            data: [2, 50, 60, 40, 30], // Dummy data for the second dataset
            borderColor: "rgba(54, 162, 235, 1)", // Line color for the second dataset
            backgroundColor: "rgba(54, 162, 235, 0.2)", // Fill color for the second dataset
            borderWidth: 2,
            tension: 0.3, // Smooth curves
          },
          {
            label: "Health Metric",
            data: [5, 70, 65, 80, 90], // Dummy data for the third dataset
            borderColor: "rgba(75, 192, 192, 1)", // Line color for the third dataset
            backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color for the third dataset
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
          x: {
            title: {
              display: true,
              text: "Days",
              color: "rgba(75, 75, 75, 1)",
            },
            ticks: {
              color: "rgba(75, 75, 75, 1)",
            },
          },
          y: {
            title: {
              display: true,
              text: "Stress Level",
              color: "rgba(75, 75, 75, 1)",
            },
            ticks: {
              color: "rgba(75, 75, 75, 1)",
            },
            beginAtZero: true,
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
