<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h1 class="text-3xl font-bold text-center mb-4 text-[#933a6d]">
        Your Profile
      </h1>

      <div v-if="user">
        <p class="text-lg text-gray-700">
          <strong>Name:</strong> {{ user.name }}
        </p>
        <p class="text-lg text-gray-700">
          <strong>Email:</strong> {{ user.email }}
        </p>
        <p class="text-lg text-gray-700">
          <strong>Registered On:</strong>
          {{ new Date(user.registrationDate).toLocaleDateString() }}
        </p>
      </div>
      <div v-else>
        <p class="text-red-500 text-center">
          No user data found. Please log in again.
        </p>
      </div>

      <button
        @click="handleLogout"
        class="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const user = ref(null);

// Fetch user data from localStorage
const fetchUserProfile = () => {
  const storedUser = localStorage.getItem("loggedInUser");
  if (storedUser) {
    user.value = JSON.parse(storedUser);
  } else {
    // Redirect unauthorized users to login page
    window.location.href = "../auth/login";
  }
};

// Handle logout
const handleLogout = () => {
  localStorage.removeItem("loggedInUser");
  window.location.href = "../auth/login"; // Redirect to login page
};

onMounted(() => {
  fetchUserProfile();
});
</script>
