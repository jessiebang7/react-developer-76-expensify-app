//
// Object Destructuring
//
/* const person = {

  age: 29,
  location: {
    city: 'Philadelphia',
    temp: 92
  }
}
const {name: firstName  = 'Annoymous', age} = person;
console.log(`${firstName} is ${age}.`);


if(person.location.city && person.location.temp){
  console.log(`It's ${person.location.temp} in ${person.location.city}`);
}

const {city, temp} = person.location;
if(city && temp){
  console.log(`It's ${temp} in ${city}`);
}

const {city: currentCity, temp: temperture} = person.location;
if(city && temperture){
  console.log(`It's ${temperture} in ${city}`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName); */

//
// Array Destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pensylvania', '19147'];
const [, city, state = 'New York'] = address;
console.log(`Your are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , medium] = item;
console.log(`A medium ${coffee} costs ${medium}`);