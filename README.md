# Eat Da Burger

Create and eat burgers with the help of an application made with Node.js/Express/MySQL/Handlebars.

## Description

Eat Da Burger demonstrates a simple full stack application following the MVC design pattern.  The front end is made with HTML and CSS and the back end is implemented with Node.js and Express.  HTML templating is done with handlebars.

The user enters a burger in the input area at the bottom of the screen and it is added to the menu on the left side of the page.  It is also added to the burgers database.  When a user clicks "Devour", a burger is taken off the menu and is placed in the eaten category to the right side of the screen.  This is achieved by updating that burger's devoured attribute from false to true in the database.  Handlebars templating using the state of the devoured attribute is what accomplishes the separation between eaten and uneaten burgers.

## Demo

The demo of Eat Da Burger app can be found on [Heroku](http://google.com)