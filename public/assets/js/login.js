let user = null;
initApp = function () {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log(user)
      document.getElementById("userLogin").innerHTML = "Hola " + user.displayName;

      userCreate = firebase.database().ref('users/' + user.uid); +
      userCreate.set({
        displayName: user.displayName || user.providerData[0].email,
        email: user.email || user.providerData[0].email,
        photoUrl: user.photoURL || '',
        createdOn: user.metadata.createdAt || new Date(),
        uid: user.uid
      })
    } else {
      // User is signed out.
      document.getElementById('userLogin').innerHTML = '';
      var uiConfig = {
        signInSuccessUrl: '/',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: '/',
        // Privacy policy url.
        privacyPolicyUrl: '/'
      };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);
    }
  }, function (error) {
    console.log(error);
  });
};

window.addEventListener('load', function () {
  initApp()
});

out.addEventListener('click', () => {
  firebase.auth().signOut();
  login.style.display = 'block';
});