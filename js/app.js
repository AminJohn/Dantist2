let burger = document.querySelector(".burger_header_btn")
let header = document.querySelector(".header")


burger.addEventListener("click",function(){
    header.classList.toggle("open")
})


let loader = document.querySelector('.inner')
setTimeout(function(){
    loader.remove()
}, 2000)