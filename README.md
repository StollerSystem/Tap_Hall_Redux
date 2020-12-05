# _Viking Ship Tap Hall + Redux_

#### _An app to keep track of kegs on tap - refactored to utilize Redux, 12/04/20_

#### By _**Ben Stoller**_

##### Check it out: http://StollerSystem.github.io/Tap_Room_Redux

## Description:

This app will let you keep track of all the kegs you have on tap. The page displays a master list of kegs, each listing displays basic information and has two buttons: 
(Pour pint) - click this when you pour a pint to reduce the quantity, when you get to 10 or below it will display an alert warning you its low and when quantity hits 0 it will alert you.
(Detail) - Will take you to a view displaying the details for a particular beverage. From there you have two more buttons: (Edit) and (Delete).
Delete will delete the keg from the list and Edit will take you to a new view Form where you can edit all the details. 
At the bottom of the List there is a button to add a Keg to the list. 
Then will take you to a form where you can fill in all the details and add a new keg! Yaaarg!

### Here are some user stories:

* As a user, I want to see a list/menu of all available kegs. For each keg, I want to see its name, brand, price and alcoholContent (or perhaps something like flavor for a kombucha store).
* As a user, I want to submit a form to add a new keg to a list.
* As a user, I want to be able to click on a keg to see its detail page.
* As a user, I want to see how many pints are left in a keg. A full keg has roughly 124 pints.
* As a user, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1.
* Pints should not be able to go below 0.

### Further Exploration:

* As a user, I want the option to edit a keg's properties after entering them just in case I make a mistake.
* As a user, I want to be able to delete a keg.
* As a user, I want a keg to update to say "Out of Stock" once it's empty.
* As a user, I want kegs with less than 10 pints to include a message that says "Almost Empty" so I can try a pint before it's gone!
* As a user, I want this application to be nicely styled.

## React Component Diagram:

![Alt text](./TapRoomDiagram.png?raw=true "Diagram")

## Setup/Installation Requirements:

* Clone this project using the 'git clone' command in your terminal/command line.
* Navigate to the cloned folder in your terminal and run 'npm install' to download all dependencies for the webpack environment.
* Open the cloned folder in a text editor of your choice.
* Run "npm start" to run the app in your browser! 


## Support and contact details:

https://github.com/StollerSystem

## Technologies Used:

Redux, JavaScript, Node.Js, React, CSS/Bootstrap, Webpack, HTML5, VSCode

### License:

MIT

Copyright (c) 2020 **Ben Stoller**

