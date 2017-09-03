import alt from '../alt';
import Firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAWjsf11fwPx5mALdupWde9qlMjoCPp9Ng",
  authDomain: "code-hunt-demo-bf57c.firebaseapp.com",
  databaseURL: "https://code-hunt-demo-bf57c.firebaseio.com",
  projectId: "code-hunt-demo-bf57c",
  storageBucket: "code-hunt-demo-bf57c.appspot.com",
  messagingSenderId: "148978170909"
};

Firebase.initializeApp(config);

class Actions {

  initSession() {
    return (dispatch) => {

      Firebase.auth().onAuthStateChanged(function(result) {
        var profile = null;

        if (result) {
          profile = {
            id: result.uid,
            name: result.providerData[0].displayName,
            avatar: result.providerData[0].photoURL
          }
        }

        dispatch(profile);
      });
    }
  }

  login() {
    return (dispatch) => {
      var provider = new Firebase.auth.FacebookAuthProvider();
      Firebase.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;

        var profile = {
          id: user.uid,
          name: user.providerData[0].displayName,
          avatar: user.providerData[0].photoURL
        }

        Firebase.database().ref('/users/'+user.uid).set(profile);
        dispatch(profile);

      }).catch(function(error) {
        console.log('Failed!', error);
      });
    }
  }

  logout() {
    return(dispatch) => {
      Firebase.auth().signOut().then(function() {
        dispatch(null);
      }, function(error) {
        console.log(error);
      });
    }
  }

  getProducts() {
    return(dispatch) => {
      Firebase.database().ref('products').on('value', function(snapshot) {
        var products = snapshot.val();
        dispatch(products);
      });
    }
  }
}

export default alt.createActions(Actions);
