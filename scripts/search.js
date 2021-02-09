const search = document.querySelector('.search');
const footer = document.querySelector('.footer');
const cbSearch = function(entries, observer) {
  entries.forEach(entry =>  {
    if(entry.isIntersecting) {
      //  console.log('inview');
       search.classList.add('outview');
    } else {
      // console.log('outview');
      search.classList.remove('outview');
    }

  });
  // alert('intersecting');
}
options = {
  root: null,
  // rootMargin: "0px 0px 0px 0px",

};
io = new IntersectionObserver(cbSearch, options);
io.observe(footer);