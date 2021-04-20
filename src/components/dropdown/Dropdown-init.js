import Dropdown from './Dropdown'

const dropdownList = document.querySelectorAll('.js-dropdown')

dropdownList.forEach(dropdown => {
  new Dropdown(dropdown)
})
