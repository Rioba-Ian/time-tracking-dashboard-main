interface Timeframe {
  current: number;
  previous: number;
}

interface Timeframes {
  daily: Timeframe;
  weekly: Timeframe;
  monthly: Timeframe;
}

interface Data {
  title: string;
  timeframes: Timeframes;
}

type myData = Data[];

let state: string = "Daily";

const navLinks = document.querySelectorAll(".links-section li");
const cardRowTitle = document.querySelectorAll(".card-row p");
const cardHours: NodeListOf<Element> = document.querySelectorAll(
  ".card-row--content h2"
);
const cardHistory: NodeListOf<Element> = document.querySelectorAll(
  ".card-row--content span"
);

async function fetchData() {
  const res = await fetch(
    "https://raw.githubusercontent.com/Rioba-Ian/time-tracking-dashboard-main/master/script/data.json"
  );
  const myData: myData = await res.json();

  for (let i = 0; i < cardRowTitle.length; i++) {
    cardRowTitle[i].textContent = myData[i].title;
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const value = (e.target as HTMLLIElement).textContent;

      if (value === "Weekly") state = value;
      else if (value === "Monthly") state = value;
      else if (value === "Monthly") state = value;
      else state = "Daily";

      switch (state) {
        case "Weekly":
          for (let i = 0; i < cardHours.length; i++) {
            cardHours[
              i
            ].textContent = `${myData[i].timeframes.weekly.current} hrs`;
            cardHistory[
              i
            ].textContent = `Last Week - ${myData[i].timeframes.weekly.previous}hrs`;
          }
          break;
        case "Monthly":
          for (let i = 0; i < cardHours.length; i++) {
            cardHours[
              i
            ].textContent = `${myData[i].timeframes.monthly.current} hrs`;
            cardHistory[
              i
            ].textContent = `Last Month - ${myData[i].timeframes.monthly.previous}hrs`;
          }
          break;
        default:
          for (let i = 0; i < cardHours.length; i++) {
            cardHours[
              i
            ].textContent = `${myData[i].timeframes.daily.current} hrs`;
            cardHistory[
              i
            ].textContent = `Yesterday - ${myData[i].timeframes.daily.previous}hrs`;
          }
          break;
      }
    });
  });
}

fetchData();
