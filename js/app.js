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











//Slider 2
const slider2  = document.querySelector('#slider2')
const sliderItem2 = Array.from(slider2.children)
const btnNext2 = document.querySelector('.btnNext2')
const btnPrev2 = document.querySelector('.btnPrev2')

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
btnNext2.onclick = function(){
    const currentSlide = slider2.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index
 
    currentSlide.classList.add('hidden')
    currentSlide.removeAttribute('data-active')
 
    let nextSlideIndex;
         if(currentSlideIndex+1==sliderItem2.length){
             nextSlideIndex=0
         }else{
             nextSlideIndex = currentSlideIndex+1
         }
 
         const nextSlide = slider2.querySelector(`[data-index="${nextSlideIndex}"]`)
         nextSlide.classList.remove('hidden')
         nextSlide.setAttribute('data-active',"")
 }
 
 btnPrev2.onclick = function(){
     const currentSlide = slider2.querySelector('[data-active]')
     const currentSlideIndex = +currentSlide.dataset.index
  
     currentSlide.classList.add('hidden')
     currentSlide.removeAttribute('data-active')
  
     let nextSlideIndex;
          if(currentSlideIndex==0){
              nextSlideIndex=sliderItem2.length-1
          }else{
              nextSlideIndex = currentSlideIndex-1
          }
  
          const nextSlide = slider2.querySelector(`[data-index="${nextSlideIndex}"]`)
          nextSlide.classList.remove('hidden')
          nextSlide.setAttribute('data-active',"")
  }




  //slider3
  const slider3  = document.querySelector('#slider3')
const sliderItem3 = Array.from(slider3.children)
const btnNext3 = document.querySelector('.btnNext3')
const btnPrev3 = document.querySelector('.btnPrev3')


