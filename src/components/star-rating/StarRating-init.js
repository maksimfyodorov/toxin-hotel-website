import StarRating from './StarRating'

const starRatings = document.querySelectorAll('.js-star-rating')

starRatings.forEach(starRating => {
  new StarRating(starRating)
})
