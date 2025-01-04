<template>
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto w-full px-4">
        <div class="bg-white shadow-lg sm:rounded-3xl sm:p-20 p-6">
          <h1 class="text-3xl font-bold text-center mb-8 text-purple-700">Period Calendar</h1>
          
          <div class="flex justify-between items-center mb-4">
            <button @click="previousMonth" class="text-purple-600 hover:text-purple-800">
              <ChevronLeftIcon class="h-6 w-6" />
            </button>
            <h2 class="text-xl font-semibold text-purple-700">{{ monthNames[currentMonth] }} {{ currentYear }}</h2>
            <button @click="nextMonth" class="text-purple-600 hover:text-purple-800">
              <ChevronRightIcon class="h-6 w-6" />
            </button>
          </div>
  
          <div class="grid grid-cols-7 gap-1 mb-4">
            <div v-for="day in weekDays" :key="day" class="text-center font-semibold text-gray-600">
              {{ day }}
            </div>
          </div>
  
          <div class="grid grid-cols-7 gap-1">
            <div
              v-for="(date, index) in daysInMonth"
              :key="index"
              :class="[
                'h-12 flex items-center justify-center rounded-full cursor-pointer transition-colors',
                getDayClass(date)
              ]"
              @click="selectDate(date)"
            >
              {{ date }}
            </div>
          </div>
  
          <div v-if="selectedDate" class="mt-6 text-center text-gray-700">
            <p>Selected Date: {{ selectedDate }}</p>
          </div>
  
          <div class="mt-6 space-y-2">
            <div class="flex items-center">
              <div class="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
              <span class="text-sm text-gray-600">Period</span>
            </div>
            <div class="flex items-center">
              <div class="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
              <span class="text-sm text-gray-600">Fertile Window</span>
            </div>
            <div class="flex items-center">
              <div class="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
              <span class="text-sm text-gray-600">Ovulation Day</span>
            </div>
          </div>
  
          <div class="mt-6">
            <h2 class="text-xl font-semibold text-purple-700 mb-2">Predictions</h2>
            <p class="text-gray-600">Next period start: <span class="font-semibold">{{ nextPeriodStart }}</span></p>
            <p class="text-gray-600">Ovulation day: <span class="font-semibold">{{ ovulationDay }}</span></p>
          </div>
  
          <div v-if="serverMessage" class="mt-4 p-2 bg-blue-100 text-blue-700 rounded">
            {{ serverMessage }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, watch } from 'vue';
  import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next';
  import axios from 'axios';
  
  const currentMonth = ref(new Date().getMonth());
  const currentYear = ref(new Date().getFullYear());
  const selectedDate = ref(null);
  const periods = ref([]);
  const serverMessage = ref('');
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  onMounted(() => {
    const savedPeriods = localStorage.getItem('periods');
    if (savedPeriods) {
      periods.value = JSON.parse(savedPeriods).map(p => new Date(p));
      sendDataToServer();
    }
  });
  
  const daysInMonth = computed(() => {
    const firstDay = new Date(currentYear.value, currentMonth.value, 1);
    const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0);
    const totalDays = lastDay.getDate();
    
    const firstDayOfWeek = firstDay.getDay();
  
    const daysArray = Array(firstDayOfWeek).fill(null).concat(
      Array.from({ length: totalDays }, (_, i) => i + 1)
    );
  
    return daysArray;
  });
  
  const previousMonth = () => {
    if (currentMonth.value === 0) {
      currentMonth.value = 11;
      currentYear.value -= 1;
    } else {
      currentMonth.value -= 1;
    }
  };
  
  const nextMonth = () => {
    if (currentMonth.value === 11) {
      currentMonth.value = 0;
      currentYear.value += 1;
    } else {
      currentMonth.value += 1;
    }
  };
  
  const selectDate = (date) => {
    if (date) {
      const selectedDate = new Date(currentYear.value, currentMonth.value, date);
      selectedDate.value = `${monthNames[currentMonth.value]} ${date}, ${currentYear.value}`;
      togglePeriod(selectedDate);
    }
  };
  
  const togglePeriod = (date) => {
    const existingPeriodIndex = periods.value.findIndex(p => 
      p.getFullYear() === date.getFullYear() &&
      p.getMonth() === date.getMonth() &&
      p.getDate() === date.getDate()
    );
  
    if (existingPeriodIndex > -1) {
      periods.value.splice(existingPeriodIndex, 1);
    } else {
      periods.value.push(date);
    }
  
    localStorage.setItem('periods', JSON.stringify(periods.value));
    sendDataToServer();
  };
  
  const isPeriodDay = (date) => {
    return periods.value.some(p => 
      p.getFullYear() === currentYear.value &&
      p.getMonth() === currentMonth.value &&
      p.getDate() === date
    );
  };
  
  const isFertileDay = (date) => {
    const lastPeriod = periods.value[periods.value.length - 1];
    if (!lastPeriod) return false;
    
    const currentDate = new Date(currentYear.value, currentMonth.value, date);
    const daysSinceLastPeriod = Math.floor((currentDate.getTime() - lastPeriod.getTime()) / (1000 * 60 * 60 * 24));
    return daysSinceLastPeriod >= 6 && daysSinceLastPeriod <= 13;
  };
  
  const isOvulationDay = (date) => {
    const lastPeriod = periods.value[periods.value.length - 1];
    if (!lastPeriod) return false;
    
    const currentDate = new Date(currentYear.value, currentMonth.value, date);
    const daysSinceLastPeriod = Math.floor((currentDate.getTime() - lastPeriod.getTime()) / (1000 * 60 * 60 * 24));
    return daysSinceLastPeriod === 14;
  };
  
  const getDayClass = (date) => {
    if (!date) return 'bg-gray-100';
    
    if (isPeriodDay(date)) return 'bg-red-500 text-white hover:bg-red-600';
    if (isOvulationDay(date)) return 'bg-yellow-500 text-white hover:bg-yellow-600';
    if (isFertileDay(date)) return 'bg-green-500 text-white hover:bg-green-600';
    return 'bg-white hover:bg-gray-100';
  };
  
  const nextPeriodStart = computed(() => {
    if (periods.value.length === 0) return 'Not enough data';
    const lastPeriod = periods.value[periods.value.length - 1];
    const nextPeriod = new Date(lastPeriod);
    nextPeriod.setDate(nextPeriod.getDate() + 28);
    return nextPeriod.toDateString();
  });
  
  const ovulationDay = computed(() => {
    if (periods.value.length === 0) return 'Not enough data';
    const lastPeriod = periods.value[periods.value.length - 1];
    const ovulation = new Date(lastPeriod);
    ovulation.setDate(ovulation.getDate() + 14);
    return ovulation.toDateString();
  });
  
  const sendDataToServer = async () => {
  try {
    // Get the API URL from the environment variable or fallback to localhost
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

    // Send the POST request to the API
    const response = await axios.post(`${apiUrl}/period_logs`, {
      periodLogs: periods.value,
      nextPeriod: nextPeriodStart.value,
      ovulation: ovulationDay.value,
    });

    // Set the server response message
    serverMessage.value = response.data.message;
  } catch (error) {
    // Handle error
    console.error("Error sending data to server:", error);
    serverMessage.value = "Error sending data to server";
  }
};

  
  // Watch for changes in periods and send data to server
  watch(periods, sendDataToServer);
  definePageMeta({
  layout: "dashboard-properties",
});
  </script>