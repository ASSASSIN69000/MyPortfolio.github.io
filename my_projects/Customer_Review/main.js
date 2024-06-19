const reviews = [
  {
    id: 1,
    name: "PewDiePie",
    job: "YouTuber",
    img: "pewds.jpeg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet non ante ac bibendum. Etiam vitae odio risus. Duis dignissim ex quam, id sagittis leo.",
  },
  {
    id: 2,
    name: "Gordan Ramsay",
    job: "Chef",
    img: "gordon 1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet non ante ac bibendum. Etiam vitae odio risus. Duis dignissim ex quam, id sagittis leo.",
  },
  {
    id: 3,
    name: "Eminem",
    job: "Rapper",
    img: "em 1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet non ante ac bibendum. Etiam vitae odio risus. Duis dignissim ex quam, id sagittis leo.",
  },
  {
    id: 4,
    name: "Bruce Lee",
    job: "Martial Artist",
    img: "lee.jpeg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet non ante ac bibendum. Etiam vitae odio risus. Duis dignissim ex quam, id sagittis leo.",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const surprise = document.getElementById("surprise");
const previous = document.querySelector(".previous-btn");
const next = document.querySelector(".next-btn");

// set starting item
let currentItem = 0;

// set initial item
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

// show person
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

// next person
next.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
  });

// previous person
previous.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length-1;
    }
    showPerson(currentItem);  
});

// random person 
surprise.addEventListener('click', function () {
    showPerson(randomPerson());
  })

function randomPerson() {
    return Math.floor(Math.random() * reviews.length);
  }