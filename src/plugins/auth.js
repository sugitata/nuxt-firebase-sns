import firebase from '~/plugins/firebase';

function auth() {
  return new Promise((resolve, reject) => { // eslint-disable-line
    firebase.auth().onAuthStateChanged(user => {
      resolve(user || false);
    });
  });
}
export default auth;
//
