// Part 1: Create a new div of class "planet" and set its background color
// to the color of your choice.  Then, append it to the body in the DOM.
var planet = document.createElement('div');
planet.classList.add('planet');
planet.class = "planet";
planet.style.background = "red";
planet.style.color = "white";
document.body.appendChild(planet);


// Part 2: Create a new div of class "moon" and append it to the planet in the DOM.
var moon = document.createElement('div');
moon.classList.add('moon');
moon.class = "Moon";
moon.style.background = "grey";
moon.style.color = "black";
document.body.appendChild(moon);

