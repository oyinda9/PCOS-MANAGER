<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 to-purple-200 p-6 max-w-full">
    <h1 class="text-4xl font-bold text-pink-800 mb-10 text-center">
      Nutrition for PCOS Management
    </h1>

    <!-- Personal Assessment Section -->
    <section
      class="mb-12 bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
    >
      <h2 class="text-2xl font-semibold text-pink-700 mb-6 flex items-center">
        <UserIcon class="mr-2 w-6 h-6" />
        Personal Assessment
      </h2>
      <form @submit.prevent="submitAssessment" class="space-y-6">
        <div>
          <label
            for="feeling"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            How are you feeling today?
          </label>
          <textarea
            id="feeling"
            v-model="assessment.feeling"
            rows="3"
            class="w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:ring-pink-500 focus:border-pink-500"
            placeholder="Describe your current physical and emotional state"
          ></textarea>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              for="weight"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              v-model="assessment.weight"
              class="w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:ring-pink-500 focus:border-pink-500"
              placeholder="Enter your weight in kg"
            />
          </div>
          <div>
            <label
              for="height"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Height (cm)
            </label>
            <input
              type="number"
              id="height"
              v-model="assessment.height"
              class="w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your height in cm"
            />
          </div>
        </div>

        <div>
          <label
            for="waistCircumference"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Waist Circumference (cm)
          </label>
          <input
            type="number"
            id="waistCircumference"
            v-model="assessment.waistCircumference"
            class="w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:ring-purple-500 focus:border-purple-500"
            placeholder="Enter your waist circumference in cm"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Current Symptoms
          </label>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              v-for="symptom in symptomsList"
              :key="symptom.value"
              class="flex items-center"
            >
              <input
                type="checkbox"
                :id="symptom.value"
                :value="symptom.value"
                v-model="assessment.symptoms"
                class="h-4 w-4 text-pink-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <label
                :for="symptom.value"
                class="ml-2 block text-sm text-gray-700"
              >
                {{ symptom.label }}
              </label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          class="w-full bg-pink-600 text-white text-lg font-semibold py-3 rounded-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 focus:outline-none"
        >
          Get Personalized Recommendations
        </button>
      </form>
    </section>

    <!-- Personalized Recommendations Section -->
    <section
      v-if="personalizedRecommendations"
      class="mb-12 bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
    >
      <h2 class="text-2xl font-semibold text-pink-700 mb-6 flex items-center">
        <ClipboardListIcon class="mr-2 w-6 h-6" />
        Your Personalized Recommendations
      </h2>
      <div class="space-y-6">
        <div
          v-for="(recommendation, index) in personalizedRecommendations"
          :key="index"
          class="bg-purple-50 border-l-4 border-pink-600 rounded-lg p-6"
        >
          <h3 class="text-lg font-semibold text-pink-700 mb-2">
            {{ recommendation.title }}
          </h3>
          <p class="text-gray-700">{{ recommendation.description }}</p>
        </div>
      </div>
    </section>

    <!-- Personalized Healthy Videos Section -->
    <section
      v-if="personalizedVideos.length > 0"
      class="mb-12 bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
    >
      <h2 class="text-2xl font-semibold text-pink-700 mb-6 flex items-center">
        <VideoIcon class="mr-2 w-6 h-6" />
        Healthy Lifestyle Videos
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(video, index) in personalizedVideos"
          :key="index"
          class="bg-purple-50 border-l-4 border-pink-600 rounded-lg p-6"
        >
          <h3 class="text-lg font-semibold text-pink-700 mb-2">
            {{ video.title }}
          </h3>
          <p class="text-gray-700 mb-4">{{ video.description }}</p>
          <a
            :href="video.link"
            target="_blank"
            class="text-pink-600 font-semibold hover:underline"
          >
            Watch Video
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  UtensilsCrossedIcon,
  SaladIcon,
  CalendarDaysIcon,
  LightbulbIcon,
  VideoIcon,
  UserIcon,
  ClipboardListIcon,
} from "lucide-vue-next";

const symptomsList = [
  { value: "irregular_periods", label: "Irregular Periods" },
  { value: "acne", label: "Acne" },
  { value: "hair_loss", label: "Hair Loss" },
  { value: "weight_gain", label: "Weight Gain" },
  { value: "fatigue", label: "Fatigue" },
  { value: "mood_swings", label: "Mood Swings" },
  { value: "cravings", label: "Food Cravings" },
];

