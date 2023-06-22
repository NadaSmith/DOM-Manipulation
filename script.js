/* Part 1
DOM's personal website title is a bit wordy. Write a JavaScript statement that selects 
the #main-titleID element. Remember there are a couple of ways to query id. Change the 
text of the title to something shorter. */
const mainTitle = document.querySelector('#main-title');
mainTitle.textContent = 'Shorter Title';

