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
    let expence = incomeField - totalExpence;

    let expenceField = document.getElementById('total-expense');
    expenceField.innerText = totalExpence;
    let totalBalance = document.getElementById('total-balance')
    totalBalance.innerText = expence

}