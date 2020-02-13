import * as firebase from 'firebase';
// import moment from 'moment';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default}

// database.ref('expenses')
// .on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
// .on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
// .on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// const expenses = [{
//   description: 'Gum',
//   note: '',
//   amount: 195,
//   createdAt: 0
// }, {
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: moment(0).subtract(4, 'days').valueOf()
// }, {
//   description: 'credit card',
//   note: '',
//   amount: 4500,
//   createdAt: moment(0).add(4, 'days').valueOf()
// }]

// expenses.forEach(cur => {
//   database.ref('expenses').push(cur)
// });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const redux = [];
//     snapshot.forEach((childSnapshot) => {
//       redux.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(redux)
//   });


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => { 
//     const reduxExpenses = [];
//     snapshot.forEach(childSnapshot => {
//       reduxExpenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(reduxExpenses);
//   });

// database.ref('notes').push({
//   title: 'things to eat',
//   body: 'doughnut, candy, waffle'
// })

// const firebaseNotes = {
//   notes: {
//     adssadad: {
//       title: 'First note!',
//       body: 'This is my note'
//     },
//     asdadadsr: {
//       title: 'Another note',
//       body: 'This is my note!'
//     }
//   }
// }

// const notes = [
//   {
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
//   }, {
//     id: '23frert4',
//     title: 'Another note',
//     body: 'This is my note!'
//   }
// ];

// database.ref('notes').set(notes);

// const sub = database.ref()
//   .on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a software enginner @ ${data.job.company}`)
//   }, (e) => {
//     console.log('There has been an error:', e)
//   });

// setTimeout(() => {
//   database.ref().update({
//     'job/company': 'Google'
//   })
//   .then(() => {
//     console.log('data updated')
//   })
//   .catch((e) => {
//     console.log('error:', e)
//   })
// }, 3000)

// setTimeout(() => {
//   database.ref()
//     .off('value', sub)
// }, 7000)

// setTimeout(() => {
//   database.ref().update({
//     'job/company': 'Amazon'
//   })
// }, 10000);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Err fetching data:', e)
//   });

// database.ref().set({
//   name: 'Kamil Kulik',
//   age: 32,
//   stressLevel: 6,
//   job: {
//     title: 'software developer',
//     company: 'Google'
//   },
//   isSingle: false,
//   location: {
//     city: 'London',
//     country: 'Poland'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((error) => {
//   console.log('This failed', error)
// });

// database.ref()
//   .update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// }).then(() => {
//   console.log('data is updated')
// })
//   .catch((err) => {
//   console.log('error updating data')
//   });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('successfully removed')
//   })
//   .catch((e) => {
//     console.log('failed to remove:', e)
//   });