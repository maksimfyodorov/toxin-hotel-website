import LikeButton from './LikeButton'

const likeButtons = document.querySelectorAll('.js-like-button')

likeButtons.forEach(likeButton => {
  new LikeButton(likeButton)
})
