let index = 0;
const images = document.querySelectorAll('.carousel-img');

setInterval(() => {
  index = (index + 1) % images.length;
  images.forEach((img, i) => {
    img.style.transform = `translateX(-${index * 100}%)`;
  });
}, 3000);