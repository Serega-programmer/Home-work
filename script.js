"use strict";

alert("Привет");

 let number0fFilms;
 
 function (start) {
    while(number0fFilms = "" || number0fFilms==null || isNaN( nomberOfFilms))
number0fFilms = +prompt("Сколько фильмов вы уже посмотрели? ", "");
}


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
// п.24 ФУНКЦИИ, СТРЕЛОЧНЫЕ ФУНКЦИИ (ES6)

let num = 20;
function showFirstMessage(text) {
    console.log(text);
    // let num = 10;
    console.log(num);
}
showFirstMessage("Hello world!");
console.log(num);

console.log(calc(4,3));
console.log(calc(5,6));
console.log(calc(10,6));

function calc(a,b) {
return(a+b);
}

const logger = function () {
    console.log("Hello");
};
logger();
