"use strict";

alert("Привет");

const number0Films = prompt("Сколько фильмов вы уже посмотрели? ", "");

const personalMovieDB = {
    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
// const a = prompt("Один из последних просмотренных фильмов", ""),
//       b = prompt("Насколько оцените его", ""),
//       c = prompt("Один из последних просмотренных фильмов", ""),
//       d = prompt("Насколько оцените его", "");
//       personalMovieDB.movies[a] = b;
//       personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов", ""),
        b = prompt("Насколько оцените его", "");


    if(a !=null && b !=null && a !=("") && b!=("") && a.length<50) {
       personalMovieDB.movies[a] = b; 
       console.log(`done`);
    } else {
        console.log(Error);
        i--;
    }
    
    if(personalMovieDB.count<10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB >= 10 && personalMovieDB.count <30 ) {
        console.log("Вы классический зритель");
    }else if (personalMovieDB.count >=30){
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");

    console.log(personalMovieDB);
}
}