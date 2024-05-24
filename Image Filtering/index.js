//? Accessing elements of the HTML in to the JavaScript
const tabs = document.querySelector(".tabs");
const gallery = document.querySelectorAll(".images");

//? Add the event to the images filtering list of the all gallery images
tabs.addEventListener("click", (event) => {
  console.log(event.target.dataset.category);
  if (event.target.dataset.category != undefined) {
    filterSearch(event.target.dataset.category); //! Call the function
    updateActiveTabs(event.target); //! Call the function of the update the current active tabs
  }
});

//TODO: Function to search (filtering) the images from the given all the images
const filterSearch = (value) => {
  gallery.forEach((currElem) => {
    console.log(currElem.dataset.category);
    if (currElem.dataset.category === value || value === "all") {
      currElem.style.display = "block";
    } else {
      currElem.style.display = "none";
    }
  });
};

//TODO: Function to update the active tabs
const updateActiveTabs = (activeTab) => {
  const allTabs = tabs.querySelectorAll("li");
  allTabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  activeTab.classList.add("active");
};
