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
   
   // Removing specific element drim list
   // Fonte: https://www.mundojs.com.br/2018/09/06/removendo-elementos-de-uma-lista-array-javascript/#page-content
   var index = witch.indexOf('Will Vandon');
   witch.splice((index),1);
   console.log(witch);
   
   // Joining lists
   var newWitch = ['Phobos', 'Caleb', 'Matt Olsen'];
   console.log(newWitch);
   var allWitch = newWitch.concat(witch);
   console.log(allWitch);