"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 0; i < 2; i++) {
	let q1 = prompt('Один из последних просмотренных фильмов ?', ''),
			q2 = +prompt('На сколько вы его оцените ?', '');
			personalMovieDB.movies[q1] = q2;
}

console.log(personalMovieDB.movies);