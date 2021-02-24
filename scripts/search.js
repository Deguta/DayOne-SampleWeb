search = document.querySelector('.search');
footer = document.querySelector('.footer');
searchcb = function(entries, observer) {
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
io = new IntersectionObserver(searchcb, options);
io.observe(footer);