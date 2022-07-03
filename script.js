const rightBtn = document.querySelector('.right-btn')
const leftBtn = document.querySelector('.left-btn')
const cards = document.querySelectorAll('.card')
const cardContainer = document.querySelector('.lap-cards')

rightBtn.addEventListener('click', ()=>{
    cardContainer.classList.add('move-right')
})

leftBtn.addEventListener('click', ()=>{
    cardContainer.classList.add('move-left')
})












