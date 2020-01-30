// const person = {
//     age: 26,
//     location: {
//         temp: 92
//     }
// }

// const { name: imie, location: { city: miasto }  } = person;
// // const name = person.name;
// // const location = person.location.city

// console.log(`${imie} lives in ${miasto}`)

// // SETTING UP DEFAULTS

// const { name: nazwa = 'Kamil', location: { city: miacho = 'Kedzierzyn' }  } = person;
// // const name = person.name;
// // const location = person.location.city

// console.log(`${nazwa} lives in ${miacho}`)


const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        //name: 'Penguin'
    }
};

const { publisher: { name: publisherName = 'self-published' } } = book;

console.log(publisherName); // Penguin, self-published