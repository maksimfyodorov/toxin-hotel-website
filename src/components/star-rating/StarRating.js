class StarRating {
  constructor(element) {
    this.starRating = element
    this._init()
  }

  _init() {
    this._findStars()
    this._addListeners()
  }

  _findStars() {
    this.stars = this.starRating.querySelectorAll('.star-rating__star')
  }

  _addListeners() {
    this.starRating.addEventListener('mouseover', this._handleStarMouseover.bind(this))
    this.starRating.addEventListener('click', this._handleStarClick.bind(this))
    this.starRating.addEventListener('mouseout', this._handleStarMouseout.bind(this))
  }

  _handleStarMouseover(event) {
    const {target} = event
    this.stars.forEach((star) => {
      target.dataset.index >= star.dataset.index
        ? star.classList.add('_activated')
        : star.classList.remove('_activated')
    })
  }

  _handleStarClick(event) {
    const {target} = event
    this.stars.forEach((star) => {
      target.dataset.index >= star.dataset.index
        ? star.classList.add('_activated', 'js-current-rated')
        : star.classList.remove('_activated', 'js-current-rated')
    })
  }

  _handleStarMouseout() {
    this.stars.forEach((star) => {
      star.matches('.js-current-rated')
        ? star.classList.add('_activated')
        : star.classList.remove('_activated')
    })
  }
}

export default StarRating
