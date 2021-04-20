class Header {
  constructor(element) {
    this.header = element
    this._init()
  }

  _init() {
    this._getDomElements()
    this._addListeners()
  }

  _getDomElements() {
    this.burger = this.header.querySelector('.header__burger')
    this.navBlock = this.header.querySelector('.header__nav-block')
    this.backdrop = this.header.querySelector('.header__backdrop')
  }

  _addListeners() {
    this.burger.addEventListener('click', this._handleBurgerClick.bind(this))
    this.backdrop.addEventListener('click', this._handleBackdropClick.bind(this))
    window.addEventListener('resize', this._handleWindowResize.bind(this))
  }

  _handleBurgerClick() {
    this.burger.classList.toggle('_activated')
    this.navBlock.classList.toggle('_activated')
    this.backdrop.classList.toggle('_activated')
  }

  _handleBackdropClick() {
    this.burger.classList.remove('_activated')
    this.navBlock.classList.remove('_activated')
    this.backdrop.classList.remove('_activated')
  }

  _handleWindowResize() {
    this.burger.classList.remove('_activated')
    this.navBlock.classList.remove('_activated')
    this.backdrop.classList.remove('_activated')
  }
}

export default Header
