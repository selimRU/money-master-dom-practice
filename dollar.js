document.getElementById('btn-cal').addEventListener('click', function () {
    // const incomeField = document.getElementById('income-id');
    // const incomeFieldValueString = incomeField.value;
    // const totalIncome = parseInt(incomeFieldValueString);
    const totalIncome = getInputValue('income-id');

    // const foodExpenceField = document.getElementById('foods');
    // const foodExpenceValueString = foodExpenceField.value;
    // const totalFoodExpence = parseInt(foodExpenceValueString);
    const totalFoodExpence = getInputValue('foods');

    // const rentField = document.getElementById('rents');
    // const rentExpenceValueString = rentField.value;
    // const totalRentExpence = parseInt(rentExpenceValueString);
    const totalRentExpence = getInputValue('rents');

    // const clothesField = document.getElementById('clothess');
    // const clothesFieldValueSAring = clothesField.value;
    // const totalClothesExpences = parseInt(clothesFieldValueSAring);
    const totalClothesExpences = getInputValue('clothess');

    const expenceTotal = totalFoodExpence + totalRentExpence + totalClothesExpences;



    // const totalExpenceElement = document.getElementById('tot-expence');
    // let totalExpence = totalExpenceElement.innerText;
    // totalExpenceElement.innerText = expenceTotal;
    // totalExpence = expenceTotal
    getInnerText('tot-expence', expenceTotal);

    // const totalBalanceElement = document.getElementById('balance');
    // let totalBalance = totalBalanceElement.innerText;
    // totalBalanceElement.innerText = balanceTotal;
    // totalBalance = balanceTotal
    const balanceTotal = totalIncome - expenceTotal;
    getInnerText('balance', balanceTotal);

})

document.getElementById('save-btnn').addEventListener('click', function () {
    // const incomeField = document.getElementById('income-id');
    // const incomeFieldValueString = incomeField.value;
    // const totalIncome = parseInt(incomeFieldValueString);
    const totalIncome = getInputValue('income-id');

    // const foodExpenceField = document.getElementById('foods');
    // const foodExpenceValueString = foodExpenceField.value;
    // const totalFoodExpence = parseInt(foodExpenceValueString);
    const totalFoodExpence = getInputValue('foods');

    // const rentField = document.getElementById('rents');
    // const rentExpenceValueString = rentField.value;
    // const totalRentExpence = parseInt(rentExpenceValueString);
    const totalRentExpence = getInputValue('rents');

    // const clothesField = document.getElementById('clothess');
    // const clothesFieldValueSAring = clothesField.value;
    // const totalClothesExpences = parseInt(clothesFieldValueSAring);
    const totalClothesExpences = getInputValue('clothess');

    const expenceTotal = totalFoodExpence + totalRentExpence + totalClothesExpences;



    // const totalExpenceElement = document.getElementById('tot-expence');
    // const totalExpence = totalExpenceElement.innerText;
    // totalExpenceElement.innerText = expenceTotal;
    const totalExpence = getInnerText('tot-expence', expenceTotal);

    const balanceTotal = totalIncome - totalExpence;

    // const totalBalanceElement = document.getElementById('balance');
    // const totalBalance = totalBalanceElement.innerText;
    // totalBalanceElement.innerText = balanceTotal;
    const balance = getInnerText('balance', balanceTotal);



    // const savingField = document.getElementById('saving-field');
    // const savingFieldValueString = savingField.value;
    // const savingFieldValue = parseInt(savingFieldValueString);
    const save = getInputValue('saving-field');

    const saveAmount = (totalIncome * save) / 100;

    // const savingAmountElement = document.getElementById('saving-amnt');
    // let savingAmount = savingAmountElement.innerText;
    // savingAmountElement.innerText = saveAmount;
    // savingAmount = saveAmount

    getInnerText('saving-amnt', saveAmount);

    const remainingBalance = balance - saveAmount;

    // const reamainingBalanceElement = document.getElementById('remaining-bal');
    // let reamainingBalanceValue = reamainingBalanceElement.innerText;
    // reamainingBalanceElement.innerText = remainingBalance;
    // reamainingBalanceValue = remainingBalance;
    getInnerText('remaining-bal', remainingBalance);


})
// document.getElementById('btn-cal').addEventListener('click', function () {
//     const incomeField = document.getElementById('income-id');
//     const totalIncome = parseInt(incomeField.value);

//     const foodExpenseField = document.getElementById('foods');
//     const totalFoodExpense = parseInt(foodExpenseField.value);

//     const rentField = document.getElementById('rents');
//     const totalRentExpense = parseInt(rentField.value);

//     const clothesField = document.getElementById('clothess');
//     const totalClothesExpenses = parseInt(clothesField.value);

//     const expenseTotal = totalFoodExpense + totalRentExpense + totalClothesExpenses;
//     const balanceTotal = totalIncome - expenseTotal;

//     const totalExpenseElement = document.getElementById('tot-expence');
//     totalExpenseElement.innerText = expenseTotal;

//     const totalBalanceElement = document.getElementById('balance');
//     totalBalanceElement.innerText = balanceTotal;
// });

// document.getElementById('save-btnn').addEventListener('click', function () {
//     const incomeField = document.getElementById('income-id');
//     const totalIncome = parseInt(incomeField.value);

//     const foodExpenseField = document.getElementById('foods');
//     const totalFoodExpense = parseInt(foodExpenseField.value);

//     const rentField = document.getElementById('rents');
//     const totalRentExpense = parseInt(rentField.value);

//     const clothesField = document.getElementById('clothess');
//     const totalClothesExpenses = parseInt(clothesField.value);

//     const expenseTotal = totalFoodExpense + totalRentExpense + totalClothesExpenses;

//     const totalExpenseElement = document.getElementById('tot-expence');
//     totalExpenseElement.innerText = expenseTotal;

//     const balanceTotal = totalIncome - expenseTotal;

//     const totalBalanceElement = document.getElementById('balance');
//     totalBalanceElement.innerText = balanceTotal;

//     const savingsPercentageField = document.getElementById('saving-field');
//     const savingsPercentage = parseInt(savingsPercentageField.value);

//     const saveAmount = (totalIncome * savingsPercentage) / 100;

//     const savingAmountElement = document.getElementById('saving-amnt');
//     savingAmountElement.innerText = saveAmount;

//     const remainingBalance = balanceTotal - saveAmount;

//     const remainingBalanceElement = document.getElementById('remaining-bal');
//     remainingBalanceElement.innerText = remainingBalance;
// });
