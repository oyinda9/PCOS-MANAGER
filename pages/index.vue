<template> 
  <div>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <div class="flex items-center gap-2">
        <Heart />  
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
      <NuxtLink to="/" class="font-bold item-start" >Balance</NuxtLink>
      </div>
      <ul class="flex gap-6">
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/contact">Stress Management</NuxtLink></li>
        <li><NuxtLink to="/contact">Weight Management</NuxtLink></li>
        <li><NuxtLink to="/contact">Community</NuxtLink></li>
        <li>
          <button class="bg-red-600 rounded text-white px-1 py-1">
            Get Started
          </button>
        </li>
      </ul>
    </nav>
  </header>
</div>

<section>
  <div class="container mx-auto text-center space-y-4">
    <h5 class="font-bold text-4xl">
      Your Journey to <a class="text-pink-500">PCOS Wellness</a>
    </h5>
    <p class="box-content">
      Embrace a holistic approach to manage PCOS with personalized strategies
    </p>
    <p>for stress reduction, weight management, and overall well-being.</p>
    <button class="bg-pink-500 text-white font-bold rounded py-2 px-4">
      Start Your Journey
    </button>
  </div>
</section>

<section class="space-y-50">
  <div class="grid grid-cols-3 gap-24 p-6 bg-red-50 space-y-50">
    <div class="flex items-start text-start rounded bg-white">
      <h2 class="p-6">
        <Brain />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>
        <a class="font-bold text-xl">Stress Management</a>
        <p>
          Learn evidence-based techniques for reducing stress and anxiety
          through mindfulness and relaxation practices.
        </p>
      </h2>
    </div>

    <div class="bg-white text-center  rounded">
      <h2 class="p-6  items-start text-start">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-biceps-flexed"><path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"/><path d="M15 14a5 5 0 0 0-7.584 2"/><path d="M9.964 6.825C8.019 7.977 9.5 13 8 15"/></svg>
        <BicepsFlexed />
        <a class="font-bold text-xl">Weight Management</a>
        <p>
          Discover sustainable approaches to maintaining a healthy weight
          through balanced nutrition and exercise.
        </p>
      </h2>
    </div>

    <div class="bg-white text-center  rounded">
      <h2 class="p-6 items-start text-start">
        <Leaf />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
        <a class="font-bold text-xl">Natural Solutions</a>
        <p>
          Explore holistic remedies and lifestyle modifications that support
          hormonal balance naturally.
        </p>
      </h2>
    </div>

    <div class="bg-white text-center  rounded">
      <h2 class="p-6 items-start text-start">
        <Moon />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
        <a class="font-bold text-xl">Better Sleep</a>
        <p>
          Improve your sleep quality with proven strategies that help regulate
          hormones and reduce symptoms.
        </p>
      </h2>
    </div>

    <div class="bg-white text-center  rounded">
      <h2 class="p-6 items-start text-start">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-apple"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>
        <Apple />
        <a class="font-bold text-xl">Nutrition Guide</a>
        <p>
          Access personalized nutrition advice and meal plans designed
          specifically for PCOS management.
        </p>
      </h2>
    </div>

    <div class="bg-white text-center rounded">
      <h2 class="p-6  items-start text-start  ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
        <Heart />
        <a class="font-bold text-xl">Community Support</a>
        <p>
          Connect with others on similar journeys and share experiences in a
          supportive environment.
        </p>
      </h2>
    </div>
  </div>
</section>

<section>
  <div class="text-center space-y-4">
    <h6 class="font-bold text-3xl font-sans">Success Stories</h6>
    <p class="font-sans">

      Hear from women who have transformed their lives with Balance.
    </p>
  </div>

  <div class="italic grid grid-cols-2 gap-4 items-start text-start rounded p-6">
    <div class="">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/></svg>
      This holistic approach to PCOS management has transformed my life. I've
      learned to listen to my body and make sustainable changes that actually
      work.
    </div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/></svg>
      The stress management techniques and nutrition guidance have made such a
      difference in my daily life. I feel more energetic and balanced than ever.
    </div>
  </div>
</section>

<section>
  <div class="text-center space-y-4">
    <h1 class="text-3xl font-bold">
      Ready to Take Control of Your PCOS Journey?
    </h1>
    <p>
      Join our community of women supporting each other through their PCOS
      management journey.
    </p>
    <button class="rounded px-4 py-1 text-white bg-pink-500">
      Get Started Today
    </button>

    <footer class="font-bold text-2xl font-sans">Balance</footer>
    <p class="italic font-bold">@Sholanke All rights reserved.</p>
  </div>
</section>

    
</template>

<script>
// import { NuxtLink } from '#build/components';
import { Heart } from 'lucide-vue-next';
import { Brain } from 'lucide-vue-next';
import { BicepsFlexed } from 'lucide-vue-next';
import { Moon } from 'lucide-vue-next';
import { Apple } from 'lucide-vue-next';




</script>


