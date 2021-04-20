class Pagination {
  constructor(element) {
    this.pagination = element
    this._init()
  }

  _init() {
    this._getDomElements()
    this._setInitialValues()
    this._addListeners()
    this._changeNumbersInDescription()
  }

  _getDomElements() {
    this.arrowNext = this.pagination.querySelector('._type_arrow-next')
    this.arrowPrev = this.pagination.querySelector('._type_arrow-prev')
    this.startValue = parseInt(this.pagination.querySelector('.js-start-value').innerText, 10)
    this.endValue = parseInt(this.pagination.querySelector('.js-end-value').innerText, 10)
    this.startEllipsis = this.pagination.querySelector('._type_start-ellipsis')
    this.endEllipsis = this.pagination.querySelector('._type_end-ellipsis')
    this.additionalItem = this.pagination.querySelector('.js-additional-item')
    this.paginationItems = Array.from(this.pagination.querySelectorAll('.pagination__item'))
  }

  _filterPaginationItems() {
     this.filteredPaginationItems =  this.paginationItems.filter(item =>
      !item.matches('.--none') &&
      !item.matches('._type_arrow-prev') &&
      !item.matches('._type_arrow-next') &&
      !item.matches('._type_start-ellipsis') &&
      !item.matches('._type_end-ellipsis')
    )
    return this.filteredPaginationItems
  }

  _setInitialValues() {
    this._filterPaginationItems()
    this.filteredPaginationItems[1].innerText = this.startValue + 1
    this.filteredPaginationItems[2].innerText = this.startValue + 2
  }

  _addListeners() {
    this.arrowNext.addEventListener('click', this._handleArrowNextClick.bind(this))
    this.arrowPrev.addEventListener('click', this._handleArrowPrevClick.bind(this))
    this.pagination.addEventListener('click', this._handlePaginationItemClick.bind(this))
  }

  _handleArrowNextClick() {
    this._filterPaginationItems()
    const selectedElement = this.pagination.querySelector('._selected')
    const selectedElementValue = parseInt(selectedElement.innerText, 10)
    const nextElement = this.filteredPaginationItems.indexOf(selectedElement) + 1

    selectedElement.classList.remove('_selected')
    this.filteredPaginationItems[nextElement].classList.add('_selected')

    if (selectedElementValue === this.startValue) {
      this.arrowPrev.classList.remove('--none')
    }

    if ((selectedElementValue + 1) === this.endValue) {
      this.arrowNext.classList.add('--none')
    }

    if (selectedElementValue === this.startValue + 2) {
      this.startEllipsis.classList.remove('--none')
      this.additionalItem.classList.remove('--none')
      this._filterPaginationItems()

      this.filteredPaginationItems[1].innerText = selectedElementValue
      this.filteredPaginationItems[2].innerText = selectedElementValue + 1
      this.filteredPaginationItems[3].innerText = selectedElementValue + 2

      this.paginationItems.forEach(item => item.classList.remove('_selected'))
      this.filteredPaginationItems[2].classList.add('_selected')
    }

    if (!this.additionalItem.matches('.--none')) {
      this.paginationItems.forEach(item => item.classList.remove('_selected'))
      this.filteredPaginationItems[2].classList.add('_selected')

      this.filteredPaginationItems[1].innerText = selectedElementValue
      this.filteredPaginationItems[2].innerText = selectedElementValue + 1
      this.filteredPaginationItems[3].innerText = selectedElementValue + 2
    }

    if (selectedElementValue === this.endValue - 3) {
      this.endEllipsis.classList.add('--none')
      this.additionalItem.classList.add('--none')
    }

    this._changeNumbersInDescription()
    this._changeEllipsisItemWidth()
  }

  _handleArrowPrevClick() {
    this._filterPaginationItems()
    const selectedElement = this.pagination.querySelector('._selected')
    const selectedElementValue = parseInt(selectedElement.innerText, 10)
    const prevElement = this.filteredPaginationItems.indexOf(selectedElement) - 1

    this.filteredPaginationItems[prevElement].classList.add('_selected')
    selectedElement.classList.remove('_selected')

    if (selectedElementValue === this.endValue) {
      this.arrowNext.classList.remove('--none')
    }

    if ((selectedElementValue - 1) === this.startValue) {
      this.arrowPrev.classList.add('--none')
    }

    if (selectedElementValue === this.endValue - 2) {
      this.endEllipsis.classList.remove('--none')
      this.additionalItem.classList.remove('--none')
      this._filterPaginationItems()

      this.filteredPaginationItems[1].innerText = selectedElementValue - 2
      this.filteredPaginationItems[2].innerText = selectedElementValue - 1
      this.filteredPaginationItems[3].innerText = selectedElementValue

      this.paginationItems.forEach(item => item.classList.remove('_selected'))
      this.filteredPaginationItems[2].classList.add('_selected')
    }

    if (!this.additionalItem.matches('.--none')) {
      this.paginationItems.forEach(item => item.classList.remove('_selected'))
      this.filteredPaginationItems[2].classList.add('_selected')

      this.filteredPaginationItems[1].innerText = selectedElementValue - 2
      this.filteredPaginationItems[2].innerText = selectedElementValue - 1
      this.filteredPaginationItems[3].innerText = selectedElementValue
    }

    if (selectedElementValue === this.startValue + 3) {
      this.startEllipsis.classList.add('--none')
      this.additionalItem.classList.add('--none')
      this._filterPaginationItems()

      this.filteredPaginationItems[1].innerText = selectedElementValue - 2
      this.filteredPaginationItems[2].innerText = selectedElementValue - 1

      this.paginationItems.forEach(item => item.classList.remove('_selected'))
      this.filteredPaginationItems[2].classList.add('_selected')
    }

    this._changeNumbersInDescription()
    this._changeEllipsisItemWidth()
  }

  _handlePaginationItemClick(event) {
    const {target} = event

    if (target.matches('.pagination__item') && target.innerText !== '') {
      this._filterPaginationItems()
      const onClickElementValue = parseInt(target.innerText, 10)
      const selectedElement = this.pagination.querySelector('._selected')
      const selectedElementValue = parseInt(selectedElement.innerText, 10)

      if (this.filteredPaginationItems.length === 4) {
        if (onClickElementValue === this.endValue || onClickElementValue === this.endValue - 1 || onClickElementValue === this.endValue - 2) {
          this.paginationItems.forEach(item => item.classList.remove('_selected'))
          target.classList.add('_selected')
          this.arrowNext.classList.add('--none')
          this.endEllipsis.classList.add('--none')
          this.additionalItem.classList.add('--none')
          this.arrowPrev.classList.remove('--none')
          this.startEllipsis.classList.remove('--none')

          this._filterPaginationItems()
          this.filteredPaginationItems[1].innerText = this.endValue - 2
          this.filteredPaginationItems[2].innerText = this.endValue - 1

          if (onClickElementValue === this.endValue - 1 || onClickElementValue === this.endValue - 2) {
            this.arrowNext.classList.remove('--none')
          }

        }

        if (onClickElementValue === this.startValue || onClickElementValue === this.startValue + 1 || onClickElementValue === this.startValue + 2) {
          this.paginationItems.forEach(item => item.classList.remove('_selected'))
          target.classList.add('_selected')
          this.arrowNext.classList.remove('--none')
          this.endEllipsis.classList.remove('--none')
          this.additionalItem.classList.add('--none')
          this.arrowPrev.classList.add('--none')
          this.startEllipsis.classList.add('--none')

          this._filterPaginationItems()
          this.filteredPaginationItems[1].innerText = this.startValue + 1
          this.filteredPaginationItems[2].innerText = this.startValue + 2

          if (onClickElementValue === this.startValue + 1 || onClickElementValue === this.startValue + 2) {
            this.arrowPrev.classList.remove('--none')
          }
        }
      }

      if (this.filteredPaginationItems.length === 5) {
        if (onClickElementValue === selectedElementValue + 1) {
          this.filteredPaginationItems[1].innerText = onClickElementValue - 1
          this.filteredPaginationItems[2].innerText = onClickElementValue
          this.filteredPaginationItems[3].innerText = onClickElementValue + 1
        }

        if (onClickElementValue === selectedElementValue - 1) {
          this.filteredPaginationItems[1].innerText = onClickElementValue - 1
          this.filteredPaginationItems[2].innerText = onClickElementValue
          this.filteredPaginationItems[3].innerText = onClickElementValue + 1
        }

        if (onClickElementValue === this.startValue + 2) {
          this.paginationItems.forEach(item => item.classList.remove('_selected'))
          this.filteredPaginationItems[3].classList.add('_selected')
          this.additionalItem.classList.add('--none')
          this.startEllipsis.classList.add('--none')

          this.filteredPaginationItems[2].innerText = onClickElementValue - 1
          this.filteredPaginationItems[3].innerText = onClickElementValue
        }

        if (onClickElementValue === this.endValue - 2) {
          this.additionalItem.classList.add('--none')
          this.endEllipsis.classList.add('--none')
        }

        if (onClickElementValue === this.startValue) {
          this.paginationItems.forEach(item => item.classList.remove('_selected'))
          target.classList.add('_selected')
          this.additionalItem.classList.add('--none')
          this.arrowPrev.classList.add('--none')
          this.startEllipsis.classList.add('--none')

          this.filteredPaginationItems[2].innerText = this.startValue + 1
          this.filteredPaginationItems[3].innerText = this.startValue +2
        }

        if (onClickElementValue === this.endValue) {
          this.paginationItems.forEach(item => item.classList.remove('_selected'))
          target.classList.add('_selected')
          this.additionalItem.classList.add('--none')
          this.arrowNext.classList.add('--none')
          this.endEllipsis.classList.add('--none')

          this.filteredPaginationItems[2].innerText = this.endValue - 2
          this.filteredPaginationItems[3].innerText = this.endValue - 1
        }
      }
    }

    this._changeNumbersInDescription()
    this._changeEllipsisItemWidth()
  }

  _changeNumbersInDescription() {
    const selectedElement = this.pagination.querySelector('._selected')
    const selectedElementValue = parseInt(selectedElement.innerText, 10)
    const paginationDescription = this.pagination.querySelector('.pagination__description')
    const paginationDescriptionChildren = paginationDescription.children

    paginationDescriptionChildren[0].innerText = selectedElementValue * 12 - 11
    paginationDescriptionChildren[2].innerText = selectedElementValue * 12
  }

  _changeEllipsisItemWidth() {
    const selectedElementValue = parseInt(this.pagination.querySelector('._selected').innerText)
    if (this.filteredPaginationItems.length === 5) {
      this.startEllipsis.style.width = 'fit-content'
      this.endEllipsis.style.width = 'fit-content'

      if (selectedElementValue === this.endValue - 2 || selectedElementValue === this.startValue + 2) {
        this.startEllipsis.style.width = '40px'
        this.endEllipsis.style.width = '40px'
      }
    } else {
      this.startEllipsis.style.width = '40px'
      this.endEllipsis.style.width = '40px'
    }
  }
}

export default Pagination
