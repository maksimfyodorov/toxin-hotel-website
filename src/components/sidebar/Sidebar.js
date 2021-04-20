class Sidebar {
  constructor(element) {
    this.sidebar = element
    this._init()
  }

  _init() {
    this._getDomElements()
    this._addEventListeners()
  }

  _getDomElements() {
    this.button = this.sidebar.querySelector('.button')
  }

  _addEventListeners() {
    this.button.addEventListener('click', this._handleButtonClick.bind(this))
  }

  _handleButtonClick() {
    this.button.classList.toggle('_is-clicked')
    this.sidebar.classList.toggle('_expanded')
  }
}

export default Sidebar
