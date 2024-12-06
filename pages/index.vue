<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex items-center justify-between">
        <!-- Logo Section -->
        <div class="flex items-center gap-2">
          <!-- Heart Icon -->
          <Heart />
          <NuxtLink to="/" class="font-bold text-xl">Balance</NuxtLink>
        </div>

        <!-- Navigation Links -->
        <ul class="flex gap-6 items-center ml-auto">
          <li>
            <NuxtLink to="/about" class="hover:text-pink-700">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/stress-management" class="hover:text-pink-700"
              >Stress Management</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/weight-management" class="hover:text-pink-700"
              >Weight Management</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/community" class="hover:text-pink-700"
              >Community</NuxtLink
            >
          </li>
          <li>
            <button
              class="bg-pink-500 rounded-full text-white px-4 py-2 hover:bg-pink-700 transition"
            >
              Get Started
            </button>
          </li>
        </ul>
      </nav>
    </header>
  </div>
  <section class="py-12">
    <div class="container mx-auto text-center space-y-6">
      <h5 class="font-bold text-4xl">
        Your Journey to <a class="text-pink-500">PCOS Wellness</a>
      </h5>
      <p class="box-content text-lg">
        Embrace a holistic approach to manage PCOS with personalized strategies
      </p>
      <p class="text-lg">
        for stress reduction, weight management, and overall well-being.
      </p>
      <button
        class="bg-pink-500 text-white font-bold rounded-full py-3 px-6 mt-4 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-pink-600 duration-300"
      >
        Start Your Journey
      </button>
    </div>
  </section>

  <section class="space-y-50">
    <div class="grid grid-cols-3 gap-24 p-6 bg-red-50 space-y-50">
      <div class="flex items-start text-start rounded bg-white p-6">
        <div class="flex flex-col items-start gap-4">
          <!-- Icon container with spacing and background color -->
          <div
            class="bg-pink-300 px-4 py-4 w-16 h-16 rounded-md flex items-center justify-center"
          >
            <Brain class="text-pink-400 w-6 h-6" />
          </div>
          <!-- Text content -->
          <div class="text-start">
            <a class="font-bold text-xl text-gray-800">Stress Management</a>
            <p class="text-gray-600 mt-2">
              Learn evidence-based techniques for reducing stress and anxiety
              through mindfulness and relaxation practices.
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-start text-start rounded bg-white p-6">
        <div class="flex flex-col items-start gap-4">
          <!-- Icon container with spacing and background color -->
          <div
            class="bg-pink-300 px-4 py-4 w-16 h-16 rounded-md flex items-center justify-center"
          >
            <BicepsFlexed class="text-pink-400 w-6 h-6" />
          </div>
          <!-- Text content -->
          <div class="text-start">
            <a class="font-bold text-xl text-gray-800">Weight Management</a>
            <p class="text-gray-600 mt-2">
              Discover sustainable approaches to maintaining a healthy weight
              through balanced nutrition and exercise.
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-start text-start rounded bg-white p-6">
        <div class="flex flex-col items-start gap-4">
          <!-- Icon container with spacing and background color -->
          <div
            class="bg-pink-300 px-4 py-4 w-16 h-16 rounded-md flex items-center justify-center"
          >
            <Leaf class="text-pink-400 w-6 h-6" />
          </div>
          <!-- Text content -->
          <div class="text-start">
            <a class="font-bold text-xl text-gray-800">Natural Solutions</a>
            <p class="text-gray-600 mt-2">
              Explore holistic remedies and lifestyle modifications that support
              hormonal balance naturally.
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-start text-start rounded bg-white p-6">
        <div class="flex flex-col items-start gap-4">
          <!-- Icon container with spacing and background color -->
          <div
            class="bg-pink-300 px-4 py-4 w-16 h-16 rounded-md flex items-center justify-center"
          >
            <Moon class="text-pink-400 w-6 h-6" />
          </div>
          <!-- Text content -->
          <div class="text-start">
            <a class="font-bold text-xl text-gray-800">Better Sleep</a>
            <p>
              Improve your sleep quality with proven strategies that help
              regulate hormones and reduce symptoms.
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-start text-start rounded bg-white p-6">
        <div class="flex flex-col items-start gap-4">
          <!-- Icon container with spacing and background color -->
          <div
            class="bg-pink-300 px-4 py-4 w-16 h-16 rounded-md flex items-center justify-center"
          >
            <Apple class="text-pink-400 w-6 h-6" />
          </div>
          <!-- Text content -->
          <div class="text-start">
            <a class="font-bold text-xl text-gray-800">Nutrition Guide</a>
            <p>
              Access personalized nutrition advice and meal plans designed
              specifically for PCOS management.
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-start text-start rounded bg-white p-6">
        <div class="flex flex-col items-start gap-4">
          <!-- Icon container with spacing and background color -->
          <div
            class="bg-pink-300 px-4 py-4 w-16 h-16 rounded-md flex items-center justify-center"
          >
            <Heart class="text-pink-400 w-6 h-6" />
          </div>
          <!-- Text content -->
          <div class="text-start">
            <a class="font-bold text-xl text-gray-800">Community Support</a>
            <p>
              Connect with others on similar journeys and share experiences in a
              supportive environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-12 ">
    <div class="text-center space-y-6">
      <h6 class="font-bold text-3xl font-sans">Success Stories</h6>

      <!-- Quote Section -->
      <div class="italic text-lg text-gray-600 mb-4">
       
        "This approach to PCOS management has truly transformed my life. I've
        never felt more balanced and in control."
      </div>

      <!-- Person's Image -->
      <div class="flex justify-center">
        <img
          src="../public/boy.png"
          alt="Person's Image"
          class="w-16 h-16 rounded-full object-cover"
        />
      </div>
    </div>
  </section>

  <section class="bg-red-50 py-12">
  <div class="text-center space-y-6">
    <h1 class="text-3xl font-bold text-gray-800">
      Ready to Take Control of Your PCOS Journey?
    </h1>
    <p class="text-lg text-gray-700">
      Join our community of women supporting each other through their PCOS
      management journey.
    </p>
    <button class="rounded-full px-6 py-3 text-white bg-pink-500 hover:bg-pink-600 transition duration-300">
      Get Started Today
    </button>
  </div>
</section>
<!-- Footer Section -->
<footer class="bg-white text-pink-500 mt-5 py-6">
  <div class="text-center space-y-2">
    <div class="font-bold text-2xl flex justify-center items-center space-x-2">
      <!-- Heart Icon -->
      <Heart class="text-pink-500" />
      <span>Balance</span>
    </div>
    <p class=" font-bold text-sm text-black">
      @Sholanke All rights reserved.
    </p>
  </div>
</footer>


</template>

<script setup>
// import { NuxtLink } from '#build/components';
import { Heart } from "lucide-vue-next";
import { Brain } from "lucide-vue-next";
import { BicepsFlexed } from "lucide-vue-next";
import { Moon } from "lucide-vue-next";
import { Apple } from "lucide-vue-next";
import { Leaf } from "lucide-vue-next";
import { Quote } from "lucide-vue-next";
</script>
