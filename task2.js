import { Temporal } from "@js-temporal/polyfill";
const appDate = document.querySelector(".app--date");
const clock = appDate.querySelector(".clock");
const hours = clock.querySelector(".hours");
const minutes = clock.querySelector(".minute");
const seconds = clock.querySelector(".second");

const appFormDate = document.querySelector(".app--input-date");
const appSelect = appFormDate.querySelector("select");

let timezone;
let timer;

const orcale = (timezone) => {
  const zone = timezone;
  let date = Temporal.Now.plainDateTimeISO(zone);
  const { hour, minute, second } = date;
  hours.textContent = hour + `:`;
  minutes.textContent = String(minute).padStart(2, "0") + `:`;
  seconds.textContent = String(second).padStart(2, "0");
  timer = setTimeout(() => orcale(timezone), 0);
};

orcale();

appSelect.addEventListener("change", () => {
  timezone = appSelect.value;

  if (timer) {
    clearTimeout(timer);
  }
  orcale(timezone);
});
