class DashboardPage {
  validarLoggedInAs(nombreParcial) {
    cy.contains(/logged in as/i).should("be.visible");
    if (nombreParcial) {
      cy.contains(/logged in as/i).parent().should("contain.text", nombreParcial);
    }
  }
  verificarOpcionLogoutVisible() {
    cy.contains("a", "Logout").should("be.visible");
  }
  logout() {
    cy.contains("a", "Logout").click();
  }
}
module.exports = new DashboardPage();