
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open');
/*<div class="menu">
      <ul>
        <li>Students</li>
        <li>Faculty</li>
        <li>What's New</li>
        <li>Tech Trends</li>
        <li>Music</li>
        <li>Log Out</li>
      </ul>
    </div> */
    const menu = document.createElement('div');
    const students = document.createElement('li')
    const faculty = document.createElement('li')
    const whatsNew = document.createElement('li')
    const techTrends = document.createElement('li')
    const music = document.createElement('li')
    const logOut = document.createElement('li')

}


// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu)