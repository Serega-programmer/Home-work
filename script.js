"use strict";

alert("Привет");

const number0Films = prompt("Сколько фильмов вы уже посмотрели? ", "");

const personalMovieDB = {
count : number0Films,
movies : {},
actors : {},
genres : [],
private : false
};
const a = prompt("Один из последних просмотренных фильмов", ""),
      b = prompt("Насколько оцените его", ""),
      c = prompt("Один из последних просмотренных фильмов", ""),
      d = prompt("Насколько оцените его", "");
      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;
