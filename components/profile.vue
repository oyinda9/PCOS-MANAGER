<template>
  <div>
    <!-- Modal -->
    <div
   
      class="absolute top-full right-0 bg-white p-4 rounded-lg shadow-lg mt-2 w-64"
    >
      <h2
        class="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
      >
        User Information
      </h2>
      <p><strong>Full Name:</strong> {{ userInfo.name }}</p>
      <p><strong>Email:</strong> {{ userInfo.email }}</p>

      <!-- Close button -->
      <button
        
        class="mt-4 bg-pink-500 text-white px-4 py-2 rounded"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const isVisible = ref(true);
const userInfo = ref<any>({});

const loggedInUser = localStorage.getItem("loggedInUser");
if (loggedInUser) {
  userInfo.value = JSON.parse(loggedInUser);
}

const closeModal = () => {
  isVisible.value = false; // This will hide the modal when the close button is clicked
};
</script>

<style scoped>
/* You can further customize the modal and positioning here */
</style>
