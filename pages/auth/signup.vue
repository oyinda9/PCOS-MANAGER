<template>
  <div class="flex min-h-screen bg-[#fbeff2]">
    <!-- Left side with an inspiring image -->
    <!-- <div class="w-1/2 hidden lg:block">
        <img src="/assets/female-reproductive-system-concept/4301429.jpg" 
             alt="Inspiring support" class="object-cover h-full w-full" />
      </div> -->

    <div class="w-1/2 hidden lg:block relative group">
      <!-- Image -->
      <img
        src="/assets/female-reproductive-system-concept/4301429.jpg"
        alt="Inspiring support"
        class="object-cover h-full w-full"
      />

      <!-- Overlay with caption -->
      <div
        class="absolute inset-0 bg-[#933a6d] bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span class="text-white text-2xl font-semibold"
          >Empowering Peace and Balance: Supporting Your PCOS Journey</span
        >
      </div>
    </div>

    <!-- Right side with the signup form -->
    <div class="w-full lg:w-1/2 flex flex-col items-center p-8">
      <div class="text-center">
        <h1 class="text-3xl font-semibold text-[#933a6d]">
          Join Our PCOS Community
        </h1>
        <p class="mt-2 text-[#6d4c57]">
          Take the first step toward a healthier you. We’re here to support your
          journey.
        </p>
      </div>

      <form class="w-full max-w-md bg-white shadow-lg p-6 rounded-lg mt-8" @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-[#6d4c57] text-sm font-bold mb-2" for="full-name">Full Name</label>
          <input type="text" id="full-name" v-model="name" placeholder="Enter your full name" class="w-full p-3 border border-gray-300 rounded-md"/>
        </div>

        <div class="mb-4">
          <label class="block text-[#6d4c57] text-sm font-bold mb-2" for="email">Email Address</label>
          <input type="email" id="email" v-model="email" placeholder="Enter your email" class="w-full p-3 border border-gray-300 rounded-md"/>
        </div>

        <div class="mb-4">
          <label class="block text-[#6d4c57] text-sm font-bold mb-2" for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="Create a password" class="w-full p-3 border border-gray-300 rounded-md"/>
        </div>

        <div class="mb-6">
          <label class="block text-[#6d4c57] text-sm font-bold mb-2" for="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" v-model="confirmPassword" placeholder="Confirm your password" class="w-full p-3 border border-gray-300 rounded-md"/>
        </div>

        <button type="submit" class="w-full bg-[#e75480] text-white font-bold py-3 rounded-lg transition hover:bg-[#d43a6a]">Start My Journey</button>
      </form>

      <p class="mt-6 text-[#6d4c57]">
        Already have an account?
        <NuxtLink to="../auth/login" class="text-[#e75480] underline"
          >Log in</NuxtLink
        >
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import Notiflix from "notiflix";

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const localApiUrl = "http://localhost:5000/users";
const hostedApiUrl = import.meta.env.VITE_REMOTE_API_URL + "/users"; // Hosted server URL

const handleSubmit = async () => {
  if (password.value !== confirmPassword.value) {
    Notiflix.Notify.failure("Passwords do not match!");
    return;
  }

  // Create user data with proper structure
  const user = {
    userInfo: {
      name: name.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    },
    healthData: {
      weightTracker: [],
      stressManagement: [],
      periodLogs: [],
      nextPeriod: "",
      ovulation: "",
    },
  };

  try {
    Notiflix.Loading.standard("Registering...");

    // Send data to both servers
    const [localResponse, hostedResponse] = await Promise.all([
      axios.post(localApiUrl, user), // Local server
      axios.post(hostedApiUrl, user), // Hosted server
    ]);

    if (localResponse.status === 201 && hostedResponse.status === 201) {
      Notiflix.Loading.remove();
      Notiflix.Notify.success("Registration successful!");

      // Redirect using Vue Router if available
      window.location.href = "/auth/login"; // Update path if necessary
    }
  } catch (error) {
    Notiflix.Loading.remove();
    console.error("Error registering user:", error);
    Notiflix.Notify.failure("Registration failed. Please try again.");
  }
};

export default {
  setup() {
    return {
      name,
      email,
      password,
      confirmPassword,
      handleSubmit,
    };
  },
};
</script>
