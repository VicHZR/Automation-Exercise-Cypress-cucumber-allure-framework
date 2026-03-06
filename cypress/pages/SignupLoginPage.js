class SignupLoginPage {
  // Signup (Nuevo Usuario)
  ingresarNombreSignup(nombre) {
    cy.get('input[data-qa="signup-name"]').clear().type(nombre);
  }
  ingresarEmailSignup(email) {
    cy.get('input[data-qa="signup-email"]').clear().type(email);
  }
  clickSignup() {
    cy.get('button[data-qa="signup-button"]').click();
  }

  // Login (Usuario Existente)
  ingresarEmailLogin(email) {
    cy.get('input[data-qa="login-email"]').clear().type(email);
  }
  ingresarPasswordLogin(password) {
    cy.get('input[data-qa="login-password"]').clear().type(password);
  }
  clickLogin() {
    cy.get('button[data-qa="login-button"]').click();
  }
  validarMensajeError(texto) {
    cy.contains("p", "Your email or password is incorrect!")
      .should("be.visible")
      .and("contain", texto);
  }
}
module.exports = new SignupLoginPage();