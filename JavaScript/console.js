const searchInput = document.getElementById("search");

const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function () {

    let value = this.value.toLowerCase().trim();

    cards.forEach(function(card){

        let title = card.querySelector("h3").textContent.toLowerCase();

        if(title.includes(value)){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

});