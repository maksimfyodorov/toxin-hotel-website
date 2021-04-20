import DatePicker from './DatePicker'

const DatePickers = document.querySelectorAll('.js-date-picker')

DatePickers.forEach(datePicker => {
  new DatePicker(datePicker)
})
