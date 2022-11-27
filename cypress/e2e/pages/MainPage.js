class MainPage {
  city_form = ".ch-header-sub__city-confirm";
  header_city_val = ".ch-header-sub > div > div > div:nth-child(1) > a > span";
  user_city_val_city_form = "div.ch-header-city-confirm__title > span";
  city_confirm_btn = ".ch-header-city-confirm__row > div:nth-child(2) > button";
  city_choose_btn = ".ch-header-city-confirm__row > div:nth-child(1) > button";


  open() {
    cy.visit("https://cozyhome.ru/");
  }

  confirm_city() {
    cy.get(this.user_city_val_city_form).invoke("text").as("user_city_val");
    cy.get(this.city_confirm_btn).click();
    cy.get(this.header_city_val).invoke("text").as("header_city_val_set");
    cy.get("@user_city_val").then((user_city_val) => {
      cy.get("@header_city_val_set").then((header_city_val_set) => {
        expect(header_city_val_set).to.equal(user_city_val);
      });
    });


  }


  openRandomCard() {
    cy.get(this.productCard).eq(3).click();
  }

  getCount() {
    return cy.get(this.productCard).then(($el) => {
      const itemCount = $el.length;
    });
  }
}

export default MainPage;