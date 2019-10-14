//STEP 1
var movies = ["Movie1","Movie2","Movie3","Movie4","Movie5"];
window.console.log(movies[1]);
//STEP 2
var movies = new Array(5);
movies[1]="Movie1";
movies[2]="Movie2";
movies[3]="Movie3";
movies[4]="Movie4";
movies[5]="Movie5";
window.console.log(movies[0]);

//STEP 3

var movies = new Array(5);
movies[0]="Movie1";
movies[1]="Movie2";
movies[2]="Movie3";
movies[3]="Movie4";
movies[4]="Movie5";
movies.splice(2,0,"Movie2.5");
window.console.log(movies[0]);  
//STEP  
//STEP 4

var movies = [];
movies[0]="Movie1";
movies[1]="Movie2";
movies[2]="Movie3";
movies[3]="Movie4";
movies[4]="Movie5";
delete movies[0];
window.console.log(movies);
//STEP 5
var movies = [];
movies[0]="Movie1";
movies[1]="Movie2";
movies[2]="Movie3";
movies[3]="Movie4";
movies[4]="Movie5";
movies[5]="Movie6";
movies[6]="Movie7";
for(var i = 0 ;i<movies.length;i++){
window.console.log(movies[i]);
}

//STEP 6
var movies =["Movie1","Movie2","Movie3","Movie4","Movie5"];
var i;
for(i in movies){
window.console.log(movies[i]);
}
//STEP 7

var movies =["test","Movie2","hello","abc","Movie5"];
var i;
movies.sort();
for(i in movies){
window.console.log(movies[i]);
}
//STEP 8
var leastFavMovie = ["Movie1","Movie2","Movie3"];
var movies = ["Movie4","Movie5","Movie6"];
movies=movies.join("\n");
leastFavMovie=leastFavMovie.join("\n");
var buffer = "Movies I like: \n \n";
var buffer2 = "Movies I regret watching: \n\n";
window.console.log(buffer);
window.console.log(movies);
window.console.log(buffer2);
window.console.log(leastFavMovie);
//STEP 9

var leastFavMovie = ["Movie1","Movie2","Movie3"];
var movies = ["Movie4","Movie5","Movie6"];
movies = movies.concat(leastFavMovie);
window.console.log(movies.sort().reverse());

//step 10
var leastFavMovie = ["Movie1","Movie2","Movie3"];
var movies = ["Movie4","Movie5","Movie6"];
movies = movies.concat(leastFavMovie).reverse();
window.console.log(movies[movies.length-1]);