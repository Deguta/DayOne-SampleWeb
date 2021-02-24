document.addEventListener('DOMContentLoaded', function(){
  // items = document.querySelectorAll('.aboutCabin__item');
  cl = document.querySelector('.compactLuxury');
  clblock = document.querySelector('.compactLuxury__block');
  clbtn = document.querySelector('.compactLuxury-btn');
  compactLuxury();
})

function compactLuxury() {
  cl.addEventListener("mouseover",_addEventCompact);
  cl.addEventListener("mouseout",_addEventCompact);
}

function _addEventCompact() {
  clbtn.classList.toggle('inview');
  clblock.classList.toggle('inview');
}
