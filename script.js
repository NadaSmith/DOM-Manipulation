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

/* Part 5
Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago. */
const pastRacesList = document.querySelector('#past-races');
const chicagoRace = pastRacesList.querySelector('li[data-place="chicago"]');
pastRacesList.removeChild(chicagoRace);

//-----------------------------------------Creating New DOM Elements--------------------------

/* Part 6
Let's add to DOM's Past Races list. Create a new <li>element, change the new <li>text to the 
name of a city, and append it to the Past Races list.*/
const newRace = document.createElement('li');
newRace.textContent = 'New York';
pastRacesList.appendChild(newRace);
