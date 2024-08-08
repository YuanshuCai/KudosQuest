// Random number generator for likes
function getRandomLikes(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Static array data of kudos
const kudos = [
  {
    name: "Abraham",
    kudo: "Good with code",
    likes: getRandomLikes(1, 5),
  },
  {
    name: "Annie",
    kudo: "Asks good questions",
    likes: getRandomLikes(3, 7),
  },
  {
    name: "Chelsea Kerr",
    kudo: "Improved style",
    likes: getRandomLikes(1, 5),
  },
  {
    name: "Emma Hu",
    kudo: "Good analogies",
    likes: getRandomLikes(1, 5),
  },
  {
    name: "Fateme",
    kudo: "Great at explaining",
    likes: getRandomLikes(3, 7),
  },
  {
    name: "Hana Fazal",
    kudo: "Crushed BEM",
    likes: getRandomLikes(2, 9),
  },
  {
    name: "Henry Kim",
    kudo: "Essential part of team!!",
    likes: getRandomLikes(3, 7),
  },
  {
    name: "Heela",
    kudo: "Helps everyone!",
    likes: getRandomLikes(3, 7),
  },
  {
    name: "Huiyi Wang",
    kudo: "Improvement thru the roof",
    likes: getRandomLikes(3, 7),
  },
  {
    name: "Jelena Avramovic",
    kudo: "Resourceful",
    likes: getRandomLikes(2, 9),
  },
  {
    name: "Jessica",
    kudo: "Never stops trying!!!",
    likes: getRandomLikes(1, 5),
  },
  {
    name: "Justin Butler",
    kudo: "Solutions machine",
    likes: getRandomLikes(1, 5),
  },
  {
    name: "Katarina Musladin",
    kudo: "Too legit to quit",
    likes: getRandomLikes(1, 5),
  },
  {
    name: "Kate Antonova",
    kudo: "Always keeps going",
    likes: getRandomLikes(1, 5),
  },
  {
    name: "Kayla",
    kudo: "Demolished imposter syndrome",
    likes: getRandomLikes(3, 7),
  },
  {
    name: "Kristina Tripak",
    kudo: "Assembled the avengers",
    likes: getRandomLikes(2, 9),
  },
  {
    name: "Lily Le",
    kudo: "BEM 10/10",
    likes: getRandomLikes(1, 5),
  },
  {
    name: "Mashal Vajoo ",
    kudo: "Tenacious af",
    likes: getRandomLikes(3, 7),
  },
  {
    name: "Michelle Rafols ",
    kudo: "HTML/CSS god",
    likes: getRandomLikes(2, 9),
  },
  {
    name: "Mingxia",
    kudo: "talk is cheap show me the code",
    likes: getRandomLikes(2, 9),
  },
  {
    name: "Saba Namdari",
    kudo: "JS fears me",
    likes: getRandomLikes(1, 5),
  },
  {
    name: "Shipa",
    kudo: "Conceptual master",
    likes: getRandomLikes(2, 9),
  },
  {
    name: "Scarlett HAO",
    kudo: "Comfy w the uncomfy!",
    likes: getRandomLikes(1, 5),
  },
  {
    name: "Stephen Mustapha",
    kudo: "Error sniper",
    likes: getRandomLikes(2, 9),
  },
  {
    name: "Tami P",
    kudo: "Keeping the humour",
    likes: getRandomLikes(1, 5),
  },
  {
    name: "Wendy Hu",
    kudo: "Code is hella clean",
    likes: getRandomLikes(2, 9),
  },
  {
    name: "Yang Liu",
    kudo: "Collaboration on fleek",
    likes: getRandomLikes(1, 5),
  },
  {
    name: "Yogina Khandelwal",
    kudo: "Quick learner",
    likes: getRandomLikes(2, 9),
  },
  {
    name: "Yuan",
    kudo: "Gives 100% every single day",
    likes: getRandomLikes(2, 9),
  },
  {
    name: "Zhirong",
    kudo: "Code quality up up and away!",
    likes: getRandomLikes(2, 9),
  },
];

const cardsList = document.getElementById("kudos__list");

function makeKudoCard(kudoItem) {
  const cardItem = document.createElement("div");
  cardItem.classList.add("kudos__item");

  const details = document.createElement("div");
  details.classList.add("kudos__item-wrapper");

  const log = document.createElement("div");
  log.classList.add("kudos__item-log");

  const name = document.createElement("p");
  name.classList.add("kudos__item-name");
  name.textContent = kudoItem.name;

  const like = document.createElement("p");
  like.classList.add("kudos__item-like");
  like.textContent = `${kudoItem.likes} Likes`;

  const kudoText = document.createElement("p");
  kudoText.classList.add("kudos__item-text");
  kudoText.textContent = kudoItem.kudo;

  log.appendChild(name);
  log.appendChild(like);
  details.appendChild(log);
  details.appendChild(kudoText);
  cardItem.appendChild(details);

  // Append each card to the cardsList
  cardsList.appendChild(cardItem);
}

function displayKudoCards() {
  cardsList.innerHTML = ""; // Clear existing kudos
  kudos.forEach((kudoItem) => makeKudoCard(kudoItem));
}

// Call the display function to render the kudos
displayKudoCards();
