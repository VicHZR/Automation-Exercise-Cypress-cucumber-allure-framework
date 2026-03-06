Feature: Login - Pruebas de regresresión
  Como usuario
  Quiero validar el login
  Para asegurar que solo ingresen usuarios válidos

  @setup
  Scenario: Preparar usuario de pruebas
    Given que existe un usuario registrado

  @login-exitoso
  Scenario: Login exitoso
    Given que estoy en la página de login
    When ingreso un usuario válido
    And ingreso una contraseña válida
    And hago clic en Login
    Then debo ingresar al dashboard

  @login-usuario-incorrecto
  Scenario: Login con usuario incorrecto
    Given que estoy en la página de login
    When ingreso un usuario inválido
    And ingreso una contraseña válida
    And hago clic en Login
    Then debe mostrarse el mensaje "Usuario o contraseña incorrectos"

  @login-password-incorrecto
  Scenario: Login con contraseña incorrecta
    Given que estoy en la página de login
    When ingreso un usuario válido
    And ingreso una contraseña inválida
    And hago clic en Login
    Then debe mostrarse el mensaje "Usuario o contraseña incorrectos"

  @login-ambos-incorrectos
  Scenario: Login con usuario y contraseña incorrectos
    Given que estoy en la página de login
    When ingreso un usuario inválido
    And ingreso una contraseña inválida
    And hago clic en Login
    Then debe mostrarse el mensaje "Usuario o contraseña incorrectos"