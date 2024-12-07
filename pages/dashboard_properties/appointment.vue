<template>
  <div class="min-h-screen p-6">
    <h1 class="text-4xl font-bold text-pink-600 mb-8 text-center">
      Appointment Bookings
    </h1>

    <!-- Decorative elements -->
    <div
      class="absolute top-0 left-0 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
    ></div>
    <div
      class="absolute top-0 right-0 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
    ></div>

    <!-- Available Time Slots Section -->
    <section
      class="mb-12 bg-white bg-opacity-80 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 relative overflow-hidden"
    >
      <div
        class="absolute top-0 right-0 w-16 h-16 bg-pink-200 rounded-bl-full"
      ></div>
      <h2 class="text-2xl font-semibold text-pink-600 mb-4 flex items-center">
        <CalendarIcon class="mr-2 text-pink-500" />
        Available Time Slots
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
        <div
          v-for="slot in availableSlots"
          :key="slot.id"
          class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <p class="text-lg font-semibold text-pink-600">
            {{ formatDate(slot.date) }}
          </p>
          <p class="text-gray-700">{{ slot.time }}</p>
          <p class="text-purple-600">{{ slot.doctor }}</p>
          <button
            @click="bookAppointment(slot)"
            class="mt-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-md hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors duration-300"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </section>

    <!-- My Appointments Section -->
    <section
      class="mb-12 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 relative overflow-hidden"
    >
      <div
        class="absolute top-0 left-0 w-16 h-16 bg-purple-200 rounded-br-full"
      ></div>
      <h2 class="text-2xl font-semibold text-purple-600 mb-4 flex items-center">
        <ClipboardListIcon class="mr-2 text-purple-500" />
        My Appointments
      </h2>
      <div v-if="myAppointments.length > 0" class="space-y-4">
        <div
          v-for="appointment in myAppointments"
          :key="appointment.id"
          class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 flex justify-between items-center shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div>
            <p class="text-lg font-semibold text-purple-600">
              {{ formatDate(appointment.date) }}
            </p>
            <p class="text-gray-700">{{ appointment.time }}</p>
            <p class="text-pink-600">{{ appointment.doctor }}</p>
          </div>
          <button
            @click="cancelAppointment(appointment.id)"
            class="bg-gradient-to-r from-red-400 to-pink-500 text-white px-4 py-2 rounded-md hover:from-red-500 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
      <p v-else class="text-gray-600 text-center">
        You have no upcoming appointments.
      </p>
    </section>

    <!-- Appointment Booking Modal -->
    <div
      v-if="showBookingModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div
        class="bg-white rounded-lg p-6 w-full max-w-md relative overflow-hidden"
      >
        <div
          class="absolute top-0 right-0 w-16 h-16 bg-pink-200 rounded-bl-full"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-16 h-16 bg-purple-200 rounded-tr-full"
        ></div>
        <h3 class="text-xl font-semibold text-pink-600 mb-4">
          Confirm Appointment
        </h3>
        <p class="text-gray-700 mb-2">
          Date: {{ formatDate(selectedSlot.date) }}
        </p>
        <p class="text-gray-700 mb-2">Time: {{ selectedSlot.time }}</p>
        <p class="text-gray-700 mb-4">Doctor: {{ selectedSlot.doctor }}</p>
        <div class="flex justify-end space-x-4">
          <button
            @click="showBookingModal = false"
            class="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-300"
          >
            Cancel
          </button>
          <button
            @click="confirmBooking"
            class="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-md hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors duration-300"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { CalendarIcon, ClipboardListIcon } from "lucide-vue-next";

const availableSlots = ref([
  { id: 1, date: "2023-05-15", time: "09:00 AM", doctor: "Dr. Smith" },
  { id: 2, date: "2023-05-15", time: "11:00 AM", doctor: "Dr. Johnson" },
  { id: 3, date: "2023-05-16", time: "10:00 AM", doctor: "Dr. Williams" },
  { id: 4, date: "2023-05-16", time: "02:00 PM", doctor: "Dr. Brown" },
  { id: 5, date: "2023-05-17", time: "03:00 PM", doctor: "Dr. Davis" },
]);

const myAppointments = ref([]);

const showBookingModal = ref(false);
const selectedSlot = ref(null);

const formatDate = (dateString) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const bookAppointment = (slot) => {
  selectedSlot.value = slot;
  showBookingModal.value = true;
};

const confirmBooking = () => {
  myAppointments.value.push(selectedSlot.value);
  availableSlots.value = availableSlots.value.filter(
    (slot) => slot.id !== selectedSlot.value.id
  );
  showBookingModal.value = false;
  selectedSlot.value = null;
};

const cancelAppointment = (appointmentId) => {
  const canceledAppointment = myAppointments.value.find(
    (appointment) => appointment.id === appointmentId
  );
  myAppointments.value = myAppointments.value.filter(
    (appointment) => appointment.id !== appointmentId
  );
  availableSlots.value.push(canceledAppointment);
  availableSlots.value.sort((a, b) => new Date(a.date) - new Date(b.date));
};

definePageMeta({
  layout: "dashboard-properties",
});
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
