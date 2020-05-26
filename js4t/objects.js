 

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
    this.tracks.forEach(function(value, key){
        console.log(value); 
    })
}
album.showTracks();