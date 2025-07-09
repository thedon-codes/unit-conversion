/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
C = (F - 32) / 1.8
*/

const lenEl = document.querySelector("#len")
const volEl = document.querySelector("#vol")
const massEl = document.querySelector("#mass")
const tempEl = document.querySelector("#temp")
const convertBtn = document.querySelector("#convert-btn")
const inputEl = document.querySelector("#input-value")

convertBtn.addEventListener("click", function(){
    const value = Number(inputEl.value.trim())
    const errorMsgEl = document.querySelector("#error-msg")

    if (isNaN(value) || inputEl.value.trim() === "") {
        errorMsgEl.textContent = "Invalid input! Please enter a valid number."
        return
    } else {
        errorMsgEl.textContent = ""
        convert(value)
    }
})

function convert(num) {
    // Length
    lenEl.textContent = 
        `${num} meters = ${(num * 3.28084).toFixed(3)} feet | ` +
        `${num} feet = ${(num * 0.3048).toFixed(3)} meters`;

    // Volume
    volEl.textContent = 
        `${num} liters = ${(num * 0.264172).toFixed(3)} gallons | ` +
        `${num} gallons = ${(num * 3.78541).toFixed(3)} liters`;

    // Mass
    massEl.textContent = 
        `${num} kilos = ${(num * 2.20462).toFixed(3)} pounds | ` +
        `${num} pounds = ${(num * 0.453592).toFixed(3)} kilos`;

    // Temperature
    tempEl.textContent = 
        `${num}°C = ${((num * 1.8) + 32).toFixed(3)}°F | ` +
        `${num}°F = ${((num - 32) / 1.8).toFixed(3)}°C`;
} 



