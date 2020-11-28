
const options = {
  threshold: 1
}

const images = document.querySelectorAll('img.lazy');

const observer = new IntersectionObserver(imageObserver, options);

function imageObserver(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const img_src = img.dataset.src;
      console.log("Lazy loading ", img);
      img.src = img_src;
      observer.unobserve(img);
    }
  })
}



images.forEach(img => {
  observer.observe(img);
})