# 🧪 AutomationExercise – Login Regression
### Cypress + Cucumber (BDD) + POM + Allure Reports + GitHub Actions CI/CD

Este proyecto implementa pruebas automatizadas para el módulo de **Login** del sitio  
https://www.automationexercise.com utilizando un framework moderno con:

- ✔ Cypress 13  
- ✔ Cucumber (BDD)  
- ✔ Page Object Model (POM)  
- ✔ Allure Reports  
- ✔ GitHub Actions (CI/CD)  
- ✔ Publicación automática del reporte Allure en GitHub Pages  
- ✔ Creación automática de usuario antes de ejecutar las pruebas de login  

---

## 📌 **Características Automatizadas**

### 🔵 **Flujos implementados**
1. **Crear usuario automáticamente** (Background)
2. **Login exitoso**
3. **Login con usuario incorrecto**
4. **Login con contraseña incorrecta**
5. **Login con usuario y contraseña incorrectos**

Todos validan con aserciones y usan POM.

---

## 📁 **Estructura del Proyecto**

automationexercise-cypress-bdd/
│── cypress/
│   ├── e2e/
│   │   └── login/
│   │        ├── login.feature
│   │        └── login.js
│   ├── pages/
│   │    ├── HomePage.js
│   │    ├── SignupLoginPage.js
│   │    ├── SignupFormPage.js
│   │    ├── AccountCreatedPage.js
│   │    └── DashboardPage.js
│   └── support/
│        ├── e2e.js
│        └── commands.js
│── cypress.config.js
│── package.json
│── README.md
│── .github/
│    └── workflows/
│         └── cypress-allure.yml

---

## 🛠️ **Instalación**

1. Clona el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>


npm install

🚀 Ejecución de Pruebas

▶️ Con interfaz gráfica

npm run cy:open

⚡ Headless (sin interfaz)

npm run cy:run

🧾 Allure Reports
🔨 Generar reporte Allure localmente

npm run allure:generate

👀 Abrir reporte Allure

npm run allure:open

Ejecutar Cypress + generar + abrir Allure

npm run cy:run:allure

allure-results/
allure-report/

🤖 CI/CD – GitHub Actions
Cada vez que hagas un push a la rama main, se ejecutará automáticamente:

Instala dependencias
Ejecuta Cypress
Genera reporte Allure
Publica reporte Allure en GitHub Pages
Adjunta los artefactos:

allure-results
allure-report

El workflow se encuentra en:
.github/workflows/cypress-allure.yml

Para correr en varios navegdores se tiene que instalar
npm i -D npm-run-all
en el package.json agregar los siguientes scripts:

"scripts": {
  "test:chrome": "cypress run --browser chrome",
  "test:edge": "cypress run --browser edge",
  "test:firefox": "cypress run --browser firefox",
  "parallel": "run-p test:chrome test:edge test:firefox"
}
 y luego ejecutar
npm run parallel

🧑‍💻 Autor
Proyecto automatizado por Victor
Tecnologías: Cypress · Cucumber · POM · Allure · GitHub Actions
