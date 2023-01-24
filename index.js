const meterFeetRatio = 3.281
const literGallonRatio = 0.264
const kiloPoundRatio = 2.204

const inputEl = document.querySelector("#input-el")
const convertBtn = document.querySelector("#convert-btn")

const numberEl = document.querySelectorAll(".number-el")

const feetEl = document.querySelector("#feet-el")
const metersEl = document.querySelector("#meters-el")
const gallonsEl = document.querySelector("#gallons-el")
const litersEl = document.querySelector("#liters-el")
const poundsEl = document.querySelector("#pounds-el")
const kilosEl = document.querySelector("#kilos-el")

convertBtn.addEventListener("click", function() {
    let number = Number(inputEl.value)
    
    if (!number && number !== 0) {
        inputEl.style.animationName = "invalid"
        setTimeout(function() {
            inputEl.style.animationName = "none"
        }, 1000)
    } else {
        numberEl.forEach(element => {
            element.textContent = number
        })
        feetEl.textContent = metersToFeet(number).toFixed(3)
        metersEl.textContent = feetToMeters(number).toFixed(3)
        gallonsEl.textContent = litersToGallons(number).toFixed(3)
        litersEl.textContent = gallonsToLiters(number).toFixed(3)
        poundsEl.textContent = kilosToPounds(number).toFixed(3)
        kilosEl.textContent = poundsToKilos(number).toFixed(3)
    }
})

function metersToFeet(num) {
    return num * meterFeetRatio
}

function feetToMeters(num) {
    return num / meterFeetRatio
}

function litersToGallons(num) {
    return num * literGallonRatio
}

function gallonsToLiters(num) {
    return num / literGallonRatio
}

function kilosToPounds(num) {
    return num * kiloPoundRatio
}

function poundsToKilos(num) {
    return num / kiloPoundRatio
}