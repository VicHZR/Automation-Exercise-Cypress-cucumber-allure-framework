class LoginPage {
  elements = {
    loginEmail: () => cy.get('input[data-qa="login-email"]'),
    loginPassword: () => cy.get('input[data-qa="login-password"]'),
    loginBtn: () => cy.get('button[data-qa="login-button"]'),
    errorMessage: () => cy.contains('Your email or password is incorrect!'),
    loggedInAs: () => cy.contains('Logged in as'),
    logoutLink: () => cy.contains('Logout'),
  };

  visitar() {
    cy.visit('/login');
  }

  escribirUsuario(usuario) {
    this.elements.loginEmail().clear().type(usuario);
  }

  escribirPassword(password) {
    this.elements.loginPassword().clear().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  validarDashboard() {
    this.elements.loggedInAs().should('be.visible');
    this.elements.logoutLink().should('be.visible');
  }

  validarMensaje(mensaje) {
    
    this.elements.errorMessage().should('be.visible').and('contain.text', 'incorrect');
  }
}

module.exports = new LoginPage();