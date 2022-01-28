let timeframe = "weekly";

const container = document.querySelector(".container");

const menu = document.querySelectorAll(".timespan-menu-item");

menu.forEach((element) => {
  element.addEventListener("click", timespan_items);
});

// fetch json data
var newdata = {}; /*  creating a dict */
fetch("./data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    jsonData.forEach((element) => {
      // storing data
      // console.log(element.title);
      newdata[element.title] = element.timeframes;
    });
    console.log(newdata["Play"]);
  });

// functions
function timespan_items(event) {
  console.log(
    "classlist of",
    event.target.innerText.toLowerCase(),
    "\n",
    event.target.classList
  );

  menu.forEach((element) => {
    element.classList.remove("menu-active");
  });

  event.target.classList.add("menu-active");
  timeframe = event.target.innerText.toLowerCase();
}
