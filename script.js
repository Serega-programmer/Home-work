"use strict";

alert("Привет");

<<<<<<< HEAD
 let number0fFilms;
 
 function (start) {
    while(number0fFilms = "" || number0fFilms==null || isNaN( nomberOfFilms))
    
number0fFilms = +prompt("Сколько фильмов вы уже посмотрели? ", "");
}
=======
let number0Films;
>>>>>>> 121320c10ecd05e4f19ba9abb6600e1d46145355

function start () {

 number0Films = +prompt("Сколько фильмов вы уже посмотрели? ", "");

 while(number0Films== "" || number0Films== null ||  isNaN(number0Films)) {
    number0Films = +prompt("Сколько фильмов вы уже посмотрели? ", "");

 }

}
start();

const personalMovieDB = {
count : number0Films,
movies : {},
actors : {},
genres : [],
privat : false
};

function rememberMyFilmes () {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из просмотренных фильмов", ""),
          b = prompt ("На сколько оцените его?", "");

          if(a !=null && b !=null && a !="" && b !="" && a.length <50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
          } else {
            console.log("error");
            i--;
          }
}
}

// rememberMyFilmes();

    function detectPersonalLevel() {
      if (personalMovieDB.count <10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >=10 && personalMovieDB.count <30) {
          console.log("Вы классический зритель");
          } else if (personalMovieDB.count >=30) {
      console.log ("Вы киноман");
      } else {
        console.log("Произошла ошибка");

    }
  }
  // detectPersonalLevel ();

  function showMyDB (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  }

  showMyDB(personalMovieDB.privat);

  function writeYourGenres () {
    for (let i = 1; i<=3; i++) {
    // const genre = prompt(`Ваш любимый жанр под номером ${i}`); - Эту строку мы закинули ниже в personalMovieDB
    personalMovieDB.genres [i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
    
writeYourGenres();



<<<<<<< HEAD
const logger = function () {
    console.log("Hello");
};
logger();

=======
>>>>>>> 121320c10ecd05e4f19ba9abb6600e1d46145355
