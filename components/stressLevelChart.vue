<template>
    <div>
      <!-- Canvas for the chart -->
      <canvas ref="chartCanvas" class="w-full h-64"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, onMounted } from 'vue';
  import Chart from 'chart.js/auto';
  
  // Define the props for the component, receiving stressLevels from the parent
  const props = defineProps({
    stressLevels: {
      type: Array,
      required: true,
    }
  });
  
  const chartRef = ref(null); // Ref for the canvas element
  let chartInstance = null; // Variable to store the chart instance
  
  // Function to create or update the chart
  const updateChart = () => {
    // Ensure that there is at least one stress level before rendering the chart
    if (props.stressLevels.length === 0) {
      return; // Skip chart creation if there's no data
    }
  
    // Destroy the previous chart instance if it exists
    if (chartInstance) {
      chartInstance.destroy();
    }
  
    // Check if the canvas reference exists before initializing the chart
    if (chartRef.value) {
      chartInstance = new Chart(chartRef.value, {
        type: 'line', // Type of chart (line chart)
        data: {
          labels: Array.from({ length: props.stressLevels.length }, (_, i) => `Day ${i + 1}`), // Dynamic labels for each day
          datasets: [{
            label: 'Stress Level',
            data: props.stressLevels, // Data from the parent component
            borderColor: 'rgba(255, 99, 132, 1)', // Line color
            tension: 0.1, // Line smoothness
            fill: false, // No fill under the line
            pointRadius: 5, // Radius of the data points
          }]
        },
        options: {
          responsive: true, // Make chart responsive to screen size
          maintainAspectRatio: false, // Allow custom aspect ratio
          scales: {
            x: {
              title: {
                display: true,
                text: 'Days', // X-axis title
              }
            },
            y: {
              title: {
                display: true,
                text: 'Stress Level', // Y-axis title
              },
              min: 0, // Y-axis minimum value
              max: 10, // Y-axis maximum value
            }
          }
        }
      });
    }
  };
  
  // Watch for changes in the stressLevels prop and update the chart accordingly
  watch(() => props.stressLevels, updateChart, { immediate: true });
  
  // Initialize the chart when the component is mounted
  onMounted(() => {
    updateChart();
  });
  </script>
  
  <style scoped>
  /* Optional: Adjust the size of the canvas to your needs */
  canvas {
    max-width: 100%;
    height: 400px;
  }
  </style>
  