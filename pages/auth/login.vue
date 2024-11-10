<template>
  <div class="flex min-h-screen bg-[#faf0f8]">
    <!-- Left side with the login form -->
    <div class="w-full lg:w-1/2 flex flex-col items-center justify-center p-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-semibold text-[#b8579a]">Welcome Back!</h1>
        <p class="mt-2 text-gray-700">Log in to access your personalized PCOS support dashboard.</p>
      </div>

      <form class="w-full max-w-md bg-white shadow-lg p-6 rounded-lg">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email" 
                 class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#b8579a]" />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" 
                 class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#b8579a]" />
        </div>

        <div class="flex justify-between items-center">
          <a href="#" class="text-sm text-[#b8579a] hover:underline">Forgot Password?</a>
        </div>

        <button type="submit" 
                class="w-full bg-[#d78ab3] text-white font-bold py-3 rounded-lg mt-6 hover:bg-[#c36a99] transition">
          Log In
        </button>
      </form>

      <p class="mt-6 text-gray-600">
        Don't have an account? <NuxtLink to="../auth/signup" class="text-[#d78ab3] underline">Sign Up</NuxtLink>
      </p>
    </div>

    <!-- Right side with animated image -->
    <div class="hidden lg:block w-1/2 relative">
      <img src="/assets/hand-drawn-family-reunion-illustration/7570247.jpg" 
           alt="Supportive community" 
           class="object-cover h-full w-full rounded-r-lg  " />
    </div>
  </div>
</template>



<script>
export default {
  name: 'LoginPage',
};
</script>
