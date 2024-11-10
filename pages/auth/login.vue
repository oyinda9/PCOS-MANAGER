<template>
    <div class="signup-container flex flex-col items-center bg-light-purple min-h-screen p-8">
      <div class="header-text text-center">
        <h1 class="text-3xl font-semibold text-deep-purple">Join Our PCOS Community</h1>
        <p class="mt-2 text-gray-600">Take the first step toward a healthier you. We’re here to support your journey.</p>
      </div>
      
      <form class="signup-form w-full max-w-md bg-white shadow-lg p-6 rounded-lg mt-8">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="full-name">Full Name</label>
          <input type="text" id="full-name" placeholder="Enter your full name" class="input-field" />
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email" class="input-field" />
        </div>
  
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
          <input type="password" id="password" placeholder="Create a password" class="input-field" />
        </div>
        
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" placeholder="Confirm your password" class="input-field" />
        </div>
  
        <button class="w-full bg-pink-500 text-white font-bold py-3 rounded-lg transition hover:bg-pink-600">Start My Journey</button>
        
        <p class="text-xs text-gray-500 mt-4 text-center">
          By signing up, you agree to our <a href="#" class="text-pink-600 underline">Terms of Service</a> and <a href="#" class="text-pink-600 underline">Privacy Policy</a>.
        </p>
      </form>
  
      <p class="mt-6 text-gray-600">Already have an account? <NuxtLink to="/login" class="text-pink-600 underline">Log in</NuxtLink></p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SignupPage',
  };
  </script>
  
  <style scoped>
  .signup-container {
    background-color: #f4f0ff;
  }
  .header-text h1 {
    color: #5e3a8d;
  }
  .input-field {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 0.375rem;
  }
  </style>
  