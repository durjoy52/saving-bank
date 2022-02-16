
document.getElementById('calculate-btn').addEventListener('click',function(){
    const incomeInput = document.getElementById('income-input')
    const incomeValue =parseFloat(incomeInput.value)

    const foodInput =document.getElementById('food-input')
    const foodValue = parseFloat(foodInput.value)

    const rentInput =document.getElementById('rent-input')
    const rentValue =parseFloat(rentInput.value)

    const clothesInput = document.getElementById('clothes-input')
    const clothesValue =parseFloat(clothesInput.value)

    const totalExpenses = foodValue + rentValue + clothesValue

    const expensesBalance =document.getElementById('total-expenses')

    const balance =document.getElementById('balance')

    expensesBalance.innerText = totalExpenses
    balance.innerText = incomeValue - totalExpenses

    incomeInput.value =''
    foodInput.value =''
    rentInput.value =''
    clothesInput.value =''
})

document.getElementById('save-btn').addEventListener('click',function(){
    const saveInput =document.getElementById('save-input')
    const saveValue = saveInput.value


    const balanceValue =balance.innerText

    const saving = (balanceValue * saveValue) / 100

    const savingAmount =document.getElementById('saving-amount')
    savingAmount.innerText = saving

const remaining = document.getElementById('remaining-balance')

remaining.innerText = balanceValue - saving

saveInput.value =''
})