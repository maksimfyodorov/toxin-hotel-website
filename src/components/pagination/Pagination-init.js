import Pagination from './Pagination'

const paginationList = document.querySelectorAll('.js-pagination')

paginationList.forEach(pagination => {
  new Pagination(pagination)
})
