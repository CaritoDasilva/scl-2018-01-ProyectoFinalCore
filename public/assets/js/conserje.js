// Se crea función que va a subir el registro a la Database
const registerCreator = () => {


  visitsCreate = firebase.database().ref('users/' + user.uid + +'/visits'); +
  visitsCreate.push({
    rut: rutVisit,
    nameVisit: nameVisit,
    visitPhoto: visitPhoto,
    createdOn: user.metadata.createdAt || new Date(),
    uid: user.uid,
    goTo: goTo,
    emailVisit: emailVisit
  });

}

const drawRegister = () => {
  messageContainer.innerHTML = '';
  visitsCreate = firebase.database().ref('users/' + visitsCreate + +'/visits')
    .on('child_added', (newVisit) => {

      messageContainer.innerHTML += `
        <p>Nombre : ${newVisit.val().rut}</p>
        <p>Foto:${newVisit.val().visitPhoto}</p>
        <p>Hora:${newVisit.val().createdOn}</p>
        <p>Oficina de Destino:${newVisit.val().goTo}</p>`;
    });

};