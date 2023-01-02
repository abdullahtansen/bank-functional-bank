document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');

    const withdrawTotal = getTextElementValueById('withdraw-total');
    const totalAmount = newWithdrawAmount + withdrawTotal;

   setTextElementValueById('withdraw-total', totalAmount);

   const balanceTotal = getTextElementValueById('balance-total');
   const CurrentTotal = balanceTotal - newWithdrawAmount;
   
   setTextElementValueById('balance-total',CurrentTotal);

})