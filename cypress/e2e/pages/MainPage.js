import { open_page_stage } from "../../support/commands";

export default class MainPage {
  city_form = ".ch-header-sub__city-confirm";
  city_choose_btn = ".ch-header-city-confirm__row > div:nth-child(1) > button";
  footer_city_val = ".ch-footer__bottom-city > a > span";
  header_city_val = ".ch-header-sub > div > div > div:nth-child(1) > a > span";
  user_city_val_city_form = "div.ch-header-city-confirm__title > span";
  city_confirm_btn = ".ch-header-city-confirm__row > div:nth-child(2) > button";
  city_choose_bth_header = ".ch-header-sub__link > span";
  city_in_popup = ".ch-popup-city__secondary > ul:nth-child(5) > li:nth-child(1) > a";
  sign_pass_btn = "form > a";
  input_tel_field = "main > div > div > form > div:nth-child(2) > input";
  input_pass_field = "form > div:nth-child(3) > input[type=password]";
  enter_button = "main > div > div > form > .form-auth__btn > button";
  favicon = ".ch-col-auto.ch-header-main__logo > a > img";


  confirm_city() {
    cy
      .get(this.user_city_val_city_form)
      .invoke("text")
      .as("user_city_val");
    cy
      .get(this.city_confirm_btn)
      .click();
    cy
      .get(this.header_city_val)
      .invoke("text")
      .as("header_city_val_set");
    cy
      .get(this.footer_city_val)
      .invoke("text")
      .as("footer_city_val");
    cy
      .get("@user_city_val")
      .then((user_city_val) => {
        cy
          .get("@header_city_val_set")
          .then((header_city_val_set) => {
            expect(header_city_val_set)
              .to
              .equal(user_city_val);
          });
      });
    cy
      .get("@user_city_val")
      .then((user_city_val) => {
        cy
          .get("@footer_city_val")
          .then((footer_city_val_set) => {
            expect(footer_city_val_set)
              .to
              .equal(user_city_val);
          });
      });
  }

  choose_city() {
    cy
      .get(this.city_choose_bth_header).click();
    cy
      .get(this.city_in_popup)
      .invoke("text")
      .as("city_in_popup");
    cy
      .get(this.city_in_popup).click();
    cy.get(this.header_city_val)
      .invoke("text")
      .as("header_city_val_set");
    cy
      .get(this.footer_city_val)
      .invoke("text")
      .as("footer_city_val");
    cy
      .get("@city_in_popup")
      .then((city_in_popup) => {
        cy
          .get("@header_city_val_set")
          .then((header_city_val_set) => {
            expect(header_city_val_set)
              .to
              .equal(city_in_popup);
          });
      });
    cy
      .get("@city_in_popup")
      .then((city_in_popup) => {
        cy
          .get("@footer_city_val")
          .then((footer_city_val_set) => {
            expect(footer_city_val_set)
              .to
              .equal(city_in_popup);
          });
      });

  }

  user_authorization() {
    let url = "/auth/login";
    open_page_stage(url);
    cy
      .get(this.city_confirm_btn).click();
    cy
      .get(this.sign_pass_btn).click();
    cy
      .get(this.input_tel_field)
      .type("9833032067")
      .should("includes.value", "+7 (983) 303 20 67");
    cy
      .get(this.input_pass_field)
      .type("JH38djsf2")
      .should("includes.value", "JH38djsf2");
    cy
      .wait(500);
    cy
      .get(this.enter_button)
      .click()
      .should("have.text", "Войти");
    cy
      .get(".lk-page__title")
      .should("include.text", "Личные данные");
    cy
      .get(":nth-child(2) > .lk-user-data__value")
      .should("include.text", "+7 (983) 303-20-67");
    cy
      .get(this.favicon)
      .should("be.visible")
      .click();
  }

  // openRandomCard() {
  //   cy.get(this.productCard).eq(3).click();
  // }

  /*  getCount() {
      return cy.get(this.productCard).then(($el) => {
        const itemCount = $el.length;
      });
    }*/
}

