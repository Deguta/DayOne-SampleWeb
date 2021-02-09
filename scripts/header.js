const header = document.querySelector('.header');
// const item = document.querySelector('.project__items');
const topMain = document.querySelector('.topMain');
const cbHeader = function(entries, observer) {
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
io = new IntersectionObserver(cbHeader, options);
io.observe(topMain);

