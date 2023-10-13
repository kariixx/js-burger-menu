
const burger = document.querySelector('.mobile-btn')
const nav = document.querySelector('.nav')
const backdrop = document.querySelector('.backdrop')

burger.addEventListener('click', () => {
    burger.classList.toggle('show-mobile-btn')
    nav.classList.toggle('show-nav')
    backdrop.classList.toggle('show-backdrop')
})



// const api = [
//     {id:1, name:'goods'},
//     {id:2, name:'contacts'},
//     {id:3, name:'address'},
//     {id:4, name:'login'},
//     {id:5, name:'shop'}

// ]
// const headerNav = document.querySelector('.header__nav')
 
// api.forEach(el=>{
//     const first = document.createElement('div')
//     const second = document.createElement('ul')
//     const third = document.createElement('li')
//     const fourth = document.createElement('a')
      
//         first.classList='first'
//          second.classList='nav'
//          third.classList='third'
//          fourth.classList='fourth'
     
//          fourth.textContent = el.name

//          third.append(fourth)
//          second.append(third)
//          first.append(second)
//          headerNav.append(first)
         
// })
    



//modal

// modal

const apply = document.querySelector('.apply')
const modalBackDrop = document.querySelector('.modalBackDrop')
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modalContent')
const modalApplyButton = document.querySelector('.modalApplyButton')
const massage = document.querySelector('.massage')
const modalCloseButton = document.querySelector('.modalCloseButton')

let timer

const remover = () => {
    if(timer) {
        clearTimeout(timer)
    }
    modalBackDrop.classList.remove('modalBackdropActive')
    modal.classList.remove('modalActive')
}

apply.addEventListener('click', () => {
    modalBackDrop.classList.add('modalBackdropActive')
    modal.classList.add('modalActive')
})

modalBackDrop.addEventListener('click', remover)
modalCloseButton.addEventListener('click', remover)

modal.addEventListener('click', (e) => {
    console.dir(e);
    e.stopPropagation()
})

modalApplyButton.addEventListener('click', () => {
    modalContent.classList.add(hideContent)
    .massage.innerHTML = `
    <div class="message">
      <h2>thank you</h2>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
    `
    timer = setTimeout(remover, 2000)
})

apply.addEventListener('click', () => {
    modalContent.classList.remove('hideContent')
    massage.innerHTML = ''
})








