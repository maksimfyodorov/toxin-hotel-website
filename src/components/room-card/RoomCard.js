import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel'

class RoomCard {
  constructor() {
    this._init();
  }

  _init() {
    $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      nav: true,
      navText: ['', '']
    })
  }
}

export default RoomCard
