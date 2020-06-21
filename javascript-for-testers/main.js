
//  Class functions
//  This function welcome have responsabilities of displaying welcome message
//  Declaring the function welcome
function welcome() {
    var welcome = "Hello JavaScript - Automation Full Stack from QA Ninja !";
    document.getElementById("welcome").append(welcome);
    console.log("Hello JavaScript - Automation Full Stack from QA Ninja !");
}
//  Invoking the function
welcome();

/** Declaring the function sum
    function sum (numberOne, numberTwo) {
        //  console.log(numberOne + numberTwo);
        //  var result = numberOne + numberTwo;
        //  return result;

        return numberOne + numberTwo;

    }
    //  Invoking the function and passing parameters
    console.log(sum (15, 25));
 */

 /**    var album = {
        title: 'Nevermind',
        released: 1991,
        showInfo: function() {
            console.log(`Album title: ${this.title}, launched in: ${this.released}`)
        }
 } */
 

 var album = new Object();
 album.title = 'Nevermind';
 album.single = 'Smells Like Teen Spirit';
 album.released = 1991;
 album.musicalGenre = 'Grunge';
 album.showInfo = function() {
    console.log(`Album title: ${this.title}, launched in: ${this.released}, Musical Genre: ${this.musicalGenre} and Better Single: ${this.single}.`)
}

album.showInfo();
console.log(album);
console.log(album.title);
console.log(album.musicalGenre);
console.log(album.single);
console.log(album.released);
album.showInfo();

album.tracks = ['Smells Like Teen Spirit', 'In Bloom', 'Come As You Are', 'Breed', 'Lithium','Polly'];
var contador = album.tracks.length;
console.log(contador);
// console.log(album.tracks);
album.showTracks = function() {
    cont = 1;
    this.tracks.forEach(function(value, key){
        console.log(cont, value); 
    })
    cont ++;

}
album.showTracks();



