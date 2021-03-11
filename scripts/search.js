search = document.querySelector('.search');
footer = document.querySelector('.footer');
searchcb = function(entries, observer) {
  entries.forEach(entry =>  {
    if(entry.isIntersecting) {
       search.classList.add('outview');
    } else {
      search.classList.remove('outview');
    }
  });
}
options = {
  root: null,
};
io = new IntersectionObserver(searchcb, options);
io.observe(footer);