document.addEventListener('DOMContentLoaded', function(){
  items = document.querySelectorAll('.aboutCabin__item');
  cl = document.querySelector('.compactLuxury');
  clblock = document.querySelector('.compactLuxury__block');
  clbtn = document.querySelector('.compactLuxury-btn');
  aboutcabinMenu();
})

function aboutcabinMenu() {
  items.forEach(function(val){
    val.addEventListener("mouseover",_addEventAbout);
    val.addEventListener("mouseout",_addEventAbout);
  });
  cl.addEventListener("mouseover",_addEventCompact);
  cl.addEventListener("mouseout",_addEventCompact);
}


function _addEventAbout() {
  btn = this.getElementsByClassName('aboutCabin__item--btn');
  btns = Array.prototype.slice.call(btn);//配列に変換
  btns.forEach(function(v){
    v.classList.toggle('inview');
  });

  txt = this.getElementsByClassName('aboutCabin__item--txt');
  txts = Array.prototype.slice.call(txt);//配列に変換
  txts.forEach(function(v){
    v.classList.toggle('inview');
  });

  container = this.getElementsByClassName('aboutCabin__container');
  containers = Array.prototype.slice.call(container);//配列に変換
  containers.forEach(function(v){
    v.classList.toggle('inview');
  });
}

function _addEventCompact() {
  clbtn.classList.toggle('inview');
  clblock.classList.toggle('inview');
}