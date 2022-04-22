import { Temporal} from '@js-temporal/polyfill'
const appDate = document.querySelector('.app--date');
const contentDate = appDate.querySelector('h1');
const contentDateBtn = appDate.querySelector('button');

const appFormDate = document.querySelector('.app--input-date');
const appSelect = appFormDate.querySelector('select');
const appInputBtn = appFormDate.querySelector('button');

let timezone;
let status = true;



const orcale = (timezone)=>{
    const zone = timezone;
    let date = Temporal.Now.plainDateTimeISO(zone)
    date.hour
    date.minute
    date.second
    contentDate.innerHTML=`<span>${date.hour}</span>:
    <span>${date.minute}</span>:
    <span>${date.second}</span>
    `;

    setTimeout(orcale.bind(null,zone),0)
}

orcale()

appSelect.addEventListener('click', ()=>{
    timezone = appSelect.value;
    orcale(timezone);
})




