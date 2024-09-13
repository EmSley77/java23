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

const todaysName = daysOfWeek[today.getDay() - 1];

console.log("Today is:", todaysName);

const isDinnerTime = currentHour >= 17;

const todaysSpecial = weeklySpecial.weeklySpecialsMenu[todaysName];
const upcomingSpecial = isDinnerTime ? todaysSpecial[1] : todaysSpecial[0];

const title = (document.getElementById("specials-title").textContent =
  upcomingSpecial.name);
const specialsName = (document.getElementById(
  "specials-dish-name"
).textContent = upcomingSpecial.description);
const price = (document.getElementById("specials-price").textContent =
  upcomingSpecial.price);

// Hide the loading GIF

// Show the specials content

console.log("Specials for today:");
console.log(title);
console.log(specialsName);
console.log(price);

const yesterDaySpecial = document.getElementsByClassName(
  "button button--specials"
);

