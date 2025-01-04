<template>
  <div class="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
    <div class="mx-auto">
      <!-- Header Section -->
      <header class="text-center mb-8">
        <h1 class="text-4xl font-extrabold text-pink-800">Weight Tracker</h1>
        <p class="text-lg text-[#9B59B6] mt-2">
          Track your progress, stay motivated, and achieve your health goals!
        </p>
      </header>

      <!-- Progress Summary Section -->
      <div class="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 class="text-2xl font-semibold text-pink-800 mb-4">Your Progress</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div class="bg-purple-50 p-4 rounded-lg shadow-md">
            <p class="text-sm text-purple-600">Current Weight</p>
            <p class="text-3xl font-bold text-purple-800">
              {{ currentWeight }} kg
            </p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg shadow-md">
            <p class="text-sm text-purple-600">Starting Weight</p>
            <p class="text-3xl font-bold text-purple-800">
              {{ startingWeight }} kg
            </p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg shadow-md">
            <p class="text-sm text-purple-600">Weight Difference</p>
            <p
              class="text-3xl font-bold"
              :class="weightDifference > 0 ? 'text-green-600' : 'text-red-600'"
            >
              {{ weightDifference > 0 ? "+" : "" }}{{ weightDifference }} kg
            </p>
          </div>
        </div>

        <!-- Motivational Message -->
        <div
          v-if="weightMessage"
          class="mt-4 text-center text-lg text-purple-800 font-semibold"
        >
          <p>{{ weightMessage }}</p>
        </div>
      </div>

      <!-- Mood and Energy Tracker Section -->
      <div class="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 class="text-2xl font-semibold text-pink-800 mb-4">
          Track Your Mood & Energy
        </h2>
        <div class="space-y-4">
          <h2 class="text-sm font-semibold text-pink-800 mb-4">
            How are you feeling today?
          </h2>
          <div class="flex justify-center gap-4 text-3xl cursor-pointer">
            <span
              @click="setMood('😊')"
              :class="
                mood === '😊'
                  ? 'text-purple-700 scale-125  bg-pink-200 rounded-md px-2 py-2 '
                  : 'text-gray-400 hover:text-purple-500'
              "
              >😊</span
            >
            <span
              @click="setMood('😎')"
              :class="
                mood === '😎'
                  ? 'text-purple-700 scale-125  bg-pink-200 rounded-md px-2 py-2'
                  : 'text-gray-400 hover:text-purple-500'
              "
              >😎</span
            >
            <span
              @click="setMood('😴')"
              :class="
                mood === '😴'
                  ? 'text-purple-700 scale-125  bg-pink-400 rounded-md px-2 py-2'
                  : 'text-gray-400 hover:text-purple-500'
              "
              >😴</span
            >
            <span
              @click="setMood('💪')"
              :class="
                mood === '💪'
                  ? 'text-purple-700 scale-125  bg-pink-200 rounded-md px-2 py-2'
                  : 'text-gray-400 hover:text-purple-500'
              "
              >💪</span
            >
            <span
              @click="setMood('😞')"
              :class="
                mood === '😞'
                  ? 'text-purple-700 scale-125  bg-pink-200 rounded-md px-2 py-2'
                  : 'text-gray-400 hover:text-purple-500'
              "
              >😞</span
            >
          </div>

          <!-- Energy Level Section -->
          <div>
            <p class="text-sm text-pink-800">
              How energized do you feel today?
            </p>
            <input
              type="range"
              v-model="energyLevel"
              min="1"
              max="10"
              step="1"
              class="w-full h-2 bg-purple-200 rounded-full"
            />
            <p class="text-center text-lg text-purple-700">
              {{ energyLevel }} / 10
            </p>
          </div>
        </div>

           <!-- Weight Log Section -->
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold text-pink-800 mb-4">
          Log Your Weight
        </h2>
        <form @submit.prevent="addWeightEntry" class="space-y-4 mb-6">
          <div>
            <label for="weight" class="block text-sm font-medium text-gray-700"
              >Weight (kg)</label
            >
            <input
              type="number"
              id="weight"
              v-model="newWeight"
              step="0.1"
              min="0"
              required
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label for="date" class="block text-sm font-medium text-gray-700"
              >Date</label
            >
            <input
              type="date"
              id="date"
              v-model="newDate"
              required
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Add Entry
          </button>
        </form>
      </div>
      </div>

   
  

      <!-- Daily Fun Facts Section -->
      <div class="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 class="text-2xl font-semibold text-pink-800 mb-4">
          Fun Health Fact
        </h2>
        <p class="text-lg text-purple-800">{{ funFact }}</p>
      </div>

      <!-- Daily Challenge Section -->
      <div class="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 class="text-2xl font-semibold text-pink-700 mb-4">
          Challenge of the Day
        </h2>
        <p class="text-lg text-purple-800">{{ dailyChallenge }}</p>
      </div>

      <!-- Log Table Section -->
      <div v-if="weightEntries.length > 0" class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Weight (kg)
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="entry in sortedWeightEntries" :key="entry.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ formatDate(entry.date) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ entry.weight }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  @click="deleteEntry(entry.id)"
                  class="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Mood Recommendation Popup -->
    <div
      v-if="isPopupVisible"
      class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
    >
      <div
        class="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center"
      >
        <p class="text-lg font-semibold text-purple-800">
          {{ moodRecommendation }}
        </p>
        <button
          @click="closePopup"
          class="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
