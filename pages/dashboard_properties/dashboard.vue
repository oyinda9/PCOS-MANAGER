<template>
  <div class="min-h-screen ">
    <header class="bg-white shadow w-[100%] rounded-md">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8" v-if="user">
        <h1 class="text-3xl font-bold text-gray-900">
          Welcome {{ user.name }}
        </h1>
      </div>
    </header>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <!-- Period Tracking Widget -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0 bg-pink-500 rounded-md p-3">
                  <CalendarIcon class="h-6 w-6 text-white" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">
                      Next Period
                    </dt>
                    <dd class="flex items-baseline">
                      <div class="text-2xl font-semibold text-gray-900">
                        {{ nextPeriodDate }}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-5 py-3">
              <div class="text-sm">
                <a
                  href="#"
                  class="font-medium text-pink-700 hover:text-pink-900"
                  >View cycle details</a
                >
              </div>
            </div>
          </div>

          <!-- Stress Management Widget -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <BrainIcon class="h-6 w-6 text-white" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">
                      Stress Level
                    </dt>
                    <dd class="flex items-baseline">
                      <div class="text-2xl font-semibold text-gray-900">
                        {{ stressLevel }}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-5 py-3">
              <div class="text-sm">
                <a
                  href="#"
                  class="font-medium text-blue-700 hover:text-blue-900"
                  >Manage stress</a
                >
              </div>
            </div>
          </div>

          <!-- Nutrition Tracking Widget -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <UtensilsIcon class="h-6 w-6 text-white" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">
                      Calories Today
                    </dt>
                    <dd class="flex items-baseline">
                      <div class="text-2xl font-semibold text-gray-900">
                        {{ caloriesConsumed }} / {{ caloriesGoal }}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-5 py-3">
              <div class="text-sm">
                <a
                  href="#"
                  class="font-medium text-green-700 hover:text-green-900"
                  >Log meal</a
                >
              </div>
            </div>
          </div>

          <!-- Appointment Management Widget -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0 bg-purple-500 rounded-md p-3">
                  <CalendarCheckIcon class="h-6 w-6 text-white" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">
                      Next Appointment
                    </dt>
                    <dd class="flex items-baseline">
                      <div class="text-2xl font-semibold text-gray-900">
                        {{ nextAppointmentDate }}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-5 py-3">
              <div class="text-sm">
                <a
                  href="#"
                  class="font-medium text-purple-700 hover:text-purple-900"
                  >Schedule appointment</a
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Period Cycle Graph -->
        <div class="mt-8 bg-white shadow rounded-lg p-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
            Period Cycle Overview
          </h3>
          <StressChart class="w-full h-64" />
          <!-- <div v-if="chartData && chartData.labels" class="h-64">
            <LineChart :chart-data="chartData" :options="chartOptions" />
          </div> -->
        </div>

        <!-- Symptom Tracker -->
        <div class="mt-8 bg-white shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Symptom Tracker
            </h3>
            <div class="mt-5">
              <div class="flex flex-wrap gap-4">
                <button
                  v-for="symptom in symptoms"
                  :key="symptom.id"
                  @click="toggleSymptom(symptom.id)"
                  :class="[
                    'px-4 py-2 rounded-full text-sm font-medium',
                    symptom.active
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200',
                  ]"
                >
                  {{ symptom.name }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Activity Log -->
        <div class="mt-8 bg-white shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Recent Activity
            </h3>
            <div class="mt-5 flow-root">
              <ul class="-my-5 divide-y divide-gray-200">
                <li
                  v-for="activity in recentActivities"
                  :key="activity.id"
                  class="py-4"
                >
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <component
                        :is="activity.icon"
                        class="h-6 w-6 text-gray-400"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate">
                        {{ activity.title }}
                      </p>
                      <p class="text-sm text-gray-500 truncate">
                        {{ activity.time }}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const user = ref(null);

definePageMeta({
  layout: "dashboard-properties",
});
import { ref, onMounted } from "vue";
import { Line as LineChart } from "vue-chartjs";
import StressChart from "~/components/stressChart.vue";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  BellIcon,
  UserIcon,
  CalendarIcon,
  BrainIcon,
  UtensilsIcon,
  CalendarCheckIcon,
  ClipboardListIcon,
  HeartPulseIcon,
  MoonIcon,
} from "lucide-vue-next";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Mock data (in a real app, this would come from API calls or state management)
const nextPeriodDate = ref("May 15");
const stressLevel = ref("Moderate");
const caloriesConsumed = ref(1200);
const caloriesGoal = ref(2000);
const nextAppointmentDate = ref("June 3");

const symptoms = ref([
  { id: 1, name: "Acne", active: false },
  { id: 2, name: "Fatigue", active: false },
  { id: 3, name: "Mood Swings", active: false },
  { id: 4, name: "Cramps", active: false },
  { id: 5, name: "Bloating", active: false },
  { id: 6, name: "Headache", active: false },
]);

const recentActivities = ref([
  {
    id: 1,
    title: "Logged period start",
    time: "2 hours ago",
    icon: CalendarIcon,
  },
  {
    id: 2,
    title: "Completed stress management exercise",
    time: "4 hours ago",
    icon: BrainIcon,
  },
  {
    id: 3,
    title: "Logged lunch",
    time: "Yesterday at 1:23 PM",
    icon: UtensilsIcon,
  },
  {
    id: 4,
    title: "Scheduled doctor appointment",
    time: "2 days ago",
    icon: CalendarCheckIcon,
  },
  {
    id: 5,
    title: "Updated symptom log",
    time: "3 days ago",
    icon: ClipboardListIcon,
  },
]);

const toggleSymptom = (id) => {
  const symptom = symptoms.value.find((s) => s.id === id);
  if (symptom) {
    symptom.active = !symptom.active;
  }
};
const fetchUserProfile = () => {
  const storedUser = localStorage.getItem("loggedInUser");
  if (storedUser) {
    user.value = JSON.parse(storedUser);
  } else {
    // Redirect unauthorized users to login page
    window.location.href = "../auth/login";
  }
};

onMounted(() => {
  fetchUserProfile();
  // Any initialization code can go here
});
</script>
