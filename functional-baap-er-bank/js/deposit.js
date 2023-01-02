document.getElementById('btn-deposit').addEventListener('click',function(){
   /* 
   1.get the element by id
   2.get the value from the element
   3.convert string value to a number 
   */
   const newDepositAmount = getInputFieldValueById('deposit-field');
   /* get previous deposit total by id */
   const depositTotalAmount = getTextElementValueById('deposit-total');
//    new deposit total calculate
   const totalAmount = depositTotalAmount + newDepositAmount;
//    set deposit total value
    setTextElementValueById('deposit-total',totalAmount) 
    // get previous balance using by function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total',newBalanceTotal);
})