</div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

// State
const newWeight = ref("");
const newDate = ref("");
const weightEntries = ref([]);
const mood = ref("");
const energyLevel = ref(5); // Default energy level 5
let funFact = ref("");
let dailyChallenge = ref("");
const moodRecommendation = ref("");
const isPopupVisible = ref(false); // State to control popup visibility

// Computed
const sortedWeightEntries = computed(() => {
  return [...weightEntries.value].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
});

const currentWeight = computed(() => weightEntries.value[0]?.weight || 0);
const startingWeight = computed(
  () => weightEntries.value[weightEntries.value.length - 1]?.weight || 0
);
const weightDifference = computed(
  () => currentWeight.value - startingWeight.value
);

// Fetch the fun facts and select a random one
const fetchFunFacts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/funFact");
    console.log("fun facts", response.data);
    const facts = response.data;
    if (facts.length > 0) {
      // Select a random fact
      funFact.value = facts[Math.floor(Math.random() * facts.length)];
    }
  } catch (error) {
    console.error("Error fetching fun facts:", error);
  }
};

// Fetch the fun facts and select a random one
const fetchChallenges = async () => {
  try {
    const response = await axios.get("http://localhost:5000/challenges");
    console.log("challenges", response.data);
    const challenges = response.data;
    if (challenges.length > 0) {
      // Select a random fact
      dailyChallenge.value =
        challenges[Math.floor(Math.random() * challenges.length)];
    }
  } catch (error) {
    console.error("Error fetching fun facts:", error);
  }
};
const addWeightEntry = async () => {
  if (!newWeight.value || !newDate.value) return;

  const entry = {
    id: Date.now(),
    weight: parseFloat(newWeight.value),
    date: new Date(newDate.value).toISOString(),
    mood: mood.value || "Not specified", // Default mood if not set
    energyLevel: energyLevel.value,
    funFact: funFact.value, // Include the randomized fun fact
    dailyChallenge: dailyChallenge.value,
    moodRecommendation: moodRecommendation.value || "No recommendation",
  };

  try {
    // Get the API URL from the environment variable or fallback to localhost
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

    // Send the entry to the JSON server
    await axios.post(`${apiUrl}/weight_tracker`, entry);

    // Update local entries
    weightEntries.value.push(entry);
    newWeight.value = "";
    newDate.value = "";
    mood.value = "";
    showPopup(); // Show popup after adding an entry
  } catch (error) {
    console.error("Error logging weight:", error);
  }
};

// Method to delete an entry
const deleteEntry = (id) => {
  weightEntries.value = weightEntries.value.filter((entry) => entry.id !== id);
};

// Format date to "en-GB"
const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-GB").format(new Date(date));
};

// Method to set mood and give a recommendation
const setMood = (selectedMood) => {
  mood.value = selectedMood;
  // Set the mood recommendation based on the selected mood
  switch (selectedMood) {
    case "😊":
      moodRecommendation.value =
        "You're feeling happy! Keep up the great work!";
      break;
    case "😎":
      moodRecommendation.value =
        "You're feeling confident! Keep that energy up!";
      break;
    case "😴":
      moodRecommendation.value =
        "Feeling a bit tired? A good rest is key to staying on track!";
      break;
    case "💪":
      moodRecommendation.value =
        "You're feeling strong! Push through and keep going!";
      break;
    case "😞":
      moodRecommendation.value =
        "Feeling down? Remember, setbacks are just setups for comebacks!";
      break;
    default:
      moodRecommendation.value = "";
  }
};

// Method to show popup after entry
const showPopup = () => {
  isPopupVisible.value = true;
  setTimeout(() => {
    closePopup(); // Close the popup after 3 seconds
  }, 3000);
};

// Method to close popup
const closePopup = () => {
  isPopupVisible.value = false;
};

// Call fetchFunFacts when the component is mounted
onMounted(() => {
  fetchFunFacts();
  fetchChallenges();
});
definePageMeta({
  layout: "dashboard-properties",
});
</script>
