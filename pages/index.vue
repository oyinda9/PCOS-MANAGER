<template>
    <div class="min-h-screen bg-gradient-to-br from-purple-50via-pink-50 to-blue-50">
        <div class="container mx-auto p-4 sm:p-6 lg:p-8">
          <header class="mb-12 text-center">
            <h1 class="text-4xl sm:text-5xl font-bold mb-4 text-purple-800 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              PCOS</h1>
              <p class="text-ig sm:text-xl text-purple-600">Your Journey Starts Now</p>
          </header>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <!-- Weight Loss Tracking -->
             <div class="bg-white shadown-xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
              <div class="h-48 bg-pink-200 relative">
                <img src="../assets/stress.jpeg" alt="" class="absolute inset-0 w-full h-full object-cover">
              </div>
              <div class="p-6">
                <h2 class="text-2xl font-bold text-pink-700 mb-2">Weight loss progress</h2>
                <p class="text-pink-600 mb-4">track your weight loss journey</p>
                <!-- <LineChart:chart-data="stressChartData":options="chartOptions" class="mb-6"/> -->
                 <div class="mt-6">
                  <div class="flex justify-between mb-2">
                    <span class="text-sm font-medium text-purple-600">Current 72kg</span>
                    <span class="text-sm font-medium text-purple-600">Goal:65kg</span>
                  </div>
                    <div class="h-2 bg-purple-200rounded-full">
                      <div class="h-full bg-purple-500 rounded-full" style="width:70%"></div>
                    </div>
                 </div>
              </div>
             </div>
          </div>
         
          
          <!-- stress Management -->
           <div class="bg-white shadow-xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
            <div class="h-48 bg-pink-200 relative">
              <img src="../assets/stress.jpeg" alt="" class="absolute inset-0 w-full h-full object-cover">
            </div>
            <div class="p-6">
              <h2 class="text-2xl font-bold text-pink-700 mb-2">Stress Management</h2>
              <p class="text-600 mb-4">Monitor and Manage your stress level</p>
              <!-- <LineChart :chart-data="stressChartData" :options="chartOptions" class="mb-6" /> -->
               <div class="mt-6">
                <p class="text-lg font-medium text-pink-600"> Todays stress level:low</p>
                <p class="text-sm text-pink-600 mt-2">Keep it UP</p>
               </div>
            </div>
           </div>
        </div>
         <!-- Food Management -->
         <div class="bg-white shadow-xl rounded-2xl-overflow-hidden transform transition-all duration-300 hover-scale-105 ">
              <div class="h-48 bg-green-200 relative">
                <img src="../assets/healthy.jpeg?height=192&widht=384" alt="" class="absolute insert-0 w-full h-full object-cover">
              </div>
              <div class="p-6">
                <h2 class="text-2xl font-bold text-green-700 mb-2">Food Management</h2>
                <p class="text-green-600 mb-4">plan your meals</p>
                <div class="mb-4">
                  <!-- <button 
                  v-for="tab in [`meal-plan','food-diary`]"
                  :key="tab"
                  @click="activeTab=tab"
                  :class="[
                    'px-4 py-2 rounded-lg'
                    activeTab === tab?'bg-green-500 text-white':'bg-green-100 text-green-700'
                  ]">
                  {{ tab==='meal-plan'?'Meal plan':'Food Diary'}}
                </button> -->
                </div>
                <div v-if="activeTab === 'meal plan'">
                  <ul class="space-y-3">
                    <li v-for="meal in meals":key="meal" class="flex items-center text-green-700">
                      <span class="mr-2">;</span>
                      <span>{{ meal }}</span>
                    </li>
                  </ul>
                </div>
                <div v-else>
                  <VDatePicker v-model="selectedDate" mode="date" is-dark/>
                </div>
              </div>
            </div>
    </div>

            <!-- Quick Tips Section
             <div class="mt-12 grid gird-cols-1 md:grid-cols-3 gap-6">
              <div v-for="(tip,indexin quickTips" :key="index"
               class="bg-gradient-to-br shadow-lg rounded-2xl hover:shadow-xl transition-shadow duration-300 p-6" :class="tip.bgClass)">
               <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-bold":class="tip.titleClass">{{ tip.title }}</h3>
                <component :is="tip.icon" class="h-8 w-8" :class="tip.iconClass" />
               </div>
               <p :class="tip.textclass">{{ tip.content }}</p>
               <router-link v-if="tip.link":to="tip.link.to" class="inline-flex items-center px-4 py-2 mt-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-color duration-300">
                {{ tip.link.text }}
                <component :is="tip.link.icon" class="ml-2 h-4 w-4" />
               </router-link>
              </div>
             </div> -->


    <div class="bg-white text-gray-800">
      <!-- Hero Section -->
      <!-- <section class="relative-green text-center py-20 hover-pink">
        <div class="absolute inset-0">
          <img
            src="https://source.unsplash.com/1600x900/?health,wellness,pcos"
            alt="PCOS Health"
            class="object-cover w-full h-full opacity-30"
          />
        </div>
        <div class="container mx-auto center relative z-10">
          <h1 class="text-4xl md:text-5xl font-semibold mb-6"> Welcome PCOS </h1>
          <p class="text-lg md:text-xl mb-8">
           Reduce stress and Improve your health
          </p>
       
         
       
        </div> -->
      <!-- </section> -->
  
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
      <section class=" text-center">
        <NuxtLink to="../auth/signup">
          <button class="bg-gray-800 text-yellow-400 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition">
          Click Me
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
  