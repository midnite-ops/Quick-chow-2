import { meals } from './meals.js'

document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.nav-head-js');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const imgScroll = document.querySelector('.logo-img-js');
    const buttonScroll = document.querySelector('.header-btn-js');

    if(scrollPosition > 50){
        navbar.classList.add('nav-scroll', 'header-btn-scroll')
        imgScroll.innerHTML = `
            <img class="quick-chow-logo" src="assets/QUICK CHOW FULL LOGO 5.png" alt="Quick Chow Logo">
        `
    }else if(scrollPosition <= 50){
        navbar.classList.remove('nav-scroll','header-btn-scroll')
        imgScroll.innerHTML = `
            <img class="quick-chow-logo" src="assets/QUICK CHOW FULL LOGO 2.png" alt="Quick Chow Logo">
        `
    }
})


// This code generates the diffrent resturants we are hosting on the website
let mealHTML = ''
meals.forEach((value) => {
    mealHTML += `
    <div class="food-div">
        <img src="${value.picture}" class="food-img" alt="food">
        <div class="food-div-content">
        <h5>${value.resturant}</h5>
        <p>
            All day treats, enjoy carefully curated meals
        </p>
        <a href="">Order now</a>
        </div>
    </div>
    `
})
document.querySelector('.resturant-grid-js').innerHTML = mealHTML;