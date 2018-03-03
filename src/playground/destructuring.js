//OBJECT DESTRUCTURING
console.log('----------OBJECT DESTRUCTURING------------')

const person = {
    name: 'Deep',
    age: 24,
    location: {
        city: 'Bengaluru',
        temp: 87
    }
}

const { name: firstName = 'Anonymous', age } = person;  // setting default values // renaming properties

// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}.`)

// if (person.location.city  && person.location.temp) {
// console.log(`It's ${person.location.temp} in ${person.location.city}.`)
// }   

const { city, temp: temperature } = person.location;

if (city  && temperature) {
console.log(`It's ${temperature} in ${city}.`)
}

// C    H   A   L   L   E   N   G   E

const book = {
    title: 'A thousand splendid suns',
    author: 'Khalled Hosseini',
    publisher: {
        // name: 'Penguin'        
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName)

//ARRAY DESTRUCTURING
console.log('-----------ARRAY DESTRUCTURING------------')

const address = ['B503 2nd Cross Veerannapalya', 'Bengaluru', 'Karnataka', '560045']
// console.log(`You are in ${address[1]}, ${address[2]}.`)

// const myCity = address[1];
// const myState = address[2];
// console.log(`You are in ${myCity}, ${myState}.`)

// const [ street, myCity, myState, zip ] = address //positioned by order/position in array
// console.log(`You are in ${myCity}, ${myState}.`)

// optional destructuring
const [ , myCity, myState='NoItemInArray'] = address //positioned by order/position in array
console.log(`You are in ${myCity}, ${myState}.`)

// C    H   A   L   L   E   N   G   E

const item = ['Coffee (hot)', 'Rs.100', 'Rs.150', 'Rs.190']
const [beverage='Coffee', mprice] = item
console.log(`A medium ${beverage} costs ${mprice}.`)