let totalBalance = 0;
let totalExpence = 0;
const failError = document.getElementById('notify-fail');

// for income and cost 
let incomeText = document.getElementById('income-input');
let foodText = document.getElementById('food-input');
let rentText = document.getElementById('rent-input');
let clothText = document.getElementById('cloth-input');

// for save balance 
let saveInput = document.getElementById('save-input');
let savingAmountTotal = document.getElementById('save-amount')

// for remaining 
let remainingBalance = document.getElementById('remaining-balance')

// Using Function for reduct duplicasy 
function subCalc(currentAmount, newAmount) {
    return currentAmount - newAmount;
}
// income amont ant cost calculatin 
function incomeCalculate() {
    let incomeField = parseFloat(incomeText.value);
    // totalBalance = incomeField;
    let foodCost = parseFloat(foodText.value);
    let rentCost = parseFloat(rentText.value)
    let clothCost = parseFloat(clothText.value);

    if ((foodCost > 0) && (rentCost > 0) && (clothCost >= 0)) {
        totalExpence = foodCost + rentCost + clothCost;
        totalBalance = subCalc(incomeField, totalExpence);
    }
    else {
        alert('Submit Positive Number Only');
    }

    if (totalExpence < incomeField) {
        failError.style.display = 'none'
        document.getElementById('total-balance').innerText = totalBalance;
        document.getElementById('total-expense').innerText = totalExpence;
    }
    else {
        failError.style.display = 'block';
    }
    foodText.value = '';
    rentText.value = '';
    clothText.value = '';
}
// save balance and remaining balance calculatin 
function saveCalculate() {
    let incomeField = parseFloat(incomeText.value);
    let saveValue = parseFloat(saveInput.value);
    let savingAmount = (incomeField * saveValue) / 100;

    if (savingAmount < totalBalance) {
        failError.style.display = 'none'
        if (savingAmount > 0) {
            savingAmountTotal.innerText = savingAmount;
        }
        let mainBalance = subCalc(totalBalance, savingAmount)
        remainingBalance.innerText = mainBalance;

    } else {
        failError.style.display = 'block'
    }
    saveInput.value = '';
}