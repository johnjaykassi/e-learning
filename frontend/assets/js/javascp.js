
// Récupérations des liens à travers les id 
let link = document.querySelectorAll("a");
let scolaire = document.getElementById('lien-scolaire');
let educationFinanciere = document.getElementById('lien-education');
let civilisation = document.getElementById('lien-civilisation');
console.log(link, scolaire);

// Récupérations des div

let divEducation = document.getElementById("education-finance");
let divCivilisation = document.getElementById("Civilisations-africaine");

console.log(divEducation);

document.addEventListener("DOMContentLoaded", function () {
    let lien = document.getElementById("lien-scolaire");
    let maDiv = document.getElementById("scolaire");

    lien.addEventListener("click", function () {
        if (maDiv.style.display === "none") {
            divEducation.style.display = "none";
            maDiv.style.display = "block"; // Affiche la div
        } else {
            maDiv.style.display = "none"; // Masque la div
            // maDiv.style.display = "block";
            divEducation.style.display = "block";
        }
    });

    educationFinanciere.addEventListener("click", function () {
        if (divEducation.style.display === "none") {
            maDiv.style.display = "none";
            divEducation.style.display = "block"; // Affiche la div
        } else {
            divEducation.style.display = "none"; // Masque la div
            // divEducation.style.display = "block";
        }
    });

    civilisation.addEventListener("click", function () {
        if (divCivilisation.style.display === "none") {
            divCivilisation.style.display = "block"; // Affiche la div
            maDiv.style.display = "none";
            divEducation.style.display = "none"
        } else {
            divCivilisation.style.display = "none"; // Masque la div
            // divEducation.style.display = "block";
        }
    });



    
});