// plugins/dateFormatter.js
import moment from "jalali-moment";
import starkString from "starkstring";

export default defineNuxtPlugin((nuxtApp) => {
  // تبدیل تاریخ به همراه زمان به فرمت جلالی
  
  const formatDateTime = (date) => {
    if (date.includes(' ')) {
      date = date.replace(' ', 'T') + '.000000Z';
    }
    date = starkString(moment(date).format('YYYY/MM/DD HH:mm:ss ')).englishNumber().toString();
    const dateTime = new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: "Asia/Tehran" }));
    return moment(dateTime).locale('fa').format('jYYYY/jMM/jDD HH:mm');
  };

  // تبدیل تاریخ به فرمت جلالی بدون زمان
  const convertDateOnly = (date) => {
    date = starkString(moment(date).format('YYYY/MM/DD HH:mm:ss +0000')).englishNumber().toString();
    const dateTime = new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: "Asia/Tehran" }));
    return moment(dateTime).locale('fa').format('jYYYY/jMM/jDD');
  };

  // ارائه توابع تبدیل به Nuxt به عنوان توابع گلوبال
  nuxtApp.provide('formatDateTime', formatDateTime);
  nuxtApp.provide('convertDateOnly', convertDateOnly);
});
