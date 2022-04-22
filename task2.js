import { Temporal} from '@js-temporal/polyfill'
const appDate = document.querySelector('.app--date');
const contentDate = appDate.querySelector('h1');
const contentDateBtn = appDate.querySelector('button');

const appFormDate = document.querySelector('.app--input-date');
const appInput = appFormDate.querySelector('input');
const appInputBtn = appFormDate.querySelector('button');


const contentChagner = document.querySelector('.app--content-changer')

const date34 = Temporal.Now.plainDateTimeISO()
date34.hour
date34.minute
date34.second
const date = Temporal.Now.zonedDateTimeISO().toString();
const date1 = Temporal.Now.instant().toString();
const date2 = Temporal.TimeZone.from('Europe/Chisinau')

console.log(date34.hour)
console.log(date1)
console.log(date2)
contentDate.textContent = date2;


contentDateBtn.addEventListener('click', ()=>{
contentChagner.classList.toggle('visible')
console.log('text')
})
