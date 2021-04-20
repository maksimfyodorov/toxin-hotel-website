import RoomCard from './RoomCard'

window.addEventListener('load', () => {
  const roomCardsList = document.querySelectorAll('.js-room-card')
  roomCardsList.forEach((_, index) => new RoomCard(roomCardsList[index]))
})
