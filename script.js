document.addEventListener("DOMContentLoaded", function () {
  //swiper
  let swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".rightArrowB",
      prevEl: ".leftArrowB",
    },
  });
  // fancybox
  Fancybox.bind('[data-fancybox]', {

    Carousel: {
      infinite: false
    }
  });


// модальное окно
  let modal = document.querySelector(".modal")
  let btn = document.querySelectorAll(".modalCall")
  let overlay = document.querySelector(".overlay")
  let modalCross=document.querySelector("#crossModal")
  //так как я сделал на каждом слайде кнопки пришлось через форич присваивать 
  // открытие модального окна
  btn.forEach(el => {
    el.addEventListener("click", function () {
      modal.style.display = "block"
      overlay.style.display = "block"
    })
  })
  modalCross.addEventListener("click",function(){
    modal.style.display = "none"
  overlay.style.display = "none"

  })
  // закрытие
overlay.addEventListener("click", function () {
  modal.style.display = "none"
  overlay.style.display = "none"

  console.log("asdas")
})
let burger=document.querySelector("#burgerMenu")
let cross=document.querySelector("#crossClose")
let mobileMenu=document.querySelector(".mobMenu")
burger.addEventListener("click",function(){
  mobileMenu.style.width="100%"

})
cross.addEventListener("click",function(){
  mobileMenu.style.width="0"

})


})
