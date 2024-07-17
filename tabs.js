import createContactPage from "./contact";
import createRestaurantHomePage from "./restaurant";
import createMenuPage from "./menu";

const createTabs = () => {
  const tabHome = document.querySelector("#home-tab");
  const tabMenu = document.querySelector("#menu-tab");
  const tabContact = document.querySelector("#contact-tab");
  tabHome.addEventListener("click", () => {
    clearContent();
    createRestaurantHomePage();
  });
  tabMenu.addEventListener("click", () => {
    clearContent();
    createMenuPage();
  });
  tabContact.addEventListener("click", () => {
    clearContent();
    createContactPage();
  });
};

function clearContent() {
  const content = document.querySelector("#content");
  const pageContent = document.querySelector(".page-content");
  if (pageContent) {
    content.removeChild(pageContent);
  }
}
export default createTabs;
