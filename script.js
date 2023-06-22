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

/* Part 7
Create a new .blog-postcorresponding to the new city added in Part 6. You will have to create 
a new <div>with class of .blog-post, a new <h2>with text, and a new <p>with some text. Think 
about what order you want to create the elements, and what order you want to append them in. */
const newBlogPost = document.createElement('div');
newBlogPost.classList.add('blog-post');

const newBlogPostTitle = document.createElement('h2');
newBlogPostTitle.textContent = 'New York Adventure';
newBlogPost.appendChild(newBlogPostTitle);

const newBlogPostContent = document.createElement('p');
newBlogPostContent.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
newBlogPost.appendChild(newBlogPostContent);

const blogSection = document.querySelector('.main');
blogSection.appendChild(newBlogPost);