sliderItem3.forEach(function(slide, index){
     

    if(index !==0 ){
       slide.classList.add('hidden')
    }

    slide.dataset.index = index

    sliderItem3[0].setAttribute('data-active', "")

    slide.addEventListener('click',function(){
       slide.classList.add('hidden')
       slide.removeAttribute('data-active')


       let nextSlideIndex;
       if(index+1==sliderItem3.length){
           nextSlideIndex=0
       }else{
           nextSlideIndex = index+1
       }
       // const nextSlideIndex = +slide.dataset.index+1

       const nextSlide = slider3.querySelector(`[data-index ="${nextSlideIndex}"]`)
       nextSlide.classList.remove('hidden')
       nextSlide.setAttribute('data-active',"")
    })
})
btnNext3.onclick = function(){
    const currentSlide = slider3.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index
 
    currentSlide.classList.add('hidden')
    currentSlide.removeAttribute('data-active')
 
    let nextSlideIndex;
         if(currentSlideIndex+1==sliderItem3.length){
             nextSlideIndex=0
         }else{
             nextSlideIndex = currentSlideIndex+1
         }
 
         const nextSlide = slider3.querySelector(`[data-index="${nextSlideIndex}"]`)
         nextSlide.classList.remove('hidden')
         nextSlide.setAttribute('data-active',"")
 }
 
 btnPrev3.onclick = function(){
     const currentSlide = slider3.querySelector('[data-active]')
     const currentSlideIndex = +currentSlide.dataset.index
  
     currentSlide.classList.add('hidden')
     currentSlide.removeAttribute('data-active')
  
     let nextSlideIndex;
          if(currentSlideIndex==0){
              nextSlideIndex=sliderItem3.length-1
          }else{
              nextSlideIndex = currentSlideIndex-1
          }
  
          const nextSlide = slider3.querySelector(`[data-index="${nextSlideIndex}"]`)
          nextSlide.classList.remove('hidden')
          nextSlide.setAttribute('data-active',"")
  }


    //slider4
    const slider4  = document.querySelector('#slider4')
    const sliderItem4 = Array.from(slider4.children)
    const btnNext4 = document.querySelector('.btnNext4')
    const btnPrev4 = document.querySelector('.btnPrev4')
    
    
    sliderItem4.forEach(function(slide, index){
         
    
        if(index !==0 ){
           slide.classList.add('hidden')
        }
    
        slide.dataset.index = index
    
        sliderItem4[0].setAttribute('data-active', "")
    
        slide.addEventListener('click',function(){
           slide.classList.add('hidden')
           slide.removeAttribute('data-active')
    
    
           let nextSlideIndex;
           if(index+1==sliderItem4.length){
               nextSlideIndex=0
           }else{
               nextSlideIndex = index+1
           }
           // const nextSlideIndex = +slide.dataset.index+1
    
           const nextSlide = slider4.querySelector(`[data-index ="${nextSlideIndex}"]`)
           nextSlide.classList.remove('hidden')
           nextSlide.setAttribute('data-active',"")
        })
    })
    btnNext4.onclick = function(){
        const currentSlide = slider4.querySelector('[data-active]')
        const currentSlideIndex = +currentSlide.dataset.index
     
        currentSlide.classList.add('hidden')
        currentSlide.removeAttribute('data-active')
     
        let nextSlideIndex;
             if(currentSlideIndex+1==sliderItem4.length){
                 nextSlideIndex=0
             }else{
                 nextSlideIndex = currentSlideIndex+1
             }
     
             const nextSlide = slider4.querySelector(`[data-index="${nextSlideIndex}"]`)
             nextSlide.classList.remove('hidden')
             nextSlide.setAttribute('data-active',"")
     }
     
     btnPrev4.onclick = function(){
         const currentSlide = slider4.querySelector('[data-active]')
         const currentSlideIndex = +currentSlide.dataset.index
      
         currentSlide.classList.add('hidden')
         currentSlide.removeAttribute('data-active')
      
         let nextSlideIndex;
              if(currentSlideIndex==0){
                  nextSlideIndex=sliderItem4.length-1
              }else{
                  nextSlideIndex = currentSlideIndex-1
              }
      
              const nextSlide = slider4.querySelector(`[data-index="${nextSlideIndex}"]`)
              nextSlide.classList.remove('hidden')
              nextSlide.setAttribute('data-active',"")
      }
    







    
    
    



  const controlBlockSlide = document.querySelector('.controlBlockSlide')
  const arrCBS = Array.from(controlBlockSlide.children)
  const buttCBS1 = document.querySelector('#btnCBS1')
  const buttCBS2 = document.querySelector('#btnCBS2')
  const buttCBS3 = document.querySelector('#btnCBS3')
  const buttCBS4 = document.querySelector('#btnCBS4')


  
  for(let i=0; i<arrCBS.length; i++){
    arrCBS[i+1].classList.add('hiddenExp')
    
    buttCBS1.addEventListener('click',() =>{
        arrCBS[0].classList.remove('hiddenExp')
        arrCBS[1].classList.add('hiddenExp')
        arrCBS[2].classList.add('hiddenExp')
        arrCBS[3].classList.add('hiddenExp')
    })
    buttCBS2.addEventListener('click',() =>{
        arrCBS[1].classList.remove('hiddenExp')
        arrCBS[0].classList.add('hiddenExp')
        arrCBS[2].classList.add('hiddenExp')
        arrCBS[3].classList.add('hiddenExp')
    })
    buttCBS3.addEventListener('click',() =>{
        arrCBS[3].classList.remove('hiddenExp')
        arrCBS[0].classList.add('hiddenExp')
        arrCBS[1].classList.add('hiddenExp')
        arrCBS[2].classList.add('hiddenExp')
    })
    buttCBS4.addEventListener('click',() =>{
        arrCBS[2].classList.remove('hiddenExp')
        arrCBS[0].classList.add('hiddenExp')
        arrCBS[1].classList.add('hiddenExp')
        arrCBS[3].classList.add('hiddenExp')
    })
  }
  



