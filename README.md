# Ask Alice: A Recall Rabbit Hole

## Description

For the first group project, we were tasked with developing an interactive front-end web application that uses two different server side API's. We came up with a search engine that fetches from the FDA's API to display information on a range of recalled prescription drugs, and then we fetch from Pexel API to generate random images that accompany the drug information.

The Acceptance Criteria is as follows:

GIVEN the user is trying to research a drug to see it's recall history

WHEN the types the name of the drug in the search engine and clicks SEARCH

THEN the user is presented with information including recall status and history as well as the name of the developer and its parent company

WHEN the user reloads the page or clicks the back button

THEN the drugs that the user has searched in the past will be suggested beneath the search bar


## Usage

When the user loads the page, they will be presented with the instructions: Scroll down to select a range of two dates. When the user selects the inputs, an interactive calendar displays. When a valid range of dates is selected and the user clicks "Recall Rabbit Hole" they are taken to a new page.

The new page, or the "Rabbit Hole" displays to the user a random drug that was recalled within the selected range of dates, as well as specific information on the drug. There is also a random image related to prescription drugs that accompanies the information.

At the bottom, the user is presented with the total amount of drugs recalled within their selected range of dates, which leads to the question: Do you want to go back to search dates, or do you want to continue down the rabbit hole?

If the user continues down the rabbit hole, the page reloads with a different random drug and a different random image.

## Screenshots

![Landing page of Ask Alice.](./photos/ask-alice_screenshot1.png)

![Selecting range of dates before searching.](./photos/ask-alice_screenshot2.png)

![Results page.](./photos/ask-alice_screenshot3.png)

![What do you want to do now?](./photos/ask-alice_screenshot4.png)



## Credits

#### Developers

Leah Harden: HTML, CSS

Daniel Oliva Figueroa: JavaScript

Andrew Bock: HTML, CSS

Dynashia Lewis: Pexels API, README

#### Utilized Technologies

HTML/CSS/Javascript

FDA API

Pexels API

UI Kit

DayJS

jQuery

## License

N/A