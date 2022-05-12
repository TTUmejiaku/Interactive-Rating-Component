const ratingCard = document.querySelector(".cards");
const thankYouCard = document.querySelector(".thank-you-container");
const ratings = document.querySelectorAll(".rating");
const btn = document.querySelector(".btn");
const ratingResult = document.querySelector(".rating-result");

ratings.forEach(function (rating) {
  rating.addEventListener("click", function (e) {
    let ratingValue = e.currentTarget.innerHTML;
    btn.addEventListener("click", function () {
      ratingCard.classList.add("hide");
      const p = document.createElement("p");
      p.textContent = `You selected ${ratingValue} out of 5`;
      ratingResult.appendChild(p);
      thankYouCard.classList.remove("hide");
    });
  });
});

//getRating();
//console.log(ratingNum);
