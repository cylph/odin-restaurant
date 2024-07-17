import createRestaurantHomePage from "./restaurant";
import createTabs from "./tabs";

// pageLoad will create homepage
function initialLoad() {
  createTabs();
  createRestaurantHomePage();
}

export default initialLoad;
