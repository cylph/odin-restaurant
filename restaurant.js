const createRestaurantHomePage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  //   create and append image element
  const image = document.createElement("img");
  image.src =
    "https://b70f084e29f3f8faffb0-389fffc5b90936635d166a32fdb11b6a.ssl.cf3.rackcdn.com/andy-hayler-brilliant-brilliant%204032%20outside%20in%202022-crop-v1.jpeg";
  image.height = "300";
  pageContent.appendChild(image);

  //   create and append headline element
  const headliine = document.createElement("h1");
  headliine.textContent = "Welcome to our restaurant!!";
  pageContent.appendChild(headliine);

  //   create and append copy element
  const copy = document.createElement("p");
  copy.textContent = "We serve the best food in town.";
  pageContent.appendChild(copy);
  content.appendChild(pageContent);
};

export default createRestaurantHomePage;
