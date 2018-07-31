/*funcion para llenado de tabla con datos para recepcionista */
const datosTabla = document.getElementById('/*ID DE LA TABLA EN EL INDEX*/');
function tabla(/*OBJETO DE DATABASE*/) {
  CONSTANTECONELIDDELATABLA.innerHTML = '';
  
  users.forEach((/*CONSTANTE CON OBJETO DE DATABASE*/) => {
    CONSTANTECONELIDDELATABLA.innerHTML += `
      <tr>
        <th scope="row"></th>
        <td>${variableconinfo}</td>
        <td>${variableconinfo}%</td>
        <td>${variableconinfo}%</td>
        <td>${variableconinfo}%</td>
        <td>${variableconinfo}%</td>
      </tr>`;
  });
}
