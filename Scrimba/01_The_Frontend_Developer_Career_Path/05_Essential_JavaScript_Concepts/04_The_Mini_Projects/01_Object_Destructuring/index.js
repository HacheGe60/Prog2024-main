const favoriteFilm = {
    title: "Top Gun",
    year: "1986",
    genre: "action",
    star: "Tom Cruise",
    director: "Tony Scott"
};

const { title, year, genre, star, director } = favoriteFilm;

console.log(`My favorite film is ${title} starring ${star}. It's an ${genre} film that was directed by ${director} and released in ${year}.`);