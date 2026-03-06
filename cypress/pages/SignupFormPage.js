class SignupFormPage {
  seleccionarTitulo(tipo) {
    if (tipo === "Mr") cy.get("#id_gender1").check({ force: true });
    else cy.get("#id_gender2").check({ force: true });
  }
  ingresarPassword(pwd) { cy.get('input[data-qa="password"]').type(pwd); }
  seleccionarFechaNacimiento(dia, mes, anio) {
    cy.get('select[data-qa="days"]').select(dia.toString());
    cy.get('select[data-qa="months"]').select(mes);
    cy.get('select[data-qa="years"]').select(anio.toString());
  }
  ingresarNombre(nombre) { cy.get('input[data-qa="first_name"]').type(nombre); }
  ingresarApellido(ape) { cy.get('input[data-qa="last_name"]').type(ape); }
  ingresarDireccion(dir) { cy.get('input[data-qa="address"]').type(dir); }
  seleccionarPais(pais) { cy.get('select[data-qa="country"]').select(pais); }
  ingresarEstado(estado) { cy.get('input[data-qa="state"]').type(estado); }
  ingresarCiudad(ciudad) { cy.get('input[data-qa="city"]').type(ciudad); }
  ingresarZipcode(zip) { cy.get('input[data-qa="zipcode"]').type(zip); }
  ingresarMovil(mov) { cy.get('input[data-qa="mobile_number"]').type(mov); }
  clickCrearCuenta() { cy.get('button[data-qa="create-account"]').click(); }
}
module.exports = new SignupFormPage();