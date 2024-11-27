<template>
  <div class="container mx-auto p-4">
    <!-- Title -->
    <h1 class="text-4xl font-bold text-center text-gray-800 mb-8">Client Dashboard</h1>

    <!-- Dashboard Sections -->
    <section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <!-- Submit Quote Request Section -->
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">Submit a Quote Request</h2>
        <form @submit.prevent="submitQuoteRequest">
          <div class="mb-4">
            <label for="address" class="block text-sm font-medium text-gray-600">Property Address</label>
            <input v-model="quoteRequest.address" type="text" id="address" class="w-full p-2 border rounded" placeholder="Enter address" required />
          </div>
          <div class="mb-4">
            <label for="size" class="block text-sm font-medium text-gray-600">Property Size (sq ft)</label>
            <input v-model="quoteRequest.size" type="number" id="size" class="w-full p-2 border rounded" placeholder="Enter size" required />
          </div>
          <div class="mb-4">
            <label for="photos" class="block text-sm font-medium text-gray-600">Upload Photos</label>
            <input type="file" @change="handleFileUpload" class="w-full p-2 border rounded" />
          </div>
          <div class="text-right">
            <button type="submit" class="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition">
              Submit Request
            </button>
          </div>
        </form>
      </div>

      <!-- View & Respond to Quotes Section -->
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">View & Respond to Quotes</h2>
        <div v-if="quotes.length > 0">
          <ul>
            <li v-for="quote in quotes" :key="quote.id" class="border-b py-4">
              <div class="flex justify-between items-center">
                <div class="font-medium text-lg">{{ quote.contractorName }}</div>
                <span class="text-sm text-gray-500">${{ quote.amount }}</span>
              </div>
              <div class="flex justify-between mt-2">
                <button @click="acceptQuote(quote)" class="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600 transition">
                  Accept
                </button>
                <button @click="rejectQuote(quote)" class="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 transition">
                  Reject
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div v-else>
          <p class="text-gray-500">No quotes received yet.</p>
        </div>
      </div>

      <!-- View & Track Work Orders Section -->
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">View & Track Work Orders</h2>
        <div v-if="workOrders.length > 0">
          <ul>
            <li v-for="order in workOrders" :key="order.id" class="border-b py-4">
              <div class="flex justify-between items-center">
                <div class="font-medium text-lg">{{ order.orderId }}</div>
                <span class="text-sm text-gray-500">{{ order.status }}</span>
              </div>
              <div class="flex justify-between mt-2">
                <button @click="viewOrderDetails(order)" class="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition">
                  View Details
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div v-else>
          <p class="text-gray-500">No work orders available.</p>
        </div>
      </div>
    </section>

    <!-- View & Pay Bills Section -->
    <div class="mt-12 bg-white shadow-lg rounded-lg p-6">
      <h2 class="text-2xl font-semibold text-gray-700 mb-4">Bills & Payments</h2>
      <div v-if="bills.length > 0">
        <ul>
          <li v-for="bill in bills" :key="bill.id" class="border-b py-4">
            <div class="flex justify-between items-center">
              <div class="font-medium text-lg">Bill #{{ bill.id }}</div>
              <span class="text-sm text-gray-500">${{ bill.amount }}</span>
            </div>
            <div class="flex justify-between mt-2">
              <button @click="payBill(bill)" class="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600 transition">
                Pay Now
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div v-else>
        <p class="text-gray-500">No bills available.</p>
      </div>
    </div>
  </div>
</template>

<script>
 definePageMeta({
  layout:'dashboard-properties'
})
export default {
  data() {
    return {
      quoteRequest: {
        address: '',
        size: '',
        photos: null,
      },
      quotes: [
        { id: 1, contractorName: 'David Smith', amount: 1500 },
        { id: 2, contractorName: 'John Doe', amount: 1200 },
      ],
      workOrders: [
        { id: 1, orderId: 'WO123', status: 'In Progress' },
        { id: 2, orderId: 'WO124', status: 'Completed' },
      ],
      bills: [
        { id: 1, amount: 500 },
        { id: 2, amount: 300 },
      ]
    };
  },
  methods: {
    submitQuoteRequest() {
      // Submit the quote request (you can integrate API call here)
      console.log('Quote Request Submitted:', this.quoteRequest);
    },
    handleFileUpload(event) {
      this.quoteRequest.photos = event.target.files[0];
    },
    acceptQuote(quote) {
      console.log('Accepted Quote:', quote);
    },
    rejectQuote(quote) {
      console.log('Rejected Quote:', quote);
    },
    viewOrderDetails(order) {
      console.log('Viewing details for work order:', order);
    },
    payBill(bill) {
      console.log('Paying bill #', bill.id);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>







