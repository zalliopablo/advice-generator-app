# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://github.com/zalliopablo/advice-generator-app). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./design/desktop-preview.jpg)



### Links

- Solution URL: [Add solution URL here](https://github.com/zalliopablo/advice-generator-app)
- Live Site URL: [Add live site URL here](https://advice-generate-app.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SASS preprocessor
- Flexbox
- Mobile-first workflow
- [Api-advices](https://api.adviceslip.com/) - Api JSON



### What I learned

In this project, I've had the opportunity to learn and apply various web technologies, including SASS, JavaScript, and making API requests using the Fetch method.

### Learning and Application

### SASS: 
I've used SASS to enhance the organization and maintainability of styles in my project. The ability to use variables, mixins, and nesting has greatly simplified the CSS development process.

### JavaScript: 
Through JavaScript, I've created dynamic functionalities for my web application. From DOM manipulation to event handling, JavaScript has been essential in making my project interactive and responsive.

### API Requests with Fetch: 
Implementing API requests using the Fetch method has been a crucial part of this project. This technology has allowed me to fetch real-time data and update the user interface dynamically, providing a more enriching experience for the end user.

To see how you can add code snippets, see below:


```scss
 .card {
    text-align: center;
    color: $lightCyan;
    margin: 1.5rem;
    h1 {
      color: $neonGreen;
      font-size: 0.4rem;
      letter-spacing: 5px;
    }
 }
```
```js
try {
        let res = await fetch("https://api.adviceslip.com/advice");
        let json = await res.json()
}
```



## Author

- Website - [Pablo Zallio Web Design](https://github.com/zalliopablo)
- Frontend Mentor - [@zalliopablo](https://www.frontendmentor.io/profile/zalliopablo)


