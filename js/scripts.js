document.addEventListener('DOMContentLoaded', function() {
    let gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(function(item) {
        item.addEventListener('click', function() {
            item.classList.toggle('clicked');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(function(item) {
        item.addEventListener('click', function() {
            item.classList.toggle('clicked');
        });
    });
});

let modal = document.querySelector('.modal');
let modalImg = document.getElementById("modalImg"); 

let images = document.querySelectorAll('.grid-item img');

images.forEach(function(img) {
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
});



function downloadImage(imageUrl) {
  let link = document.createElement('a');
  link.href = imageUrl;
  link.download = 'imagem.jpg';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function search() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let images = document.querySelectorAll('.grid-item');

  images.forEach(function(item) {
      let altText = item.querySelector('img').getAttribute('alt').toLowerCase();
      if (altText.includes(input)) {
          item.style.display = "block";
      } else {
          item.style.display = "none";
      }
  });
}

let imageDescriptions = [
  "Social",
  "The Weeknd",
  "Programação",
  "Tony Soprano",
  "Code",
  "Marlon Brando",
  "Patrick Bateman",
  "Wolf of Wall Street",
  "Walter White",
  "Coding",
  "Carro",
  "Suits",
  "The Office",
  "The Office",
  "Breaking Bad"
];


function generateSuggestions() {
  let input = document.getElementById("searchInput");
  let randomDescription = imageDescriptions[Math.floor(Math.random() * imageDescriptions.length)];
  input.placeholder = "Ex: " + randomDescription;
}

window.onload = generateSuggestions;


let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}










