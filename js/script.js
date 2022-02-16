let totalBalance = 0;
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
        document.getElementById('total-balance').innerText = totalBalance;

        document.getElementById('total-expense').innerText = totalExpence;
    }

    else {
        alert("Expense is greater than Income");
    }




}

function saveCalculate() {
    let incomeText = document.getElementById('income-input');
    let incomeField = parseFloat(incomeText.value);

    let saveInput = document.getElementById('save-input');
    let saveValue = parseFloat(saveInput.value);

    let savingAmount = (incomeField * saveValue) / 100;
    let savingAmountTotal = document.getElementById('save-amount')
    savingAmountTotal.innerText = savingAmount;

    if (savingAmount < totalBalance) {
        let mainBalance = totalBalance - savingAmount;
        let remainingBalance = document.getElementById('remaining-balance')

        remainingBalance.innerText = mainBalance;

    } else {
        alert('Saving amount is bigger')
    }

}
