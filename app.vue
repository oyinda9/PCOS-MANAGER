<template>
  <div>
    <DashboardLayout>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </DashboardLayout>
  </div>
</template>
<script>
import DashboardLayout from './layouts/DashboardLayout.vue';
export default {
  name: 'App',
  components: {
    DashboardLayout, // Register the layout component globally
  },
};
</script>