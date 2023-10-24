const swiper = new Swiper('.swiper', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints:{
    320: {
       slidesPerView: 1,
    },
    480: {
       slidesPerView: 2,
    },
    992: {
       slidesPerView: 3,
    }
  },
});

const chooseModel = document.querySelectorAll('.choose-model_btn');
const contentItem = document.querySelectorAll('.content-item');


chooseModel.forEach(function(element) {
  element.addEventListener('click', open)
})

function open(evt){
  const target = evt.currentTarget;
  const button = target.dataset.button;
  const contentActive = document.querySelectorAll(`.${button}`)

  chooseModel.forEach(function (item) {
    item.classList.remove('choose-model_btn-active')
  })
  console.log(chooseModel);
  target.classList.add('choose-model_btn-active')

  contentItem.forEach(function(item) {

    item.classList.remove('content-item__active')
    
  })
  
  contentActive.forEach(function(item) {
    item.classList.add('content-item__active')
  })
  console.log(contentActive);
  console.log(contentItem);

}




