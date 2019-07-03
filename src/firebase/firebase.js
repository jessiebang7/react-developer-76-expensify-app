import * as firebase from 'firebase';

// const config = {
//   apiKey: "AIzaSyANxePyqUSNLmjl1hLS13UWIvMrH9O6bto",
//   authDomain: "react-developer-76-expensify.firebaseapp.com",
//   databaseURL: "https://react-developer-76-expensify.firebaseio.com",
//   projectId: "react-developer-76-expensify",
//   storageBucket: "",
//   messagingSenderId: "768262938338",
//   appId: "1:768262938338:web:19fbbcc03973489b"
// };

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default };


/*===== Setting */
// database.ref().set({
//   name: 'Jessie Bamg',
//   age: 43,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'New York',
//     country: 'South Koreaa',
//   },
//   color: 'blue'
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e)=> {
//   console.log('This failed', e)
// });

/*===== Removing */
// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log("Deleted");
//   })
//   .catch((e) => {
//     console.log('Deleting failed', e);
//   });

// database.ref('isSingle').set(null);

/*===== Updating */
// database.ref().update({
//   name: 'Mike',
//   age: 29,
//   job: 'Software Developer',
//   isSingle: null
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

/*===== Fetching Once */
// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

/*===== Fetching On */
// const onValueChange = database.ref()
//   .on('value', (snapshot)=> {
//     console.log(snapshot.val());
//   }, (e) => {
//     console.log('Error with fetching', e);
//   });

// setTimeout(()=> {
//   database.ref('age').set(28);
// }, 3500);

// setTimeout(()=> {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(()=> {
//   database.ref('age').set(68);
// }, 10500);

/*===== Fetching Challenge */
// const onValueChange = database.ref().on('value',
//   (snapshot) => {
//     const value = snapshot.val();
//     console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`);
//   },
//   (error) => {
//     console.log("Error: ", error)
//   }
// );

// setTimeout(()=> {
//   database.ref().update({'job/title': 'CEO', 'job/company': 'FACTORY9.net'});
// }, 4000);

/*===== Array Part I */
// const firebaseNotes = {
//   notes: {
//     appijasdf: {
//       title: 'First note',
//       body: 'This is my note'      
//     },
//     adfadf: {
//       title: 'Another note',
//       body: 'This is my note'
//     }
//   }
// }
// const notes = [{
//   id: '12',
//   title: 'First note',
//   body: 'This is my note'
// }, {
//   id: '76isse',
//   title: 'Another note',
//   body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native'
// });

// database.ref('notes/-Lij5FNi-iuDwumTghKk').remove();

/*===== Array Part I Challenges */
// const expenses = [{
//   description: 'Gum',
//   note: '',
//   amount: 195,
//   createdAt: 0
// },
// {
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt:1000
// },
// {
//   description: 'Credit Card',
//   note: '',
//   amount: 4500,
//   createdAt: 2000
// }];

// for(let expense of expenses){
//   database.ref('expenses').push(expense);
// }

/*===== Array Part II Once */
// database.ref('expenses')
//   .once('value')
//   .then((snapshot)=> {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(expenses);
//   })
//   .catch( error => {
//     console.log("Error:", error);
//   });

 /*===== Array Part II Challenge On */
// const onValueChange = database.ref('expenses').on('value', snapshot => {
//   let expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// }, error => {
//   console.log("Error: ", error)
// });

 /*===== Array Part II Other Events */
 // child_removed
//  database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
//  });

//  // child_changed
//  database.ref('expenses').on('child_changed', snapshot => {
//    console.log(snapshot.key, snapshot.val());
//  });

//  // child_added
//  database.ref('expenses').on('child_added', snapshot => {
//    console.log(snapshot.key, snapshot.val());
//  });

//  database.ref('expenses').push({
//   description: 'Credit Card',
//   note: '',
//   amount: 4500,
//   createdAt: 2000
// });
