import "./commands";

Cypress.Server.defaults({
  delay: 500,
  force404: false,
  ignore: (xhr) => {
    return true;
  }
});