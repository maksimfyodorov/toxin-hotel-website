class LikeButton {
  constructor(element) {
    this.button = element
    this._init()
  }

  _init() {
    this._addListeners()
    this._getCurrentCount()
  }

  _getCurrentCount() {
    this.count = parseInt(this.button.innerText, 10)
  }

  _increaseCurrentCount() {
    this.button.innerText = this.count += 1
  }

  _decreaseCurrentCount() {
    this.button.innerText = this.count -= 1
  }

  _addListeners() {
    this.button.addEventListener('click', this._handleLikeButtonClick.bind(this));
  }

  _handleLikeButtonClick() {
    if (this.button.matches('._activated')) {
      this.button.classList.remove('_activated')
      this._decreaseCurrentCount()
    } else {
      this.button.classList.add('_activated')
      this._increaseCurrentCount()
    }
  }
}

export default LikeButton
