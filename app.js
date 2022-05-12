const ratingCard = document.querySelector(".cards");
const thankYouCard = document.querySelector(".thank-you-container");
const ratings = document.querySelectorAll(".rating");
const btn = document.querySelector(".btn");
const ratingResult = document.querySelector(".rating-result");

window.addEventListener("DOMContentLoaded", function () {
  thankYouCard.classList.add("visibility");
});

ratings.forEach(function (rating) {
  rating.addEventListener("click", function (e) {
    let ratingValue = e.currentTarget.innerHTML;
    btn.addEventListener("click", function () {
      ratingCard.classList.add("visibility");
      const p = document.createElement("p");
      const text = document.createTextNode(
        `You selected ${ratingValue} out of 5`
      );
      p.appendChild(text);
      ratingResult.appendChild(p);
      thankYouCard.classList.remove("visibility");
    });
  });
});

//getRating();
//console.log(ratingNum);