// Assessment form data
const assessment = ref({
  feeling: "",
  weight: null,
  height: null,
  waistCircumference: null,
  symptoms: [], // Store selected symptoms here
});

// Data for personalized recommendations and videos
const personalizedRecommendations = ref(null);
const personalizedVideos = ref([
  {
    title: "PCOS-Friendly Meals",
    description:
      "Learn how to prepare balanced meals that help manage PCOS symptoms.",
    link: "https://www.example.com/video1",
  },
  {
    title: "Stress-Relief Yoga",
    description:
      "Follow along with this beginner-friendly yoga session for stress management.",
    link: "https://www.example.com/video2",
  },
  {
    title: "Exercise for PCOS",
    description:
      "Discover workout routines that are effective for managing PCOS.",
    link: "https://www.example.com/video3",
  },
]);

// Generate recommendations based on symptoms
const generateSymptomRecommendations = (symptoms) => {
  const recommendations = [];

  // Loop through selected symptoms and generate recommendations
  if (symptoms.includes("irregular_periods")) {
    recommendations.push(
      "Consider tracking your menstrual cycle and discussing hormonal balance with your healthcare provider."
    );
  }
  if (symptoms.includes("acne")) {
    recommendations.push(
      "Incorporate foods rich in zinc and omega-3 fatty acids to support skin health."
    );
  }
  if (symptoms.includes("hair_loss")) {
    recommendations.push(
      "Ensure adequate protein intake and consider supplements like biotin after consulting with your doctor."
    );
  }
  if (symptoms.includes("weight_gain")) {
    recommendations.push(
      "Focus on portion control and include more fiber-rich foods in your diet to promote satiety."
    );
  }
  if (symptoms.includes("fatigue")) {
    recommendations.push(
      "Prioritize sleep hygiene and consider incorporating iron-rich foods into your diet."
    );
  }
  if (symptoms.includes("mood_swings")) {
    recommendations.push(
      "Include foods rich in B-vitamins and consider mindfulness practices to support emotional well-being."
    );
  }
  if (symptoms.includes("cravings")) {
    recommendations.push(
      "Plan regular, balanced meals and keep healthy snacks on hand to manage cravings."
    );
  }

  return recommendations; // Return as an array of recommendations
};

// Add videos dynamically based on symptoms
const addVideosBasedOnSymptoms = () => {
  // Check symptoms and add corresponding videos
  if (assessment.value.symptoms.includes("fatigue")) {
    personalizedVideos.value.push({
      title: "Energy Boosting Foods",
      description:
        "Explore foods that combat fatigue and improve energy levels.",
      link: "https://www.example.com/video4",
    });
  }
  if (assessment.value.symptoms.includes("mood_swings")) {
    personalizedVideos.value.push({
      title: "Mindfulness Techniques",
      description:
        "Watch this video to learn effective mindfulness techniques.",
      link: "https://www.example.com/video5",
    });
  }
};

// Submit assessment and generate recommendations
const submitAssessment = () => {
  const bmi = assessment.value.weight / (assessment.value.height / 100) ** 2;

  // Generate personalized recommendations based on symptoms
  personalizedRecommendations.value = [
    {
      title: "Balanced Diet",
      description: `Based on your BMI of ${bmi.toFixed(
        1
      )}, focus on a balanced diet with plenty of vegetables, lean proteins, and whole grains. ${
        bmi > 25
          ? "Consider reducing your calorie intake slightly to support healthy weight loss."
          : "Maintain your current calorie intake to support your healthy weight."
      }`,
    },
    {
      title: "Symptom Management",
      description: generateSymptomRecommendations(
        assessment.value.symptoms
      ).join(" "), // Join recommendations into a single string
    },
    {
      title: "Stress Management",
      description:
        "Your current feelings indicate that stress management should be a priority. Consider incorporating relaxation techniques such as deep breathing, meditation, or yoga into your daily routine.",
    },
    {
      title: "Physical Activity",
      description: `Regular exercise is crucial for managing PCOS. Aim for at least 150 minutes of moderate-intensity exercise per week. ${
        assessment.value.waistCircumference > 88
          ? "Focus on exercises that target your core to help reduce your waist circumference."
          : "Keep up your current exercise routine to maintain your healthy waist circumference."
      }`,
    },
  ];

  // Add videos based on symptoms
  addVideosBasedOnSymptoms();
};

// Set page metadata
definePageMeta({
  layout: "dashboard-properties",
});
</script>

<style scoped></style>
