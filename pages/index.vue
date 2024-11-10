<template>
    <div class="bg-white text-gray-800">
      <!-- Hero Section -->
      <section class="relative bg-pink-400 text-white py-20">
        <div class="absolute inset-0">
          <img
            src="https://source.unsplash.com/1600x900/?health,wellness,pcos"
            alt="PCOS Health"
            class="object-cover w-full h-full opacity-30"
          />
        </div>
        <div class="container mx-auto text-center relative z-10">
          <h1 class="text-4xl md:text-5xl font-semibold mb-6">Welcome to PCOS Health & Stress Management</h1>
          <p class="text-lg md:text-xl mb-8">
            Manage your PCOS, reduce stress, and improve your overall health with personalized tips and recommendations.
          </p>
       
          <NuxtLink to="../auth/signup">
            <button class="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition">
              Get Started
            </button>
          </NuxtLink>
       
        </div>
      </section>
  
      <!-- Features Section -->
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-semibold text-gray-800 mb-12">Features</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <img
               src="../assets/flat-illustration-businessman-meditating/5241291.jpg"
                alt="Stress Management"
                class="w-[400px] h-[300px] object-cover rounded-lg mb-4"
              />
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Stress Management</h3>
              <p class="text-gray-600">
                Discover various techniques like yoga and meditation to manage PCOS-related stress.
              </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="../assets/healthy-food-concept-illustration/7874778.jpg"
                alt="Healthy Foods"
                class="w-[400px] h-[300px] object-cover rounded-lg mb-4"
              />
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Healthy Foods</h3>
              <p class="text-gray-600">
                Get personalized food recommendations to support your PCOS management and improve health.
              </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="../assets/flat-national-doctor-s-day-illustration-with-medic-waving/7303550.jpg"
                alt="Female Doctors"
                class="w-[400px] h-[350px] object-cover rounded-lg mb-4"
              />
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Consult Female Doctors</h3>
              <p class="text-gray-600">
                Connect with experienced female doctors for personalized advice and guidance on managing PCOS.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Call to Action Section -->
      <section class="bg-pink-400 py-16 text-center">
        <h2 class="text-3xl font-semibold text-white mb-6">Take Control of Your Health Today</h2>
        <p class="text-lg text-white mb-8">Join us now and start managing your PCOS with tailored advice and support.</p>
        <NuxtLink to="/signup">
          <button class="bg-gray-800 text-yellow-400 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition">
            Sign Up Now
          </button>
        </NuxtLink>
      </section>
    </div>
  </template>
  
  <script setup>
  // Any necessary script for handling data, user authentication, etc.
  </script>
  
  <style scoped>
  /* Optional custom styles */
  </style>
  