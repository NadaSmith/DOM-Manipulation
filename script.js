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

/* Part 3
Select DOM's Favorite Things list and remove the last list item.*/
const favoriteThingsList = document.querySelector('#favorite-things');
const lastListItem = favoriteThingsList.lastElementChild;
favoriteThingsList.removeChild(lastListItem);

/* Part 4
Select all .special-titleclass elements and change their font-sizeto 2rem. Remember 
you might have to iterate through the list of elements */
const specialTitles = document.querySelectorAll('.special-title');
specialTitles.forEach((title) => {
  title.style.fontSize = '2rem';
});
