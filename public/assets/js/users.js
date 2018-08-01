const hideAll = () => {
  document.getElementById("sectionRecepcionista").style.display = "none";
  document.getElementById('sectionAdmin').style.display = 'none';
  document.getElementById('sectionResident').style.display = 'none';

}
const showRecepsionista = (user) => {
  firebase.database().ref('/users/' + user.uid).once('value', (snapshot) => {
    document.getElementById('sectionRecepcionista').style.display = "block";
    if (snapshot.val().rol === 'conserje') {
      conserje.showRecepsionista()
    }
  });
}

const showAdmin = (user) => {
  firebase.database().ref('/users/' + user.uid).once('value', (snapshot) => {
    document.getElementById('sectionAdmin').style.display = "block";
    if (snapshot.val().rol === 'administrador') {
      conserje.showAdmin()
    }
  });
}

const showResident = (user) => {
  firebase.database().ref('/users/' + user.uid).once('value', (snapshot) => {
    document.getElementById('sectionResident').style.display = "block";
    if (snapshot.val().rol === 'residente') {
      conserje.showResident()
    }
  });
}
