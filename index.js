const inputVal = document.getElementById('input-val')
const convertBtn = document.getElementById('convert-btn')
let lengthOutput = document.getElementById('length-output')
let volumeOutput = document.getElementById('volume-output')
let massOutput = document.getElementById('mass-output')

const unitChange = (unitToChange, divisor) => {
    return unitToChange/divisor
}

convertBtn.addEventListener('click', () => {
    if(inputVal.value) {
        let unitVal = inputVal.value
        let feetVal = unitChange(unitVal, 1/3.28084).toFixed(3)
        let meterVal = unitChange(unitVal, 3.28084).toFixed(3)
        let gallonVal = unitChange(unitVal, 3.785).toFixed(3)
        let litreVal = unitChange(unitVal, 1/3.785).toFixed(3)
        let poundVal = unitChange(unitVal, 1/ 2.205).toFixed(3)
        let kiloVal = unitChange(unitVal,  2.205).toFixed(3)
        
        lengthOutput.textContent = `${unitVal} meters = ${feetVal} feet | ${unitVal} feet = ${meterVal} meters`
        volumeOutput.textContent = `${unitVal} liters = ${gallonVal} gallons | ${unitVal} gallons = ${litreVal} liters`
        massOutput.textContent = `${unitVal} kilos = ${poundVal} pounds | ${unitVal} pounds = ${kiloVal} kilos`
        
        inputVal.value = ''
    }
})