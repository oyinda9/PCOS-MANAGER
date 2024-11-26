<template>
    <div class="">
      <p class="mt-4 text-gray-700"></p>
      <div class="min-h-screen w-full">
        <header class="text-2xl font-bold text-gray-800 mb-4 px-2">Hello 👋 james</header>
  
        <!-- Daily Tip -->
        <div class="bg-pink-500 text-white rounded-lg p-4 mb-6">
          <h2 class="text-lg font-semibold mb-2">Daily Tip</h2>
          <p class="text-sm">
            "Stay hydrated! Drinking at least 8 glasses of water a day can improve your mood and energy levels."
          </p>
        </div>
  
        <!-- Main Grid Layout -->
        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 h-[500px]">
          <!-- Period Log Calendar -->
          <div class="bg-white shadow rounded-lg p-4">
            <h2 class="text-lg font-semibold text-gray-700 mb-2">Period Log Calendar</h2>
            <div id="calendar" class="h-[390px] bg-gray-50 rounded-md flex items-center justify-center">
              <fullCalendar class="w-full bg-gray-50 mt-[60px]" />
            </div>
          </div>
  
          <!-- Health Overview Management -->
          <div class="shadow rounded-lg p-4">
            <h2 class="text-lg font-semibold text-gray-700 mb-2">Health Overview</h2>
            <div class="w-full bg-gray-50 rounded-md flex items-center justify-center">
              <div class="w-full h-full">
                <StressChart class="w-full h-full mt-[60px]" />
              </div>
            </div>
          </div>
        </div>
  
        <!-- Appointments & Summary -->
        <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          <!-- Appointments -->
          <div class="bg-white shadow rounded-lg p-4">
            <h2 class="text-lg font-semibold text-gray-700 mb-2">Appointments</h2>
            <ul class="divide-y divide-gray-200">
              <li class="py-2">
                <p class="text-sm text-gray-800">Doctor's Checkup</p>
                <p class="text-xs text-gray-500">March 15, 2024 - 10:00 AM</p>
              </li>
              <li class="py-2">
                <p class="text-sm text-gray-800">Therapy Session</p>
                <p class="text-xs text-gray-500">March 20, 2024 - 3:00 PM</p>
              </li>
            </ul>
          </div>
  
          <!-- Summary -->
          <div class="bg-white shadow rounded-lg p-4">
            <h2 class="text-lg font-semibold text-gray-700 mb-2">Summary</h2>
            <p class="text-sm text-gray-500">
              You're doing great! Keep up the good work managing your health. Next appointment is on March 15, 2024.
            </p>
            <div class="mt-4 flex items-center space-x-4">
              <div class="flex items-center space-x-2">
                <span class="w-3 h-3 bg-green-500 rounded-full"></span>
                <p class="text-sm text-gray-500">Good Metrics</p>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <p class="text-sm text-gray-500">Needs Attention</p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Charts Section -->
        <div class="mt-6">
          <h2 class="text-lg font-semibold text-gray-700 mb-4">Charts Overview</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Dummy Chart 1 -->
            <div class="bg-white shadow rounded-lg p-4">
              <h3 class="text-md font-semibold text-gray-700 mb-2">Daily Stress Levels</h3>
              <div class="h-48 bg-gray-50 flex items-center justify-center rounded-md">
                <p class="text-gray-500"> </p>
              </div>
            </div>
  
            <!-- Dummy Chart 2 -->
            <div class="bg-white shadow rounded-lg p-4">
              <h3 class="text-md font-semibold text-gray-700 mb-2">Health Metrics</h3>
              <div class="h-48 bg-gray-50 flex items-center justify-center rounded-md">
                <p class="text-gray-500">[Chart Placeholder]</p>
              </div>
            </div>
  
            <!-- Dummy Chart 3 -->
            <div class="bg-white shadow rounded-lg p-4">
              <h3 class="text-md font-semibold text-gray-700 mb-2">Appointments Trends</h3>
              <div class="h-48 bg-gray-50 flex items-center justify-center rounded-md">
                <p class="text-gray-500">[Chart Placeholder]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import fullCalendar from '~/components/fullCalendar.vue';
  definePageMeta({
    layout: 'dashboard-properties'
  });
  import StressChart from '~/components/stressChart.vue';
  import periodCalendar from '~/components/periodCalendar.vue';
  
  export default {
    components: {
      StressChart,
      periodCalendar
    },
  };
  </script>
  
  <style scoped>
  /* Add page-specific styles here */
  </style>
  