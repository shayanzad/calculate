// stores/date.js

import { defineStore } from 'pinia'
import moment from 'jalali-moment'

export const useDateStore = defineStore('date', () => {
  // این تابع تاریخ میلادی رو به شمسی تبدیل میکنه
  const toJalali = (date) => {
    return moment(date).locale('fa').format('YYYY/MM/DD HH:mm')
  }

  return { toJalali }
})
