import Sidebar from './Sidebar'

const sidebars = document.querySelectorAll('.js-sidebar')

sidebars.forEach(sidebar => {
  new Sidebar(sidebar)
})
