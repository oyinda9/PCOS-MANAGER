
<template>
    <div class="container mx-auto p-4">
      <!-- Title -->
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-8">Contractor Dashboard</h1>
  
      <!-- Dashboard Sections -->
      <section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- Quote Requests Section -->
        <div class="bg-white shadow-lg rounded-lg p-6">
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Quote Requests</h2>
          <div v-if="quoteRequests.length > 0">
            <ul>
              <li v-for="request in quoteRequests" :key="request.id" class="border-b py-4">
                <div class="flex justify-between items-center">
                  <div class="font-medium text-lg">{{ request.address }}</div>
                  <span class="text-sm text-gray-500">{{ request.size }} sq ft</span>
                </div>
                <div class="flex justify-between mt-2">
                  <button @click="respondToQuote(request)" class="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition">
                    Respond
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div v-else>
            <p class="text-gray-500">No new quote requests.</p>
          </div>
        </div>
  
        <!-- Ongoing Work Orders Section -->
        <div class="bg-white shadow-lg rounded-lg p-6">
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Ongoing Work Orders</h2>
          <div v-if="ongoingOrders.length > 0">
            <ul>
              <li v-for="order in ongoingOrders" :key="order.id" class="border-b py-4">
                <div class="flex justify-between items-center">
                  <div class="font-medium text-lg">{{ order.clientName }}</div>
                  <span class="text-sm text-gray-500">{{ order.status }}</span>
                </div>
                <div class="flex justify-between mt-2">
                  <button @click="updateWorkOrder(order)" class="bg-yellow-500 text-white py-1 px-4 rounded hover:bg-yellow-600 transition">
                    Update Status
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div v-else>
            <p class="text-gray-500">No ongoing work orders.</p>
          </div>
        </div>
  
        <!-- Bills and Disputes Section -->
        <div class="bg-white shadow-lg rounded-lg p-6">
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Bills & Disputes</h2>
          <div v-if="bills.length > 0">
            <ul>
              <li v-for="bill in bills" :key="bill.id" class="border-b py-4">
                <div class="flex justify-between items-center">
                  <div class="font-medium text-lg">Bill #{{ bill.id }}</div>
                  <span class="text-sm text-gray-500">${{ bill.amount }}</span>
                </div>
                <div class="flex justify-between mt-2">
                  <button @click="handleDispute(bill)" class="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 transition">
                    Handle Dispute
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div v-else>
            <p class="text-gray-500">No bills or disputes.</p>
          </div>
        </div>
      </section>
  
      <!-- Revenue Report Section -->
      <div class="mt-12 bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">Revenue Report</h2>
        
        <!-- Select Month & Generate Report -->
        <div class="flex items-center space-x-4 mb-6">
          <input type="month" v-model="selectedMonth" class="p-2 border rounded" />
          <button @click="generateReport" class="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition">
            Generate Report
          </button>
        </div>
  
        <!-- Display Chart -->
        <div v-if="revenueData">
          <RevenueChart :data="revenueData" />
        </div>
        <div v-else>
          <p class="text-gray-500">Select a month to generate the revenue report.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
//   import RevenueChart from './RevenueChart.vue';
  
  definePageMeta({
    layout:'dashboard-properties'
})
  export default {
   
    data() {
      return {
        selectedMonth: '',
        quoteRequests: [
          { id: 1, address: '123 Main St', size: 1200 },
          { id: 2, address: '456 Oak Ave', size: 800 },
        ],
        ongoingOrders: [
          { id: 1, clientName: 'John Doe', status: 'In Progress' },
          { id: 2, clientName: 'Jane Smith', status: 'Awaiting Materials' },
        ],
        bills: [
          { id: 1, amount: 500 },
          { id: 2, amount: 300 },
        ],
        revenueData: null, // Placeholder for the chart data
      };
    },
    methods: {
      respondToQuote(request) {
        console.log(`Responding to quote request at ${request.address}`);
      },
      updateWorkOrder(order) {
        console.log(`Updating status for work order with ${order.clientName}`);
      },
      handleDispute(bill) {
        console.log(`Handling dispute for bill #${bill.id}`);
      },
      generateReport() {
        if (this.selectedMonth) {
          // Simulate fetching revenue data based on the selected month
          this.revenueData = {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [
              {
                label: 'Revenue ($)',
                data: [1000, 1500, 1200, 1800], // Example data
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
              }
            ]
          };
        } else {
          alert('Please select a month');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  
  

  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  