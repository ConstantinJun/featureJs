import { Temporal} from '@js-temporal/polyfill'
const appDate = document.querySelector('.app--date');
const contentDate = appDate.querySelector('h1');
const contentDateBtn = appDate.querySelector('button');

const appFormDate = document.querySelector('.app--input-date');
const appInput = appFormDate.querySelector('input');
const appInputBtn = appFormDate.querySelector('button');


const contentChagner = document.querySelector('.app--content-changer')


const date = Temporal.Now.zonedDateTime().toString();

console.log(date)

contentDate.textContent = date;


contentDateBtn.addEventListener('click', ()=>{
contentChagner.classList.toggle('visible')
})
