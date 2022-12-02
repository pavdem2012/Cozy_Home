import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";

require("cypress-xpath");
describe("empty spec", () => {
  const main = new MainPage();
  const product = new ProductPage();
  it("Проверка подтверждения населенного пункта", () => {
    main.confirm_city();
  });
  it("Проверка выбора населенного пункта", () => {
    main.choose_city();
  });
  it("Проверка авторизации пользователя", () => {
    main.user_authorization();
  });


});