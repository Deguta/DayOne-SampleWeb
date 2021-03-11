header = document.querySelector('.header');
let headerTop = document.querySelector('.topMain');
headercb = function(entries, observer) {
  entries.forEach(entry =>  {
    if(entry.isIntersecting) {
       header.classList.remove('outview');
    } else {
      header.classList.add('outview');
    }

  });
}
options = {
  root: null,
  rootMargin: "-99% 0px 0px 0px",

};
io = new IntersectionObserver(headercb, options);
io.observe(headerTop);

