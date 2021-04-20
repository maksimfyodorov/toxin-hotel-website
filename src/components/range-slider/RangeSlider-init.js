import RangeSlider from './RangeSlider'

$(() => {
  $('.js-range-slider__input').each((_, val) => new RangeSlider(val))
})
