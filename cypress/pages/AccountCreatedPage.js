class AccountCreatedPage {
  validarAccountCreated() {
    cy.contains(/account created/i).should("be.visible");
  }
  clickContinuar() {
    cy.get('[data-qa="continue-button"]').click();
  }
}
module.exports = new AccountCreatedPage();