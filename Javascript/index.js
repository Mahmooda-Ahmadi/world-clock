
function updateTime(){
    let losAngelesElement = document.querySelector("#los-angeles");
let losangelesDateElement = losAngelesElement.querySelector(".date");
let losangelesTimeElement = losAngelesElement.querySelector(".time");

let losAngelesTime = moment.tz("America/Los_Angeles");
losangelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losangelesTimeElement.innerHTML = losAngelesTime.format("H:mm:ss [<small>]A[</small>]" );

let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");

let parisTime = moment.tz("Europe/paris");
parisDateElement.innerHTML = parisTime.format("MMMMM Do YYYY");
parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

}
updateTime();
setInterval(updateTime, 1000)
