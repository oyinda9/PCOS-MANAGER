// plugins/v-calendar.js
import { defineNuxtPlugin } from '#app';
import VCalendar from 'v-calendar';
import 'v-calendar/dist/style.css';


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VCalendar, {
    componentPrefix: 'V', // Use <VCalendar /> instead of <Calendar />
  });
});
