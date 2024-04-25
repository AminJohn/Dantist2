let burger = document.querySelector(".burger_header_btn")
let header = document.querySelector(".header")


burger.addEventListener("click",function(){
    header.classList.toggle("open")
})


let loader = document.querySelector('.inner')
setTimeout(function(){
    loader.remove()
}, 2000)








const slider  = document.querySelector('#slider')
const sliderItem = Array.from(slider.children)
const btnNext = document.querySelector('.btnNext')
const btnPrev = document.querySelector('.btnPrev')

sliderItem.forEach(function(slide, index){
     

     if(index !==0 ){
        slide.classList.add('hidden')
     }

     slide.dataset.index = index

     sliderItem[0].setAttribute('data-active', "")

     slide.addEventListener('click',function(){
        slide.classList.add('hidden')
        slide.removeAttribute('data-active')


        let nextSlideIndex;
        if(index+1==sliderItem.length){
            nextSlideIndex=0
        }else{
            nextSlideIndex = index+1
        }
        // const nextSlideIndex = +slide.dataset.index+1

        const nextSlide = slider.querySelector(`[data-index ="${nextSlideIndex}"]`)
        nextSlide.classList.remove('hidden')
        nextSlide.setAttribute('data-active',"")
     })
})

btnNext.onclick = function(){
   const currentSlide = slider.querySelector('[data-active]')
   const currentSlideIndex = +currentSlide.dataset.index

   currentSlide.classList.add('hidden')
   currentSlide.removeAttribute('data-active')

   let nextSlideIndex;
        if(currentSlideIndex+1==sliderItem.length){
            nextSlideIndex=0
        }else{
            nextSlideIndex = currentSlideIndex+1
        }

        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
        nextSlide.classList.remove('hidden')
        nextSlide.setAttribute('data-active',"")
}

btnPrev.onclick = function(){
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index
 
    currentSlide.classList.add('hidden')
    currentSlide.removeAttribute('data-active')
 
    let nextSlideIndex;
         if(currentSlideIndex==0){
             nextSlideIndex=sliderItem.length-1
         }else{
             nextSlideIndex = currentSlideIndex-1
         }
 
         const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
         nextSlide.classList.remove('hidden')
         nextSlide.setAttribute('data-active',"")
 }



 AOS.init();







//Slider 2
const slider2  = document.querySelector('#slider2')
const sliderItem2 = Array.from(slider2.children)

sliderItem2.forEach(function(slide, index){
     

    if(index !==0 ){
       slide.classList.add('hidden')
    }

    slide.dataset.index = index

    sliderItem2[0].setAttribute('data-active', "")

    slide.addEventListener('click',function(){
       slide.classList.add('hidden')
       slide.removeAttribute('data-active')


       let nextSlideIndex;
       if(index+1==sliderItem2.length){
           nextSlideIndex=0
       }else{
           nextSlideIndex = index+1
       }
       // const nextSlideIndex = +slide.dataset.index+1

       const nextSlide = slider2.querySelector(`[data-index ="${nextSlideIndex}"]`)
       nextSlide.classList.remove('hidden')
       nextSlide.setAttribute('data-active',"")
    })
})



