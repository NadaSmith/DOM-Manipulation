/* Part 1
DOM's personal website title is a bit wordy. Write a JavaScript statement that selects 
the #main-titleID element. Remember there are a couple of ways to query id. Change the 
text of the title to something shorter. */
const mainTitle = document.querySelector('#main-title');
mainTitle.textContent = 'Shorter Title';

/* Part 2
Select the bodyand change the background-color to a new color of your choice. */
const body = document.querySelector('body');
body.style.backgroundColor = 'lightblue';
