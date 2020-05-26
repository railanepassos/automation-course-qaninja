

var welcome = "Hello JavaScript - Automation Full Stack from QA Ninja !"
document.getElementById("welcome").append(welcome)
console.log("Hello JavaScript - Automation Full Stack from QA Ninja !")


// Arrays - Save a lot of information

/** var witch = new Array();
    var witch = [];
    */

var witch = ['Cornelia Hale', 'Hay Lin', 'Irma Lair', 'Will Vandon'];
console.log(witch);
console.log(typeof witch);

// Add new iten in array
witch.push('Nerissa');
console.log(witch);

// Remove last iten in array
witch.pop();
console.log(witch);
// Remove first iten in array
witch.shift();
console.log(witch);

witch.push('Cornelia Hale');
witch.push('Nerissa');
console.log(witch);

witch.splice(witch.indexOf(('Hay Lin'),1));
console.log(witch);

let list = ["bar", "baz", "foo", "qux"];
console.log(list);
list.splice(list.indexOf('foo'), 1);
console.log(list);


//var newWitch = ['Phobos', 'Caleb', 'Matt Olsen'];
//console.log(newWitch);
//var allWitch = newWitch.concat(witch);
//console.log(allWitch);








