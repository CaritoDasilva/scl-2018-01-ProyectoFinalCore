document.addEventListener('DOMContentLoaded', function () {
  hideAll();
  try {
    let app = firebase.app();

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        document.getElementById("userLogin").innerHTML = "Hola " + user.displayName;
        document.getElementById('sectionRecepcionista').style.display = 'block';
        showRecepsionista();
      } else {
        hideAll();
        document.getElementById('sectionAdmin').style.display = 'none';
        document.getElementById('sectionResident').style.display = 'none';
        document.getElementById("userLogin").innerHTML = ""
        drawLogin();
      }
    });

  } catch (e) {
    console.error(e);
  }
});