

let dramaShows = [
  "Ginny & Georgia",
  "Outlander",
  "Grey's Anatomy",
  "Ozark",
  "The Queen's Gambit"
];

let fantasyShows = [
  "Supernatural",
  "The Sandman",
  "Wednesday",
  "The Witcher",
  "Avatar: The Last Airbender"
];

let comedyShows = [
  "Arrested Development",
  "Dead to Me",
  "Seinfeld",
  "Emily in Paris",
  "The Good Place"
];

function chooseRandomGenre() {
  // Deliverable 1: Return a random genre ("drama", "fantasy", or "comedy")
  let randomIndex = getRandomNumber(0, 2);
  let genres = ["drama", "fantasy", "comedy"];
  return genres[randomIndex];
}

function displayRandomShow(genre) {
  // Deliverable 2: Display a random show from the corresponding genre
  if (genre === "random") {
    genre = chooseRandomGenre();
  }

  let shows;
  switch (genre) {
    case "drama":
      shows = dramaShows;
      break;
    case "fantasy":
      shows = fantasyShows;
      break;
    case "comedy":
      shows = comedyShows;
      break;
    default:
      shows = [];
  }

  let randomIndex = getRandomNumber(0, shows.length - 1);
  let randomShow = shows[randomIndex];
  displayShow(randomShow);
}
