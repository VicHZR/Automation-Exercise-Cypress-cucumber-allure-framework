class HomePage {
  irASignupLogin() {
    cy.contains("a", "Signup / Login").click();
  }
}

module.exports = new HomePage();