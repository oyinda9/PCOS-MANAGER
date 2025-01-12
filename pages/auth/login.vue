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
        <span class="text-white text-2xl font-semibold px-5">
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

        <div class="mb-4 relative">
    <label
      class="block text-[#6d4c57] text-sm font-bold mb-2"
      for="password"
    >
      Password
    </label>
    <input
      :type="showPassword ? 'text' : 'password'"
      id="password"
      v-model="password"
      placeholder="Enter your password"
      class="w-full p-3 border border-gray-300 rounded-md"
    />
    <!-- Eye Icon -->
    <button
      type="button"
      @click="togglePassword"
      class="absolute inset-y-0 right-3 mt-6 flex items-center text-gray-500"
    >
      <component
        :is="showPassword ? Eye :   EyeOff"
        class="h-5 w-5"
      />
    </button>
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
import Notiflix from "notiflix";
import { Eye, EyeOff } from "lucide-vue-next";
const email = ref("");
const password = ref("");

  const   showPassword =ref (false);
  const togglePassword =()=>{
    showPassword.value=!showPassword.value
  } 
// Handle the login form submission
const handleLogin = async () => {
  // Basic validation
  if (!email.value || !password.value) {
    Notiflix.Notify.warning("Please fill in both fields!");
    return;
  }

  try {
    // Show loading spinner before the request
    Notiflix.Loading.standard("Authenticating...");

    // Fetch users from the JSON Server (simulating a login)
    // const response = await axios.get("http://localhost:5000/users");
    // const response = await axios.get("/json/db.json");
    // const users = response.data.users;  // Access the users array from db.json
    // Get the API URL from the environment variable
    const apiUrl = import.meta.env.VITE_API_URL;

    // Fetch users from the local JSON Server (replace with your actual endpoint)
    const response = await axios.get(`${apiUrl}/users`);
    const users = response.data; // Get the list of users from the response


    // Find the user based on email and password
  const user = users.find(
    (user) => user.email === email.value && user.password === password.value
  );


    // Simulate a delay (optional, for visual effect)
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Optional: 1 second delay

    if (user) {
      // Stop loading spinner
      Notiflix.Loading.remove();

      // Notify success
      Notiflix.Notify.success("Login Successful!");

      // Save user info in local storage
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      // Redirect to the dashboard
      window.location.href = "../dashboard_properties/dashboard"; // Adjust the route accordingly
    } else {
      // Stop loading spinner
      Notiflix.Loading.remove();

      // Notify invalid credentials
      Notiflix.Notify.failure("Invalid credentials. Please try again.");
    }
  } catch (error) {
    // Stop loading spinner
    Notiflix.Loading.remove();

    console.error("Error logging in:", error);
    Notiflix.Notify.failure("An error occurred. Please try again later.");
  }
};
</script>
