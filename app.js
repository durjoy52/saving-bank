//  calculating part 
document.getElementById('calculate-btn').addEventListener('click',function(){
    const incomeInput = document.getElementById('income-input')
    const incomeValue =parseFloat(incomeInput.value)

    const foodInput =document.getElementById('food-input')
    const foodValue = parseFloat(foodInput.value)

    const rentInput =document.getElementById('rent-input')
    const rentValue =parseFloat(rentInput.value)

    const clothesInput = document.getElementById('clothes-input')
    const clothesValue =parseFloat(clothesInput.value)

    // calculate total expenses 
    const totalExpenses = foodValue + rentValue + clothesValue

    const expensesBalance =document.getElementById('total-expenses')

    const balance =document.getElementById('balance')

    // set expenses 
    expensesBalance.innerText = totalExpenses
    // set balance 
    balance.innerText = incomeValue - totalExpenses

    // foodInput.value =''
    // rentInput.value =''
    // clothesInput.value =''
})

// saving part 
document.getElementById('save-btn').addEventListener('click',function(){
    const saveInput =document.getElementById('save-input')
    const income =document.getElementById('income-input')

    const balance =document.getElementById('balance')

    const savingAmount =document.getElementById('saving-amount')
    const remaining = document.getElementById('remaining-balance')

    const saveValue = saveInput.value

    const incomeValue = income.value

    const balanceValue =balance.innerText

    // saving amount 
    const saving = (incomeValue * saveValue) / 100

    if((saveValue == 'number' || saveValue >= 0) && saving < balanceValue){
            //  saving amount set 
    savingAmount.innerText = saving

    // remaining balance set 
    remaining.innerText = balanceValue - saving
    }else if(saving > balanceValue){
        alert("You don't have enough balance to save this amount😔 ")
    }
    else{
        alert('❌ Please insert a valid number')
    }

saveInput.value =''
})