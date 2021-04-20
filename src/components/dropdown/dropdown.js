class Dropdown {
  constructor(element) {
    this.dropdown = element
    this._init()
  }

  _init() {
    this._getDomElements()
    this._switchDisabledAttributeToDecreaseButtons()
    this._setDefaultStateToItems()
    this._addListeners()
  }

  _getDomElements() {
    this.roomFacilitiesDropdown = this.dropdown.dataset.type === 'room-facilities'
    this.input = this.dropdown.querySelector('.dropdown__input')
    this.textField = this.dropdown.querySelector('.text-field')
    this.textFieldInput = this.dropdown.querySelector('.text-field__input')
    this.dropdownItems = this.dropdown.querySelectorAll('.dropdown__item')
    this.itemAmountList = this.dropdown.querySelectorAll('.dropdown__item-amount')
    this.resetButton = this.dropdown.querySelector('.dropdown__reset-button')
    this.applyButton = this.dropdown.querySelector('.dropdown__apply-button')
    this.increaseButtons = this.dropdown.querySelectorAll('.dropdown__increase-button')
    this.decreaseButtons = this.dropdown.querySelectorAll('.dropdown__decrease-button')
    this.backdrop = this.dropdown.querySelector('.dropdown__backdrop')
  }

  _switchDisabledAttributeToDecreaseButtons() {
    this.decreaseButtons.forEach(button => {
      const itemCounter = button.closest('.dropdown__item-counter')
      const itemAmount = itemCounter.querySelector('.dropdown__item-amount')
      const itemAmountValue = parseInt(itemAmount.innerText, 10)
      if (itemAmountValue === 0) {
        button.setAttribute('disabled', 'disabled')
      } else {
        button.removeAttribute('disabled')
      }
    })
  }

  _addListeners() {
    this.input.addEventListener('click', this._handleInputClick.bind(this))
    this.increaseButtons.forEach(button => {
      button.addEventListener('click', this._handleIncreaseButtonClick.bind(this))
    })
    this.decreaseButtons.forEach(button => {
      button.addEventListener('click', this._handleDecreaseButtonClick.bind(this))
    })
    if (this.resetButton !== null) this.resetButton.addEventListener('click', this._handleResetButtonClick.bind(this))
    if (!this.roomFacilitiesDropdown) this.applyButton.addEventListener('click', this._handleApplyButtonClick.bind(this))
    this.backdrop.addEventListener('click', this._handleBackdropClick.bind(this))
  }

  _handleInputClick() {
    this.dropdown.classList.toggle('_expanded')
    this.textField.classList.toggle('_expanded')
  }

  _handleIncreaseButtonClick(event) {
    const {target} = event
    const itemCounter = target.closest('.dropdown__item-counter')
    const itemAmount = itemCounter.querySelector('.dropdown__item-amount')
    let itemAmountValue = parseInt(itemAmount.innerText, 10)
    itemAmount.innerText = itemAmountValue += 1
    this.textFieldInput.value = this._formInputValue()
    this._switchDisabledAttributeToDecreaseButtons()
    this._setDefaultStateToItems()
    this._renderResetButton()
  }

  _handleDecreaseButtonClick(event) {
    const {target} = event
    const itemCounter = target.closest('.dropdown__item-counter')
    const itemAmount = itemCounter.querySelector('.dropdown__item-amount')
    let itemAmountValue = parseInt(itemAmount.innerText, 10)
    itemAmount.innerText = itemAmountValue -= 1
    this.textFieldInput.value = this._formInputValue()
    this._switchDisabledAttributeToDecreaseButtons()
    this._setDefaultStateToItems()
    this._hideResetButton()
  }

  _handleResetButtonClick() {
    this.itemAmountList.forEach(item => {
      item.innerText = '0'
    })
    this.resetButton.classList.add('--none')
    this._setDefaultStateToItems()
  }

  _handleApplyButtonClick() {
    this._closeDropdown()
  }

  _handleBackdropClick() {
    this._closeDropdown()
  }

  _closeDropdown() {
    this.dropdown.classList.remove('_expanded')
    this.textField.classList.remove('_expanded')
  }

  _setDefaultStateToItems() {
    this.dropdownItems.forEach(item => {
      if (item.dataset.requiredItem === 'adults') {
        const itemAmount = parseInt(item.querySelector('.dropdown__item-amount').innerText, 10)
        if (itemAmount === 0) {
          this.dropdownItems.forEach(item => {
            item.querySelector('.dropdown__item-amount').innerText = '0'
          })
          this.decreaseButtons.forEach(button => {
            button.setAttribute('disabled', 'disabled')
          })
          this.increaseButtons.forEach(button => {
            button.setAttribute('disabled', 'disabled')
          })
          item.querySelector('.dropdown__increase-button').removeAttribute('disabled')
        } else {
          this.increaseButtons.forEach(button => {
            button.removeAttribute('disabled')
          })
        }
      }

      if (item.dataset.requiredItem === 'beds') {
        const itemAmount = parseInt(item.querySelector('.dropdown__item-amount').innerText, 10)
        if (itemAmount === 1) {
          item.querySelector('.dropdown__decrease-button').setAttribute('disabled', 'disabled')
        } else {
          item.querySelector('.dropdown__decrease-button').removeAttribute('disabled')
        }
      }
    })
    this.textFieldInput.value = this._formInputValue()
  }

  _formInputValue() {
    const array = []

    this.dropdownItems.forEach(item => {
      const name = item.querySelector('.dropdown__item-name').innerText.toLowerCase()
      const amount = parseInt(item.querySelector('.dropdown__item-amount').innerText, 10)
      if (amount > 0) {
        const resultString = this.roomFacilitiesDropdown ? `${amount} ${this._getCorrectWordForm(amount, name)}` : `${amount}`
        array.push(resultString)
      }
    })

    let inputValue
    if (this.roomFacilitiesDropdown) {
      inputValue = array.join(', ')
    } else {
      const arraySum = this._calculateSumOfArrayItems(array)
      inputValue = array.length > 0 ? `${arraySum} ${this._getCorrectWordForm(arraySum, 'гость')}` : 'Сколько гостей'
    }

    return inputValue
  }

  _calculateSumOfArrayItems(array) {
    const arr = array.map(item => parseInt(item, 10))
    const arrSum = arr.reduce((sum, current) => sum + current, 0)
    return arrSum
  }

  _getCorrectWordForm(num, name) {
    const wordForms1 = ['спальня', 'спальни', 'спален']
    const wordForms2 = ['кровать', 'кровати', 'кроватей']
    const wordForms3 = ['ванная комната', 'ванные комнаты', 'ванных комнат']
    const wordForms4 = ['гость', 'гостя', 'гостей']
    const wordFormsList = [wordForms1, wordForms2, wordForms3, wordForms4]
    let wordForm

    wordFormsList.forEach(wordForms => {
      if (wordForms.includes(name)) wordForm = this._declOfNum(num, wordForms)
    })
    return wordForm
  }

  _declOfNum(n, wordForms) {
    n = n % 100
    const n1 = n % 10
    if (n > 10 && n < 20) return wordForms[2]
    if (n1 > 1 && n1 < 5) return wordForms[1]
    if (n1 == 1) return wordForms[0]
    return wordForms[2]
  }

  _renderResetButton() {
    if (!this.roomFacilitiesDropdown) {
      this.itemAmountList.forEach(item => {
        if (parseInt(item.innerText, 10) >= 1) this.resetButton.classList.remove('--none')
      })
    }
  }

  _hideResetButton() {
    if (!this.roomFacilitiesDropdown) {
      const array = Array.from(this.itemAmountList).map(item => item.innerText)
      const arraySum = this._calculateSumOfArrayItems(array)
      if (arraySum === 0) this.resetButton.classList.add('--none')
    }
  }
}

export default Dropdown
