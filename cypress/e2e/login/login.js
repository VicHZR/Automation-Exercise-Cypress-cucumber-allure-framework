const { Given, When, Then, Before } = require("@badeball/cypress-cucumber-preprocessor");
const LoginPage = require("../../pages/LoginPage");

const EMAIL_OK = Cypress.env('APP_EMAIL');
const PASS_OK = Cypress.env('APP_PASSWORD');

const EMAIL_BAD = 'no.existo+' + Date.now() + '@mailinator.com';
const PASS_BAD = 'WrongPass!';

Given('que existe un usuario registrado', () => {
  
  cy.ensureAccountExists(EMAIL_OK, PASS_OK);
});

Given('que estoy en la página de login', () => {
  LoginPage.visitar();
});

When('ingreso un usuario válido', () => {
  LoginPage.escribirUsuario(EMAIL_OK);
});

When('ingreso una contraseña válida', () => {
  LoginPage.escribirPassword(PASS_OK);
});

When('ingreso un usuario inválido', () => {
  LoginPage.escribirUsuario(EMAIL_BAD);
});

When('ingreso una contraseña inválida', () => {
  LoginPage.escribirPassword(PASS_BAD);
});

When('hago clic en Login', () => {
  LoginPage.clickLogin();
});

Then('debo ingresar al dashboard', () => {
  LoginPage.validarDashboard();
});

Then('debe mostrarse el mensaje {string}', (mensaje) => {
  LoginPage.validarMensaje(mensaje);
});