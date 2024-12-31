<template>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <!-- Render the icon dynamically -->
      <component 
        :is="icon" 
        class="w-12 h-12 text-purple-600 mb-4"
      />
      <h3 class="text-xl font-semibold text-purple-800 mb-2">{{ title }}</h3>
      <p class="text-gray-600">{{ description }}</p>
    </div>
  </template>
  
  <script setup>
  // Define data directly in the setup block
  import { BrainIcon } from 'lucide-vue-next'
  
  // Static data for this component
  const title = "Stress Management"
  const description = "Learn techniques to reduce stress and improve your overall well-being."
  const icon = BrainIcon
  </script>
  