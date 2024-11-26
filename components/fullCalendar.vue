<template>
    <div class="calendar-container">
      <div class="calendar-header">
        <button class="bg-pink-400 px-2 py-2 rounded w-[140px]" @click="previousMonth">Previous</button>
        <span>{{ monthNames[currentMonth] }} {{ currentYear }}</span>
        <button class="bg-pink-400 px-2 py-2   w-[140px] rounded" @click="nextMonth">Next</button>
      </div>
  
      <div class="calendar-grid">
        <div class="calendar-day" v-for="day in weekDays" :key="day">{{ day }}</div>
        <div
          class="calendar-date"
          v-for="date in daysInMonth"
          :key="date"
          @click="selectDate(date)"
        >
          {{ date }}
        </div>
      </div>
  
      <div v-if="selectedDate" class="selected-date">
        <p>Selected Date: {{ selectedDate }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentMonth: new Date().getMonth(),
        currentYear: new Date().getFullYear(),
        selectedDate: null,
        monthNames: [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ],
        weekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      };
    },
    computed: {
      daysInMonth() {
        const firstDay = new Date(this.currentYear, this.currentMonth, 1);
        const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
        const totalDays = lastDay.getDate();
        
        // Get the first weekday of the current month
        const firstDayOfWeek = firstDay.getDay();
  
        // Generate the array of dates including empty days for alignment
        const daysArray = Array(firstDayOfWeek).fill(null).concat(
          Array.from({ length: totalDays }, (_, i) => i + 1)
        );
  
        return daysArray;
      }
    },
    methods: {
      previousMonth() {
        if (this.currentMonth === 0) {
          this.currentMonth = 11;
          this.currentYear -= 1;
        } else {
          this.currentMonth -= 1;
        }
      },
      nextMonth() {
        if (this.currentMonth === 11) {
          this.currentMonth = 0;
          this.currentYear += 1;
        } else {
          this.currentMonth += 1;
        }
      },
      selectDate(date) {
        this.selectedDate = `${this.monthNames[this.currentMonth]} ${date}, ${this.currentYear}`;
      }
    }
  };
  </script>
  
  <style scoped>
  .calendar-container {
    width: 600px;
  
    font-family: Arial, sans-serif;
  }
   
  .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2px;
  }
  
  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
  
  .calendar-day, .calendar-date {
    text-align: center;
    padding: 10px;
    border: 1px solid #ccc;
  }
  
  .calendar-date:hover {
    background-color: #f0f0f0;
    cursor: pointer;
  }
  
  .selected-date {
    margin-top: 10px;
    text-align: center;
  }
  </style>
  