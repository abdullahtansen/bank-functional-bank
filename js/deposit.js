/* 
1. add event listener to the deposit button
2.get deposit amount form the deposit input field
2-5.Convert string deposit amount to a number type
3.clear the deposit input field after getting the value
4.get the previous deposit total
5. calculate new deposit total and set the value to the deposit total
6.get current balance
7.calculate the new balance and set it to the balance
*/

// step-1
document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    // console.log(newDepositAmountString);
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(newDepositAmount);
      // step-3 
      depositField.value = '';
    if(isNaN(newDepositAmount)){
        alert('Please Provide A valid Number');
        return;
    }
    // step-4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step-5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;
    // step-6
    const totalBalanceElement = document.getElementById('balance-total');
    const totalBalanceElementString = totalBalanceElement.innerText;
    const totalDepositAmount = parseFloat(totalBalanceElementString);

    // step-7
    const CurrentBalanceTotal = totalDepositAmount + newDepositAmount;
    totalBalanceElement.innerText = CurrentBalanceTotal;

})