import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";

require("cypress-xpath");
describe("empty spec", () => {
  const main = new MainPage();
  const product = new ProductPage();
  it("Открываем главную страницу", () => {
    main.open();
    main.confirm_city();
  });


});