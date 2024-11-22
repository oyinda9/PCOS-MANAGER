<!-- pages/Dashboard.vue -->
<template>
    <DashboardLayout>
      <h2 class="text-xl font-bold">Welcome to the Dashboard!</h2>
      <p class="mt-4 text-gray-700">
       
      </p>
    </DashboardLayout>
  </template>
  
  <script>
  import DashboardLayout from '@/layouts/DashboardLayout.vue';
  
  export default {
    name: 'DashboardPage',
    components: {
      DashboardLayout,
    },
  };
  </script>
  
  <style scoped>
  /* Add page-specific styles here */
  </style>
  