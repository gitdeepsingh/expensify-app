import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyARb-dHlEywjY8qHGLJ7v8nCII9bz2S8ew",
    authDomain: "expensify-7d206.firebaseapp.com",
    databaseURL: "https://expensify-7d206.firebaseio.com",
    projectId: "expensify-7d206",
    storageBucket: "expensify-7d206.appspot.com",
    messagingSenderId: "35734684638"
};
firebase.initializeApp(config);

const database = firebase.database();
// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key ,snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key ,snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key ,snapshot.val());
});

// database.ref('expenses').on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnap) => {
//             expenses.push({
//                 id: childSnap.key,
//                 ...childSnap.val()
//             })
//         });
//         console.log(expenses);
//     })

// database.ref('expenses').push({
//     description: 'Shopping',
//     amount: 5000,
//     createdAt: 6546456,
//     notes: 'HRx'
// })

// database.ref('expenses').push({
//     description: 'Dinner',
//     amount: 200,
//     createdAt: 50654600,
//     notes: 'Dhaba'
// });

// database.ref('expenses').push({
//     description: 'Credit card',
//     amount: 2000,
//     createdAt: -10545600,
//     notes: 'HRx'
// });

// database.ref('notes/-L6lIwJ7XsAbtGhliDAC').remove();

// database.ref('notes').push({
//     title: 'Dinner',
//     body: 'Dal Makhani'
// });

// const firebaseNotes = {
//     notes: {
//         asdsadas: {
//             title: 'note One',
//             body: 'this is the note'
//         },
//         dfdsgfsdjhfjk: {
//             title: 'note Two',
//             body: 'this is the note'
//         }
//     }
// }

// const notes = [{
//     id: '1',
//     title: 'note One',
//     body: 'this is the note'
// }, {
//     id: '2',
//     title: 'note Two',
//     body: 'this is the note'
// }];

// database.ref('Notes').set(notes)

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (err) => {
//     console.log('error in fetching', err);
// })

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 5000);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 10000);

// setTimeout(() => {
//     database.ref('age').set(36);
// }, 15000);


// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((err) => {
//         console.log('Error fetching data', err);
//     });

// database.ref().set({
//     name: 'Deep Singh',
//     age: 24,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Cognizant'
//     },
//     location: {
//         city: 'Bengaluru',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('data saved');
// }).catch((err) => {
//     console.log('data failed', err);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'JPMC',
//     'location/city': 'Whitefield'
// });

// database.ref()
//     .remove()
//     .then(() => {
//     console.log('data removed')
//     }).catch(() => {
//         console.log('data NOT removed');
//     })