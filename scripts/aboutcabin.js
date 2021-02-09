class Menu {
  constructor() {
    this.DOM = {};
    this.DOM.cabins = document.querySelectorAll('.aboutCabin__container');
    this.DOM.item1 = document.querySelector('.aboutCabin__item1');
    this.DOM.item2 = document.querySelector('.aboutCabin__item2');
    // this.DOM.txt = document.querySelector('.aboutCabin__item--txt');
    // this.DOM.txt = document.querySelectorAll('.aboutCabin__item--txt');
    // this.DOM.btn = document.querySelectorAll('.aboutCabin__item--btn');
    // this.DOM.block = document.querySelectorAll('.aboutCabin__block');
    // aaa = this.DOM.item1.querySelector('.aboutCabin__block');
    console.log(this.DOM.cabins);
  
    // compact & luxury
    this.DOM.cl = document.querySelector('.compactLuxury');
    this.DOM.clblock = document.querySelector('.compactLuxury__block');
    this.DOM.clbtn = document.querySelector('.compactLuxury-btn');

    this._addEvent();
  }

  _addEventAbout() {
    console.log(this);
    // this.DOM.btn.forEach(function(val){
    //   val.classList.toggle('inview');
    // });
    // this.DOM.btn.forEach(function(val){
    //   val.classList.toggle('inview');
    // });

    // this.DOM.block.forEach(function(val){
    //   val.classList.toggle('inview');
    // });

    // this.DOM.txt.forEach(function(val){
    //   val.classList.toggle('inview');
    // });
  }

  _addEventCL() {
    this.DOM.clbtn.classList.toggle('inview');
    this.DOM.clblock.classList.toggle('inview');
  }

  _addEvent() {
    // this.DOM.item1.addEventListener("mouseover", this._addEventAbout.bind(this));
    // this.DOM.item1.addEventListener("mouseout", this._addEventAbout.bind(this));
    this.DOM.cabins.forEach(function(val){
      // val.classList.toggle('inview');
      val.addEventListener("mouseover", _addEventAbout);
      val.cabins.addEventListener("mouseout", _addEventAbout);
    });
    // this.DOM.cabins.addEventListener("mouseover", this._addEventAbout.bind(this));
    // this.DOM.cabins.addEventListener("mouseout", this._addEventAbout.bind(this));

    this.DOM.cl.addEventListener("mouseover", this._addEventCL.bind(this));
    this.DOM.cl.addEventListener("mouseout", this._addEventCL.bind(this));

  }
}

new Menu();



// function infoMenu() {
//   slides.forEach(function(val){
//     val.addEventListener("mouseover",_addEvent);
//     val.addEventListener("mouseout",_addEvent);
//   });
// }



// document.addEventListener('DOMContentLoaded', function(){
//   // aboutus
//   item1 = document.querySelector('.aboutCabin__item1');
//   item2 = document.querySelector('.aboutCabin__item2');
//   txt = document.querySelector('.aboutCabin__item--txt');
//   btn = document.querySelector('.aboutCabin__item--btn');
//   block = document.querySelector('.aboutCabin__block');
//   console.log(item2);

//   // compact & luxury
//   cl = document.querySelector('.compactLuxury');
//   clblock = document.querySelector('.compactLuxury__block');
//   clbtn = document.querySelector('.compactLuxury-btn');

//   infoMenuAbout();
//   infoMenuCL();
// })

//   // aboutus
// function infoMenuAbout() {
//   item1.addEventListener("mouseover",_addEventAbout);
//   item1.addEventListener("mouseout",_addEventAbout);

//   item2.addEventListener("mouseover",_addEventAbout);
//   item2.addEventListener("mouseout",_addEventAbout);
// }
// function _addEventAbout() {
//   txt.classList.toggle('inview');
//   btn.classList.toggle('inview');
//   block.classList.toggle('inview');
// }


//   // compact & luxury
// function infoMenuCL() {
//   cl.addEventListener("mouseover",_addEventCL);
//   cl.addEventListener("mouseout",_addEventCL);
// }
// function _addEventCL() {
//   clbtn.classList.toggle('inview');
//   clblock.classList.toggle('inview');
// }






// class MobileMenu {
//   constructor() {
//     this.DOM = {};
//     this.DOM.btn = document.querySelector('.mobile-menu-icon');
//     this.DOM.body = document.querySelector('body');
//     this.eventType = this._getEventType();
//     this._addEvent();
//   }

//   _getEventType() {
//     return window.ontouchstart ? 'touchstart' : 'click';
//   }

//   _toggle() {
//     this.DOM.body.classList.toggle('menu-open');
//   }

//   _addEvent() {
//     this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
//   }
// }

// new MobileMenu();