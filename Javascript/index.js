
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

function updateCity(event){
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment.tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = ` <div class="city" ">
            <div>
                <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>

            <div class="time">${cityTime.format("hh:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>
    `
}
updateTime();
setInterval(updateTime, 1000)

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);