const ratingCard = document.querySelector(".cards");
const thankYouCard = document.querySelector(".thank-you-container");
const ratings = document.querySelectorAll(".rating");
const btn = document.querySelector(".btn");
const ratingResult = document.querySelector(".rating-result");
let ratingValue;

ratings.forEach(function (rating) {
  rating.addEventListener("click", function (e) {
    document.querySelector(".rating.active")?.classList.remove("active");
    e.target.classList.add("active");
    ratingValue = e.currentTarget.innerHTML;
  });
});

// ratings.forEach(function (rating, index) {
//   rating.addEventListener("click", function (e) {
//     document.querySelector(".rating.active")?.classList.remove("active");
//     e.target.classList.add("active");
//     ratingValue = index + 1;
//   });
// });

btn.addEventListener("click", function () {
  ratingCard.classList.add("hide");
  const p = document.createElement("p");
  p.textContent = `You selected ${ratingValue} out of 5`;
  ratingResult.appendChild(p);
  thankYouCard.classList.remove("hide");
});
