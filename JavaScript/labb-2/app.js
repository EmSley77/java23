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
  // `getDay()` returns 0 for Sunday, 1 for Monday, and so on. Adjust to match the daysOfWeek array.
  return daysOfWeek[(today.getDay() + 6) % 7]; // This ensures 0 (Sunday) wraps around to 6 (Sunday in array).
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

// set the get day -2 to get yesterdays special

function getYesterdaysName() {
  return daysOfWeek[(today.getDay() + 5) % 7]; // Wrap around for yesterday
}

function getYesterday() {

/*   const yesterDaySpecial = document.getElementsByClassName("button--specials");
 */

 // Clear previous content before loading yesterday's special
 document.getElementById("specials-title").textContent = "Loading...";
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
};
// get grill snacks and other information
let menu = {
  Grill: [
    {
      name: "BBQ Revben",
      price: "120",
      description: "Långkokta revben med BBQ-sås",
    },
    {
      name: "Grillad Kyckling",
      price: "150",
      description: "Marinerad kycklingbröst grillad till perfektion",
    },
    {
      name: "Biff",
      price: "190",
      description: "Saftig biff med vitlökssmör",
    },
    {
      name: "Grillad Lax",
      price: "180",
      description: "Laxfilé med citron och örter",
    },
    {
      name: "Grönsaksspett",
      price: "80",
      description: "Blandade grönsaker grillade med olivolja",
    },
  ],
  Snacks: [
    {
      name: "Pommes Frites",
      price: "50",
      description: "Krispiga gyllene pommes frites",
    },
    {
      name: "Lökringar",
      price: "60",
      description: "Panerade och friterade lökringar",
    },
    {
      name: "Mozzarella Sticks",
      price: "70",
      description: "Friterade mozzarellaoststänger",
    },
    {
      name: "Kycklingvingar",
      price: "90",
      description: "Kryddiga kycklingvingar med dipsås",
    },
    {
      name: "Nachos",
      price: "80",
      description: "Tortillachips med ost och jalapeños",
    },
  ],
  Drycker: [
    {
      name: "Coca Cola",
      price: "30",
      description: "Klassisk Coca Cola",
    },
    {
      name: "Apelsinjuice",
      price: "40",
      description: "Färskpressad apelsinjuice",
    },
    {
      name: "Lemonad",
      price: "35",
      description: "Hemlagad lemonad",
    },
    {
      name: "Is-te",
      price: "35",
      description: "Kall te med citron",
    },
    {
      name: "Kaffe",
      price: "25",
      description: "Nybryggt kaffe",
    },
  ],
};

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

    // Populate content based on the selected category
    menu[category].forEach((item) => {
      const table = document.createElement("table");
      const tr = document.createElement("tr");
      const td = document.createElement("td");

      // Set table cell content
      td.textContent = `${item.name} - ${item.description} - ${item.price} kr`;
      tr.appendChild(td);
      table.appendChild(tr);

      // Append the table to the content section
      content.appendChild(table);
    });
  });
});

// aside menu_______________________________________________
/* 
const top = document.getElementsByClassName("menu-toggle-bar--top");
const middle = document.getElementsByClassName("menu-toggle-bar--middle");
const bottom = document.getElementsByClassName("menu-toggle-bar--bottom"); */

const asideButton = document.getElementById("menu-toggle");

const specialMenu = document.getElementById("specials-menu");
const day = document.getElementById("day");
const lunch = document.getElementById("lunch");
const dinner = document.getElementById("dinner");
const menuAside = document.getElementById("menu-aside");

asideButton.addEventListener("click", function () {
  specialMenu.classList.toggle("specials__menu--open");

  menuAside.innerHTML = " ";

  Object.keys(weeklySpecial.weeklySpecialsMenu).forEach(function (day) {
    const dayTitle = document.createElement("h4");
    const lunchItem = document.createElement("p");
    const dinnerItem = document.createElement("p");

    const lunchSpecial = weeklySpecial.weeklySpecialsMenu[day][0];
    const dinnerSpecial = weeklySpecial.weeklySpecialsMenu[day][1];

    dayTitle.textContent = day;
    lunchItem.textContent = `Lunch: ${lunchSpecial.name} - ${lunchSpecial.description} (${lunchSpecial.price} kr, ${lunchSpecial.time})`;
    dinnerItem.textContent = `Dinner: ${dinnerSpecial.name} - ${dinnerSpecial.description} (${dinnerSpecial.price} kr, ${dinnerSpecial.time})`;

    menuAside.append(dayTitle, lunchItem, dinnerItem);
  });
});
