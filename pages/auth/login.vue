<template>
  <div class="flex min-h-screen bg-[#fbeff2]">
    <!-- Left side with an inspiring image (optional) -->
    <div class="w-1/2 hidden lg:block relative group">
      <img
        src="/assets/female-reproductive-system-concept/4301429.jpg"
        alt="Inspiring support"
        class="object-cover h-full w-full"
      />
      <div
        class="absolute inset-0 bg-[#933a6d] bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span class="text-white text-2xl font-semibold">
          Empowering Peace and Balance: Supporting Your PCOS Journey
        </span>
      </div>
    </div>

    <!-- Right side with the login form -->
    <div class="w-full lg:w-1/2 flex flex-col items-center p-8">
      <div class="text-center">
        <h1 class="text-3xl font-semibold text-[#933a6d]">
          Login to Your Account
        </h1>
        <p class="mt-2 text-[#6d4c57]">
          Welcome back! Please log in to continue.
        </p>
      </div>

      <!-- Login Form -->
      <form
        class="w-full max-w-md bg-white shadow-lg p-6 rounded-lg mt-8"
        @submit.prevent="handleLogin"
      >
        <div class="mb-4">
          <label class="block text-[#6d4c57] text-sm font-bold mb-2" for="email"
            >Email Address</label
          >
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter your email"
            class="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        <div class="mb-4">
          <label
            class="block text-[#6d4c57] text-sm font-bold mb-2"
            for="password"
            >Password</label
          >
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            class="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-[#e75480] text-white font-bold py-3 rounded-lg transition hover:bg-[#d43a6a]"
        >
          Login
        </button>
      </form>

      <p class="mt-6 text-[#6d4c57]">
        Don't have an account?
        <NuxtLink to="../auth/signup" class="text-[#e75480] underline"
          >Sign up</NuxtLink
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const email = ref("");
const password = ref("");

// Handle the login form submission
const handleLogin = async () => {
  // Basic validation
  if (!email.value || !password.value) {
    alert("Please fill in both fields!");
    return;
  }

  try {
    // Fetch users from the JSON Server (simulating a login)
    const response = await axios.get("http://localhost:5000/users");

    const user = response.data.find(
      (user) => user.email === email.value && user.password === password.value
    );

    if (user) {
      alert("Login successful!");
      // Redirect to the dashboard or main page
      window.location.href = "../dashboard_properties/dashboard"; // Adjust the route accordingly
      localStorage.setItem("loggedInUser", JSON.stringify(user));
    } else {
      alert("Invalid credentials. Please try again.");
    }
  } catch (error) {
    console.error("Error logging in:", error);
    alert("An error occurred. Please try again later.");
  }
};

return {
  email,
  password,
  handleLogin,
};
</script>
