// Show letter
document.getElementById("revealBtn").addEventListener("click", function() {
  document.getElementById("letter").classList.add("show");
});

// Background photo animation (looping twinkle effect)
const images = [
'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg',
  'img/7.jpg',
  'img/8.jpg',
    'img/9.jpg',
  'img/15.jpg',
];

const background = document.querySelector('.background');

function createTwinkle() {
  const src = images[Math.floor(Math.random() * images.length)];
  const img = document.createElement('img');
  img.src = src;

  // random size and position
  const size = Math.random() * 100 + 80; // between 80px and 180px
  img.style.width = `${size}px`;
  img.style.height = `${size}px`;
  img.style.top = Math.random() * 80 + '%';
  img.style.left = Math.random() * 80 + '%';

  // add to page
  background.appendChild(img);

  // remove after animation ends
  setTimeout(() => {
    img.remove();
  }, 2500); // match animation duration
}

// make them pop randomly forever
setInterval(createTwinkle, 800);
