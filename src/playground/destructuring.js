// const person = {
//     name: 'Alex',
//     age: 32,
//     location: {
//         city: 'Orlando',
//         temp: 85
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`its ${temperature} in ${city}.`);
// }


// const book = {
//     title: 'Ego is the enemy',
//     auther: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName)



// const address = ['4501 Vineland rd', 'Orlando', 'Florida', '32811'];

// const [ street, city, state, zip ] = address;

// console.log(`you are in ${city} ${state}.`)

const item = ['coffee (hot)', '$2.00', '$2.50', '$3.00']

const [drink, ,medium] = item;

console.log(`a ${drink} costs ${medium}`);