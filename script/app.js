"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let state = "Daily";
const navLinks = document.querySelectorAll(".links-section li");
const cardRowTitle = document.querySelectorAll(".card-row p");
const cardHours = document.querySelectorAll(".card-row--content h2");
const cardHistory = document.querySelectorAll(".card-row--content span");
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("./data.json");
        const myData = yield res.json();
        for (let i = 0; i < cardRowTitle.length; i++) {
            cardRowTitle[i].textContent = myData[i].title;
        }
        navLinks.forEach((link) => {
            link.addEventListener("click", (e) => {
                const value = e.target.textContent;
                if (value === "Weekly")
                    state = value;
                else if (value === "Monthly")
                    state = value;
                else if (value === "Monthly")
                    state = value;
                else
                    state = "Daily";
                switch (state) {
                    case "Weekly":
                        for (let i = 0; i < cardHours.length; i++) {
                            cardHours[i].textContent = `${myData[i].timeframes.weekly.current} hrs`;
                            cardHistory[i].textContent = `Last Week - ${myData[i].timeframes.weekly.previous}hrs`;
                        }
                        break;
                    case "Monthly":
                        for (let i = 0; i < cardHours.length; i++) {
                            cardHours[i].textContent = `${myData[i].timeframes.monthly.current} hrs`;
                            cardHistory[i].textContent = `Last Month - ${myData[i].timeframes.monthly.previous}hrs`;
                        }
                        break;
                    default:
                        for (let i = 0; i < cardHours.length; i++) {
                            cardHours[i].textContent = `${myData[i].timeframes.daily.current} hrs`;
                            cardHistory[i].textContent = `Yesterday - ${myData[i].timeframes.daily.previous}hrs`;
                        }
                        break;
                }
            });
        });
    });
}
fetchData();
