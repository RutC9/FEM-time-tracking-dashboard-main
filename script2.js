function change_timeperiod(timeperiod) {
  fetch("data.json")
    .then((response) => response.json())
    .then((then_response) => {
      let jsondata = then_response;

      // removing active class
      let all_time_options = document.querySelectorAll(".timespan-menu-item");
      all_time_options.forEach((class_elements) => {
        class_elements.classList.remove("active-timespan-menu-item");
      });
      document
        .getElementById(timeperiod)
        .classList.add("active-timespan-menu-item");
      let time;
      if (timeperiod == "weekly") {
        time = "week";
      } else if (timeperiod == "daily") {
        time = "day";
      } else if (timeperiod == "monthly") {
        time = "Month";
      }
      // for each loop
      jsondata.forEach((element) => {
        //

        let category1 = element["title"].toLowerCase().replace(/ /g, "") + "p1";
        let category2 = element["title"].toLowerCase().replace(/ /g, "") + "p2";

        //

        document.getElementById(`${category1}`).innerHTML =
          element["timeframes"][timeperiod]["current"] + "hrs";

        document.getElementById(
          `${category2}`
        ).innerHTML = `Last ${time} - ${element["timeframes"][timeperiod]["previous"]}hrs`;
      });
    });
}
change_timeperiod("weekly");
document.getElementById("daily").addEventListener("click", () => {
  change_timeperiod("daily");
});
document.getElementById("weekly").addEventListener("click", () => {
  change_timeperiod("weekly");
});
document.getElementById("monthly").addEventListener("click", () => {
  change_timeperiod("monthly");
});
