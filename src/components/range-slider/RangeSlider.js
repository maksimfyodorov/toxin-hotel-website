import 'ion-rangeslider'

class RangeSlider {
  constructor(element) {
    this.rangeSlider = $(element)
    this._init()
  }

  _init() {
    this.rangeSlider.ionRangeSlider({
      type: 'double',
      min: 0,
      max: 15000,
      hide_min_max: true,
      from: 5000,
      to: 10000,
      postfix: '₽',
      values_separator: ' - ',
    })
  }
}

export default RangeSlider
