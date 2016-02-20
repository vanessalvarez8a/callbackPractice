/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the sayHi function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



// var first = function(arr, person) {
//   for(var i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[0]) //searching for the first element of an array
//       person(arr[i]);
//       break;
//   }
// } 
  var first = function(arr, person) {
    person(arr[0]); //just pass the first arr[0];
  }

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



var last = function(arr, person) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[arr.length-1]) {
      person(arr[i]);
      break;
    }
  }
}

// var last = function(arr, person) {
//   person(arr[arr.length-1]);
// }

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


var multiply = function(num1, num2, cb) {
  cb(num1 * num2);
}


multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
var contains = function(arr, name, cb) {
  var found = false; // to have a start point of false 
  for (var i = 0; i < arr.length; i++) {
     if (arr[i] === name) {
      found = true; // the end point is true by finding name 'Colt' inside found
      break;
    }
  }
  cb(found); // we are passing found to cb and cb is result 
} 



  //Code Here for contains

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



var uniq = function(arr, cb) {
  var stored = [];
  for (var i = 0; i < arr.length; i++) {
    if(stored.indexOf(arr[i]) === -1) {
      stored.push(arr[i]);
    }
  }
  cb(stored);
}


uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

var each = function(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
   cb(arr[i], i); //passing the arr element and the index to cb function which is the callback function 
  }
}
// the whole list and the position and the value for each one 


each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





// var getUserById = function(arr, id, cb) {
//   arr.map(function(obj, index) {
//     if(obj.id === id) {
//       cb(obj);
//     }
//   });
// }

var getUserById = function(arr, id, cb) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      cb(arr[i]);
      break;
    }
  }
}



var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
