

//  calculating part 
document.getElementById('calculate-btn').addEventListener('click',function(){
    const incomeInput = document.getElementById('income-input')
    const incomeValue =incomeInput.value

    const foodInput =document.getElementById('food-input')
    const foodValue = foodInput.value

    const rentInput =document.getElementById('rent-input')
    const rentValue =rentInput.value

    const clothesInput = document.getElementById('clothes-input')
    const clothesValue =clothesInput.value
    
    const expensesBalance =document.getElementById('total-expenses')
    const balance =document.getElementById('balance')
    // calculate total expenses 
    const totalExpenses = parseInt(foodValue) + parseInt(rentValue) + parseInt(clothesValue)
    const balanceAmount = incomeValue - totalExpenses

    if(isNaN(incomeValue) || isNaN(foodValue) 
    || isNaN(rentValue) || isNaN(clothesValue) 
    || incomeValue < 0 || foodValue < 0 
    || rentValue < 0 || clothesValue < 0 ){
        alert('Insert a valid number')
    }else if(totalExpenses > incomeValue){
      alert('Your expenses amount is higher than your income')
      
    }else{
        // set expenses 
        expensesBalance.innerText = totalExpenses
        // set balance 
        
        balance.innerText = balanceAmount
    }
                    
    
    foodInput.value =''
    rentInput.value =''
    clothesInput.value =''
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
    savingAmount.innerText = (saving).toFixed(2)

    // remaining balance set 
    remaining.innerText = (balanceValue - saving).toFixed(2)
    }else if(saving > balanceValue){
        alert("You don't have enough balance to save this amount😔 ")
    }
    else{
        alert('❌ Please insert a valid number')
    }

saveInput.value =''
})