Cypress.Commands.add('loginUI', (email, password) => {
  cy.visit('/login');
  cy.get('input[data-qa="login-email"]').clear().type(email);
  cy.get('input[data-qa="login-password"]').clear().type(password);
  cy.get('button[data-qa="login-button"]').click();
});


Cypress.Commands.add('ensureAccountExists', (email, password) => {
  cy.visit('/login');


  cy.get('input[data-qa="signup-name"]').clear().type('Victor QA');
  cy.get('input[data-qa="signup-email"]').clear().type(email);
  cy.get('button[data-qa="signup-button"]').click();

  cy.document().then((doc) => {
    if (doc.body.innerText.includes('Email Address already exist!')) {

      cy.contains('Email Address already exist!').should('be.visible');
      return;
    } else {

      cy.get('#id_gender1').check({ force: true });
      cy.get('input[data-qa="password"]').type(password);
      cy.get('select[data-qa="days"]').select('10');
      cy.get('select[data-qa="months"]').select('June');
      cy.get('select[data-qa="years"]').select('1995');

      
      cy.get('input[data-qa="first_name"]').type('Victor');
      cy.get('input[data-qa="last_name"]').type('Guzman');
      cy.get('input[data-qa="company"]').type('QA Company');
      cy.get('input[data-qa="address"]').type('Av. Siempre Viva 742');
      cy.get('select[data-qa="country"]').select('Canada');
      cy.get('input[data-qa="state"]').type('ON');
      cy.get('input[data-qa="city"]').type('Toronto');
      cy.get('input[data-qa="zipcode"]').type('M5H2N2');
      cy.get('input[data-qa="mobile_number"]').type('+51936021679');

      cy.get('button[data-qa="create-account"]').click();

      cy.contains('ACCOUNT CREATED!').should('be.visible');
      cy.get('a[data-qa="continue-button"]').click();

      cy.location('pathname', { timeout: 10000 }).then((path) => {
        if (path !== '/') cy.visit('/');
      });

      cy.contains('Logged in as').should('be.visible');

      cy.contains('Logout').click();
      cy.contains('Login').should('be.visible');
    }
  });
});