import firebase from 'firebase';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBCpaHi0MJHc-jyBOx_5A3MMAtIGI69Azc',
    authDomain: 'nuxt-firebase-bd56d.firebaseapp.com',
    databaseURL: 'https://nuxt-firebase-bd56d.firebaseio.com',
    projectId: 'nuxt-firebase-bd56d',
    storageBucket: 'nuxt-firebase-bd56d.appspot.com',
    messagingSenderId: '555539882777',
  });
}

export default firebase;
