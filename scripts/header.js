// document.addEventListener('DOMContentLoaded', function(){

//   console.log("test");
//   header = document.querySelector('.header');

// })

header = document.querySelector('.header');
let topp = document.querySelector('.topMain');
headercb = function(entries, observer) {
  entries.forEach(entry =>  {
    if(entry.isIntersecting) {
      //  console.log('inview');
       header.classList.remove('outview');
    } else {
      // console.log('outview');
      header.classList.add('outview');
    }

  });
  // alert('intersecting');
}
options = {
  root: null,
  rootMargin: "-99% 0px 0px 0px",

};
io = new IntersectionObserver(headercb, options);
io.observe(topp);

