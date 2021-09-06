console.log(Date.now()) //ms since Midnight Jan 1st 1970
console.log(Date()) //Auto calls toString()
console.log(new Date().toString())

console.log(new Date().getDay()) //0 aka Sunday – first day
console.log(new Intl.DateTimeFormat(
    'en-GB', { weekday: 'long'})
    .format(new Date())) //e.g. ’Sunday’

console.log(new Date().getDate()) //Gets the Day number (date) of the month
console.log(new Date().getMonth()) //e.g. 7 – **Note** Counts from 0
console.log(new Date().getFullYear()) //2021
console.log(new Date().getHours()) //24hr number
console.log(new Date().getMinutes()) //e.g. 6 - number
console.log(new Date().getSeconds()) //e.g. 13 – in the range 0-59



