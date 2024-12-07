<template>
    <div class="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 p-6">
      <div class="container mx-auto py-10">
        <!-- Page Header -->
        <header class="text-center mb-8">
          <h1 class="text-4xl font-bold text-pink-700">PCOS Community</h1>
          <p class="text-xl text-purple-600 mt-4">
            Connect, share, and learn with others affected by PCOS.
          </p>
        </header>
  
        <!-- Introduction Section -->
        <section class="mb-12 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6">
          <h2 class="text-3xl font-semibold text-pink-600 mb-4">What is PCOS?</h2>
          <p class="text-lg text-gray-700">
            Polycystic Ovary Syndrome (PCOS) is a hormonal disorder that affects people with ovaries. It can cause a variety of symptoms, including irregular periods, acne, weight gain, and fertility challenges. However, with the right support and lifestyle changes, it is possible to manage the condition effectively.
          </p>
          <p class="text-lg text-gray-700 mt-4">
            Our community is here to help you navigate your journey with PCOS by providing resources, support, and guidance.
          </p>
        </section>
  
        <!-- Discussion Forum -->
        <section class="mb-12 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6">
          <h2 class="text-3xl font-semibold text-pink-600 mb-4">Join the Discussion</h2>
          <p class="text-lg text-gray-700 mb-4">
            Have a question or want to share your experience? Join the discussion below and connect with others.
          </p>
          <div class="bg-white p-4 rounded-lg shadow-md">
            <textarea v-model="newPost" class="w-full p-4 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent" rows="4" placeholder="Share your thoughts..."></textarea>
            <button @click="postMessage" class="mt-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors duration-300">
              Post
            </button>
            <div v-if="posts.length > 0" class="mt-6">
              <h3 class="text-2xl font-semibold text-pink-600 mb-4">Previous Posts</h3>
              <ul>
                <li v-for="(post, index) in posts" :key="index" class="border-b border-gray-200 pb-4 mb-4">
                  <p class="font-semibold text-purple-700">{{ post.author }}</p>
                  <p class="text-gray-700">{{ post.content }}</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
  
        <!-- Resources Section -->
        <section class="mb-12">
          <h2 class="text-3xl font-semibold text-pink-600 mb-4">PCOS Resources</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div class="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold text-purple-700">Educational Articles</h3>
              <p class="text-gray-600 mt-2">Explore articles about managing PCOS symptoms and improving quality of life.</p>
              <a href="#" class="mt-4 inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-md hover:from-pink-600 hover:to-purple-600 transition-colors duration-300">Read Articles</a>
            </div>
            <div class="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold text-purple-700">Expert Advice</h3>
              <p class="text-gray-600 mt-2">Get advice from medical professionals on treatment and self-care for PCOS.</p>
              <a href="#" class="mt-4 inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-md hover:from-pink-600 hover:to-purple-600 transition-colors duration-300">Get Expert Advice</a>
            </div>
            <div class="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold text-purple-700">Videos and Tips</h3>
              <p class="text-gray-600 mt-2">Watch videos and tutorials on managing PCOS symptoms effectively.</p>
              <a href="#" class="mt-4 inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-md hover:from-pink-600 hover:to-purple-600 transition-colors duration-300">Watch Videos</a>
            </div>
          </div>
        </section>
  
        <!-- Success Stories Section -->
        <section class="mb-12 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6">
          <h2 class="text-3xl font-semibold text-pink-600 mb-4">Success Stories</h2>
          <div class="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-lg shadow-md">
            <p class="text-lg text-gray-700">
              "I was diagnosed with PCOS 5 years ago, and with the right lifestyle changes, I've been able to manage my symptoms and improve my quality of life."
            </p>
            <p class="text-purple-600 mt-4 font-semibold">- Sarah, 28</p>
          </div>
        </section>
  
        <!-- Contact / Support Section -->
        <section class="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6">
          <h2 class="text-3xl font-semibold text-pink-600 mb-4">Get in Touch</h2>
          <p class="text-lg text-gray-700 mb-4">
            If you need more support, don't hesitate to reach out. We're here to help!
          </p>
          <div class="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-lg shadow-md">
            <p class="text-lg text-gray-700">Contact a healthcare provider or PCOS support group for personalized guidance.</p>
            <a href="mailto:support@pcoscommunity.com" class="mt-4 inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-md hover:from-pink-600 hover:to-purple-600 transition-colors duration-300">Contact Us</a>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const posts = ref([
    { author: 'Jane', content: "I've been managing my PCOS with a low-carb diet. Anyone else tried that?" },
    { author: 'Emma', content: "Has anyone tried acupuncture for PCOS symptoms? I'm curious."}
  ]);
  
  const newPost = ref('');
  
  const postMessage = () => {
    if (newPost.value.trim() !== '') {
      posts.value.push({ author: 'Anonymous', content: newPost.value });
      newPost.value = ''; // Clear textarea after posting
    }
  };
  
  definePageMeta({
    layout: 'dashboard-properties'
  });
  </script>
  
  <style scoped>
  /* Add any additional component-specific styles here */
  </style>