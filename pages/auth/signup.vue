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

      <form class="w-full max-w-md bg-white shadow-lg p-6 rounded-lg mt-8">
        <div class="mb-4">
          <label
            class="block text-[#6d4c57] text-sm font-bold mb-2"
            for="full-name"
            >Full Name</label
          >
          <input
            type="text"
            id="full-name"
            placeholder="Enter your full name"
            class="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        <div class="mb-4">
          <label class="block text-[#6d4c57] text-sm font-bold mb-2" for="email"
            >Email Address</label
          >
          <input
            type="email"
            id="email"
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
            placeholder="Create a password"
            class="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        <div class="mb-6">
          <label
            class="block text-[#6d4c57] text-sm font-bold mb-2"
            for="confirm-password"
            >Confirm Password</label
          >
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm your password"
            class="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        <button
          class="w-full bg-[#e75480] text-white font-bold py-3 rounded-lg transition hover:bg-[#d43a6a]"
        >
          Start My Journey
        </button>

        <p class="text-xs text-gray-500 mt-4 text-center">
          By signing up, you agree to our
          <a href="#" class="text-[#e75480] underline">Terms of Service</a> and
          <a href="#" class="text-[#e75480] underline">Privacy Policy</a>.
        </p>
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
export default {
  name: "SignupPage",
};
</script>
