const hamburgerMenu = document.getElementById('hamburger-menu')
const btnClose = document.getElementById('side-bar__btn-close')
const sideBar = document.getElementById('side-bar')
const mainContent = document.getElementById('main-content')

const closeSideBar = ()=>{
  // mainContent.style.left = '0px'
  sideBar.classList.remove('side-bar--active')
  mainContent.classList.remove('main-content--moved')
  
}

const openSideBar = ()=>{
  // mainContent.style.left = '200px'
  sideBar.classList.add('side-bar--active')
  mainContent.classList.add('main-content--moved')
  
}

// event listeners
btnClose.addEventListener('click', ()=>{
  
  closeSideBar();
})

hamburgerMenu.addEventListener('click', ()=>{
  openSideBar();
})

