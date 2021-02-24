document.addEventListener('DOMContentLoaded', function(){
  items = document.querySelectorAll('.aboutCabin__item');
  aboutCabin();
})

function aboutCabin() {
  items.forEach(function(val){
    val.addEventListener("mouseover",_addEventAbout);
    val.addEventListener("mouseout",_addEventAbout);
  });
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
