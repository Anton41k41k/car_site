const filterModel = document.querySelectorAll('.filter__nav-btn');
const filterItem = document.querySelectorAll('.filter__models-btn');


filterModel.forEach(function(element) {
  element.addEventListener('click', open)
})

function open(evt){
  const target = evt.currentTarget;
  const button = target.dataset.button;
  const filterActive = document.querySelectorAll(`.${button}`)

  filterItem.forEach(function(item) {

    item.classList.remove('filter-item__active')
    
  })
  
  filterActive.forEach(function(item) {
    item.classList.add('filter-item__active')
  })
}
