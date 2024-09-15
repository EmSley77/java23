console.log("Labb 2");
console.log("Lycka till!");

let weeklySpecial = {
  weeklySpecialsMenu: {
    Monday: [
      {
        name: "BBQ Revben",
        price: 108.0,
        description: "Långkokta revben med BBQ-sås",
        time: "11:00-14:00",
      },
      {
        name: "Grillad Kyckling",
        price: 135.0,
        description: "Marinerad kycklingbröst grillad till perfektion",
        time: "17:00-20:00",
      },
    ],
    Tuesday: [
      {
        name: "Biff",
        price: 171.0,
        description: "Saftig biff med vitlökssmör",
        time: "11:00-14:00",
      },
      {
        name: "Grillad Lax",
        price: 162.0,
        description: "Laxfilé med citron och örter",
        time: "17:00-20:00",
      },
    ],
    Wednesday: [
      {
        name: "Grönsaksspett",
        price: 72.0,
        description: "Blandade grönsaker grillade med olivolja",
        time: "11:00-14:00",
      },
      {
        name: "Pommes Frites",
        price: 45.0,
        description: "Krispiga gyllene pommes frites",
        time: "17:00-20:00",
      },
    ],
    Thursday: [
      {
        name: "Lökringar",
        price: 54.0,
        description: "Panerade och friterade lökringar",
        time: "11:00-14:00",
      },
      {
        name: "Mozzarella Sticks",
        price: 63.0,
        description: "Friterade mozzarellaoststänger",
        time: "17:00-20:00",
      },
    ],
    Friday: [
      {
        name: "Kycklingvingar",
        price: 81.0,
        description: "Kryddiga kycklingvingar med dipsås",
        time: "11:00-14:00",
      },
      {
        name: "Nachos",
        price: 72.0,
        description: "Tortillachips med ost och jalapeños",
        time: "17:00-20:00",
      },
    ],
    Saturday: [
      {
        name: "Grillad Kyckling",
        price: 135.0,
        description: "Marinerad kycklingbröst grillad till perfektion",
        time: "11:00-14:00",
      },
      {
        name: "BBQ Revben",
        price: 108.0,
        description: "Långkokta revben med BBQ-sås",
        time: "17:00-20:00",
      },
    ],
    Sunday: [
      {
        name: "Grillad Lax",
        price: 162.0,
        description: "Laxfilé med citron och örter",
        time: "11:00-14:00",
      },
      {
        name: "Biff",
        price: 171.0,
        description: "Saftig biff med vitlökssmör",
        time: "17:00-20:00",
      },
    ],
  },
};

let today = new Date();
let currentHour = today.getHours();
let daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function getTodaysName() {
  return daysOfWeek[(today.getDay() + 6) % 7];
}

window.onload = function () {
  fetch("../labb-2/data/specials.json")
    .then((response) => response.json())
    .then((data) => {
      // Check if it's dinner time (after 17:00)
      let isDinnerTime = currentHour >= 17;

      // Get today's specials from the fetched data
      let todaysSpecial = data.weeklySpecialsMenu[getTodaysName()];

      // Select lunch or dinner based on the current time
      let upcomingSpecial = isDinnerTime ? todaysSpecial[1] : todaysSpecial[0];

      // Update the content in the DOM
      document.getElementById("specials-title").textContent =
        "kl " +
        today.getHours() +
        ":" +
        String(today.getMinutes()).padStart(2, "0") +
        " " +
        upcomingSpecial.name;

      document.getElementById("specials-dish-name").textContent =
        upcomingSpecial.description;
      document.getElementById("specials-price").textContent =
        upcomingSpecial.price + " kr";

      // Hide loading spinner and show the content
      document.getElementById("js-loading").classList.add("hidden");
      document.getElementById("specials__content").style.visibility = "visible";
      document.getElementById("specials__content").style.opacity = "100";
    })
    .catch((error) => {
      console.error("Error loading specials", error);
    });
};

function getYesterdaysName() {
  return daysOfWeek[(today.getDay() + 5) % 7];
}

