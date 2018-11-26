var currentDate = new Date();
var currentMonth = currentDate.getMonth() + 1;
var Move1 = document.querySelector(".movie-1");
var Move2 = document.querySelector(".movie-2");
var Move3 = document.querySelector(".movie-3");


if (currentMonth <= 6) {
  Move1.innerHTML = `
  <img src="accets/img/Avengers.jpg" alt="">
  <div class="overlay">
    <a href="https://www.youtube.com/watch?v=6ZfuNTqbHE8" target="_blank">Movie Trailer</a>
  </div>
  `
} else if (currentMonth >= 7) {
  Move1.innerHTML = `
  <img src="accets/img/bee.jpg" alt="">
  <div class="overlay">
    <a href="https://www.youtube.com/watch?v=VONRQMx78YI" target="_blank">Movie Trailer</a>
  </div>
  `
}

if (currentMonth <= 6) {
  Move2.innerHTML = `
  <img src="accets/img/Avengers.jpg" alt="">
  <div class="overlay">
    <a href="https://www.youtube.com/watch?v=6ZfuNTqbHE8" target="_blank">Movie Trailer</a>
  </div>
  `
} else if (currentMonth >= 7) {
  Move2.innerHTML = `
  <img src="accets/img/paddington.jpg" alt="">
  <div class="overlay">
    <a href="https://www.youtube.com/watch?v=52x5HJ9H8DM" target="_blank">Movie Trailer</a>
  </div>
  `
}

if (currentMonth <= 6) {
  Move3.innerHTML = `
  <img src="accets/img/Avengers.jpg" alt="">
  <div class="overlay">
    <a href="https://www.youtube.com/watch?v=6ZfuNTqbHE8" target="_blank">Movie Trailer</a>
  </div>
  `
} else if (currentMonth >= 7) {
  Move3.innerHTML = `
  <img src="accets/img/emoji.jpg" alt="">
  <div class="overlay">
    <a href="https://www.youtube.com/watch?v=o_nfdzMhmrA" target="_blank">Movie Trailer</a>
  </div>
  `
}
