document.addEventListener('DOMContentLoaded', function(){
  cl = document.querySelector('.compactLuxury');
  clblock = document.querySelector('.compactLuxury__block');
  clbtn = document.querySelector('.compactLuxury-btn');
  infoMenu();
})

function infoMenu() {
  cl.addEventListener("mouseover",_addEvent);
  cl.addEventListener("mouseout",_addEvent);
}


function _addEvent() {
  clbtn.classList.toggle('inview');
  clblock.classList.toggle('inview');
}
