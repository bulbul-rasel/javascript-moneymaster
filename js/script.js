let totalBalance = 0;
const failError = document.getElementById('notify-fail');
function incomeCalculate() {
    let incomeText = document.getElementById('income-input');
    let incomeField = parseFloat(incomeText.value);

    let foodText = document.getElementById('food-input');
    let foodCost = parseFloat(foodText.value);
    let rentText = document.getElementById('rent-input');
    let rentCost = parseFloat(rentText.value)
    let clothText = document.getElementById('cloth-input');
    let clothCost = parseFloat(clothText.value);

    let totalExpence = foodCost + rentCost + clothCost;
    totalBalance = incomeField - totalExpence;

    if (totalExpence < incomeField) {
        failError.style.display = 'none'
        document.getElementById('total-balance').innerText = totalBalance;

        document.getElementById('total-expense').innerText = totalExpence;
    }

    else {
        failError.style.display = 'block'
    }

}

function saveCalculate() {
    let incomeText = document.getElementById('income-input');
    let incomeField = parseFloat(incomeText.value);

    let saveInput = document.getElementById('save-input');
    let saveValue = parseFloat(saveInput.value);

    let savingAmountTotal = document.getElementById('save-amount')
    let savingAmount = (incomeField * saveValue) / 100;

    if (savingAmount < totalBalance) {
        failError.style.display = 'none'
        if (savingAmount > 0) {
            savingAmountTotal.innerText = savingAmount;
        }
        let mainBalance = totalBalance - savingAmount;
        let remainingBalance = document.getElementById('remaining-balance')

        remainingBalance.innerText = mainBalance;

    } else {
        failError.style.display = 'block'
    }

}