function getYesterday() {
  //rensa tidigare text
  document.getElementById("specials-title").textContent = "";
  document.getElementById("specials-dish-name").textContent = "";
  document.getElementById("specials-price").textContent = "";

  fetch("../labb-2/data/specials.json")
    .then((response) => response.json())
    .then((data) => {
      // Check if it's dinner time (after 17:00)
      let isDinnerTime = currentHour >= 17;

      // Get today's specials from the fetched data
      let todaysSpecial = data.weeklySpecialsMenu[getYesterdaysName()];

      // Select lunch or dinner based on the current time
      let upcomingSpecial = isDinnerTime ? todaysSpecial[1] : todaysSpecial[0];

      // Update the content in the DOM
      document.getElementById("specials-title").textContent =
        "kl " +
        today.getHours() +
        ":" +
        String(today.getMinutes()).padStart(2, "0") +
        " " +
        upcomingSpecial.name;

      document.getElementById("specials-dish-name").textContent =
        upcomingSpecial.description;
      document.getElementById("specials-price").textContent =
        upcomingSpecial.price + " kr";
    });
}

const menuButtons = document.getElementsByClassName("options");

Array.from(menuButtons).forEach((button) => {
  //for each button add event listener
  button.addEventListener("click", function () {
    //remove class options--active when button not active anymore
    Array.from(menuButtons).forEach((btn) =>
      btn.classList.remove("options--active")
    );

    // Add class options--active to the active button
    button.classList.add("options--active");

    //get value from button
    const category = button.value;

    // Get the content container
    const content = document.getElementById("content");

    content.innerHTML = " ";

    fetch("../labb-2/data/menu.json")
      .then((response) => response.json())
      .then((data) => {
        // Create a table to display the items
        const table = document.createElement("table");
        const tbody = document.createElement("tbody");

        // Populate content based on the selected category
        data[category].forEach((item) => {
          const tr = document.createElement("tr");
          const td = document.createElement("td");

          // Set table cell content
          td.textContent = `${item.name} - ${item.description} - ${item.price} kr`;

          tr.appendChild(td);
          tbody.appendChild(tr);
        });

        // Append the table body to the table and add to the content section
        table.appendChild(tbody);
        content.appendChild(table);
      })
      .catch((error) => {
        console.error("Error loading menu:", error);
        content.textContent = "Error loading menu data.";
      });
  });
});

// aside menu_______________________________________________

const topLine = document.querySelector(".menu-toggle-bar--top");
const middleLine = document.querySelector(".menu-toggle-bar--middle");
const bottomLine = document.querySelector(".menu-toggle-bar--bottom");

const asideButton = document.getElementById("menu-toggle");

const specialMenu = document.getElementById("specials-menu");
const day = document.getElementById("day");
const lunch = document.getElementById("lunch");
const dinner = document.getElementById("dinner");
const menuAside = document.getElementById("menu-aside");

asideButton.addEventListener("click", function () {
  specialMenu.classList.toggle("specials__menu--open");

  /*   topLine.classList.toggle("nav-open");
  middleLine.classList.toggle("nav-open");
  bottomLine.classList.toggle("nav-open");
 */
  menuAside.innerHTML = " ";

  fetch("../labb-2/data/specials.json")
    .then((response) => response.json())
    .then((data) => {
      // Iterate over the days and display specials
      Object.keys(data.weeklySpecialsMenu).forEach((day) => {
        const dayTitle = document.createElement("h4");
        const lunchItem = document.createElement("p");
        const dinnerItem = document.createElement("p");

        const lunchSpecial = data.weeklySpecialsMenu[day][0];
        const dinnerSpecial = data.weeklySpecialsMenu[day][1];

        dayTitle.textContent = day;
        lunchItem.textContent = `Lunch: ${lunchSpecial.name} - ${lunchSpecial.description} (${lunchSpecial.price} kr, ${lunchSpecial.time})`;
        dinnerItem.textContent = `Dinner: ${dinnerSpecial.name} - ${dinnerSpecial.description} (${dinnerSpecial.price} kr, ${dinnerSpecial.time})`;

        menuAside.append(dayTitle, lunchItem, dinnerItem);
      });
    })
    .catch((error) => {
      console.error("Error loading specials:", error);
      menuAside.innerHTML = "Error loading menu data.";
    });
});
