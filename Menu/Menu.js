



const menuMarkUp = () => {

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

    // Defined new elements
    const menu = document.createElement('div');
    const menuList = document.createElement('ul');
    const students = document.createElement('li');
    const faculty = document.createElement('li');
    const whatsNew = document.createElement('li');
    const techTrends = document.createElement('li');
    const music = document.createElement('li');
    const logOut = document.createElement('li');

//Structure of elements
menuList.appendChild(students)
menuList.appendChild(faculty)
menuList.appendChild(whatsNew)
menuList.appendChild(techTrends)
menuList.appendChild(music)
menuList.appendChild(logOut)

//Setting class names

menu.classList.add('menu')
console.log(menu);

//Adding text


     students.textContent = 'Students'
     faculty.textContent = 'Faculty'
     whatsNew.textContent = 'What\'s New'
     techTrends.textContent = 'Tech Trends'
     music.textContent = 'Music'
     logOut.textContent = 'Log out'

  return menuList;

    };


const toggleMenu = () => {
      // Toggle the "menu--open" class on your menu refence. 
      menuTwo.classList.toggle('menu--open');
      menuParent = document.querySelector('.menu')
      menuParent.appendChild(menuMarkUp());
      
    
    }
// Start Here: Create a reference to the ".menu" class
const menuTwo = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu)


