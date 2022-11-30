import "./commands";

require("cypress-xpath");

Cypress.on("uncaught:exception", (error, runnable) => {
  return false;
});


Cypress.Server.defaults({
  ignore: xhr => {
    return Cypress.config().blockHosts.some(blockedHost =>
      Cypress.minimatch(new URL(xhr.url).host, blockedHost)
    );
  }
});

/*const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}*/
