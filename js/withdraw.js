/* 
1.add event handler with the withdraw button
2.get the withdraw amount
3.clear the input field
4.get previous withdraw total
*/

// step-1
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawFieldString);
    // console.log(newWithdrawAmount);
    // step-3
    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('Please Provide A valid Number');
        return;
    }
    // step-4
    const withdrawTotalField = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalField.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);
    //step-5 calculate
    const totalWithdrawBalance = withdrawTotal + newWithdrawAmount;
    withdrawTotalField.innerText = totalWithdrawBalance;
    // step-6
    // total amount calculate
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalElementString = balanceTotalElement.innerText;
    const newTotalAmount = parseFloat(previousBalanceTotalElementString);
    // step-7
    const currentAmount = newTotalAmount - newWithdrawAmount;
    balanceTotalElement.innerText = currentAmount;
})