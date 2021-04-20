import 'air-datepicker'

class DatePicker {
  constructor(element) {
    this.datePicker = element
    this._init()
  }

  _init() {
    this._initDatepicker()
    this._createButton()
    this._getElements()
    this._switchDisabledAttributeToArrowPrev()
    this._addEventListeners()
  }

  _initDatepicker() {
    $('.date-picker__calendar').datepicker({
      clearButton: true,
      range: true,
      toggleSelected: false,
      multipleDatesSeparator: ' - ',
      navTitles: {
        days: 'MM <i>yyyy</i>',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2',
      },
      prevHtml: '<button class="datepicker--arrow-prev"></button>',
      nextHtml: '<button class="datepicker--arrow-next"></button>',
    })
  }

  _createButton() {
    const applyButton = `<button class="datepicker--button" type="button" data-action="apply">Применить</button>`
    this.datePicker.querySelector('.datepicker--buttons').insertAdjacentHTML('beforeend', applyButton)
  }

  _getElements() {
    this.datePickerCalendar = this.datePicker.querySelector('.date-picker__calendar')
    this.navTitle = this.datePicker.querySelector('.datepicker--nav-title')
    this.textFields = this.datePicker.querySelectorAll('.text-field__container')
    this.arrivalInput = this.datePicker.querySelector('.date-picker__arrival-dropdown').querySelector('.text-field__input')
    this.departureInput = this.datePicker.querySelector('.date-picker__departure-dropdown').querySelector('.text-field__input')
    this.arrowNext = this.datePicker.querySelector('.datepicker--arrow-next')
    this.arrowPrev = this.datePicker.querySelector('.datepicker--arrow-prev')
    this.resetButton = this.datePicker.querySelector('[data-action="clear"]')
    this.applyButton = this.datePicker.querySelector('[data-action="apply"]')
    this.backdrop = this.datePicker.querySelector('.date-picker__backdrop')

    this.months = ['Январь' , 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август' , 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    this.arrayToRenderDates = []
    this.arrayToCompareDates = []
  }

  _addEventListeners() {
    this.textFields.forEach(textField => textField.addEventListener('click', this._handleTextFieldClick.bind(this)))
    this.datePicker.addEventListener('click', this._handleDatePickerClick.bind(this))
    this.resetButton.addEventListener('click', this._handleResetButtonClick.bind(this))
    this.applyButton.addEventListener('click', this._handleApplyButtonClick.bind(this))
    this.backdrop.addEventListener('click', this._handleBackdropClick.bind(this))
  }

  _handleTextFieldClick() {
    this.datePickerCalendar.classList.toggle('_expanded')
  }

  _handleDatePickerClick(event) {
    const {target} = event
    if(target.matches('.datepicker--cell-day')) {
      const [dateToRender, dateToCompare] = this._getOnTargetDate(target)

      if (this.arrivalInput.value === 'ДД.ММ.ГГГГ' && this.departureInput.value === 'ДД.ММ.ГГГГ') {
        this.arrivalInput.value = dateToRender
        this.arrayToRenderDates.push(dateToRender)
        this.arrayToCompareDates.push(dateToCompare)

      } else if (this.arrivalInput.value !== 'ДД.ММ.ГГГГ' && this.departureInput.value === 'ДД.ММ.ГГГГ') {
        this.departureInput.value = dateToRender
        this.arrayToRenderDates.push(dateToRender)
        this.arrayToCompareDates.push(dateToCompare)

        if (this._compareDates(this.arrayToCompareDates) === -1) {
          this.departureInput.value = this.arrayToRenderDates[0]
          this.arrivalInput.value = this.arrayToRenderDates[1]
        }

        this.arrayToRenderDates = []
        this.arrayToCompareDates = []

      } else {
        this.arrivalInput.value = dateToRender
        this.arrayToRenderDates.push(dateToRender)
        this.arrayToCompareDates.push(dateToCompare)
        this.departureInput.value = 'ДД.ММ.ГГГГ'
      }
    }
  }

  _handleResetButtonClick() {
    this.arrivalInput.value = 'ДД.ММ.ГГГГ'
    this.departureInput.value = 'ДД.ММ.ГГГГ'
    this.arrayToRenderDates = []
    this.arrayToCompareDates = []
  }

  _handleApplyButtonClick() {
    if (this.arrivalInput.value !== 'ДД.ММ.ГГГГ' && this.departureInput.value !== 'ДД.ММ.ГГГГ') {
      this.datePickerCalendar.classList.remove('_expanded')
    }
  }

  _handleBackdropClick() {
    this.datePickerCalendar.classList.remove('_expanded')
  }

  _compareDates(array) {
    const firstDate = new Date(array[0]);
    const secondDate = new Date(array[1]);
    if (firstDate < secondDate) return 1
    if (firstDate > secondDate) return -1
  }

  _getOnTargetDate(target) {
    const day = target.dataset.date
    const month = `${parseInt(target.dataset.month, 10) + 1}`
    const monthToCompare = target.dataset.month
    const year = target.dataset.year
    const dateToRender = `${day.length === 1 ? 0 + day : day}.${month.length === 1 ? 0 + month : month}.${year}`
    const dateToCompare = `${year}.${monthToCompare.length === 1 ? 0 + monthToCompare : monthToCompare}.${day.length === 1 ? 0 + day : day}`
    return [dateToRender, dateToCompare]
  }

  _switchDisabledAttributeToArrowPrev() {
    const [month, year] = this._getCurrentMonth()
    const monthIndex = this.months.indexOf(month)
    const isCurrentMonth = this._isCurrentMonth(monthIndex, year)
    isCurrentMonth
      ? this.arrowPrev.setAttribute('disabled', 'disabled')
      : this.arrowPrev.removeAttribute('disabled', 'disabled')
  }

  _getCurrentMonth() {
    const arr = this.navTitle.innerText.split(' ')
    const month = arr[0]
    const year = parseInt(arr[1], 10)
    return [month, year]
  }

  _isCurrentMonth(monthIndex, year) {
    const date = new Date()
    const currentMonth = monthIndex === date.getMonth()
    const currentYear = year === date.getFullYear()
    const currentDate = currentMonth && currentYear
    return currentDate
  }
}

export default DatePicker
