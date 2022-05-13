const ratingCard = document.querySelector(".cards");
const thankYouCard = document.querySelector(".thank-you-container");
const ratings = document.querySelectorAll(".rating");
const ratingResult = document.querySelector(".rating-result");
const btn = document.querySelector(".btn");
let ratingValue = 0;

/****** first solution ******/

ratings.forEach(function (rating) {
  rating.addEventListener("click", function (e) {
    document.querySelector(".rating.active")?.classList.remove("active");
    e.target.classList.add("active");
    ratingValue = e.currentTarget.innerHTML;
    btn.removeAttribute("disabled");
  });
});

btn.addEventListener("click", function () {
  ratingCard.classList.add("hide");
  const p = document.createElement("p");
  p.textContent = `You selected ${ratingValue} out of 5`;
  ratingResult.appendChild(p);
  thankYouCard.classList.remove("hide");
});

/******* second solution ******/

// ratings.forEach(function (rating) {
//   rating.addEventListener("click", function (e) {
//     document.querySelector(".rating.active")?.classList.remove("active");
//     e.target.classList.add("active");
//     ratingValue = e.currentTarget.innerHTML;
//   });
// });

// btn.addEventListener("click", function () {
//   if (ratingValue > 0) {
//     ratingCard.classList.add("hide");
//     const p = document.createElement("p");
//     p.textContent = `You selected ${ratingValue} out of 5`;
//     ratingResult.appendChild(p);
//     thankYouCard.classList.remove("hide");
//   }
// });

/***** another way of getting the rating value ****/

// ratings.forEach(function (rating, index) {
//   rating.addEventListener("click", function (e) {
//     document.querySelector(".rating.active")?.classList.remove("active");
//     e.target.classList.add("active");
//     ratingValue = index + 1;
//   });
// });
