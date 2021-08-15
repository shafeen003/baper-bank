// handle deposit button event 
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited 
    const depositeInput = document.getElementById('deposit-input');
    const newDepositText = depositeInput.value;
    const newDepositAmount = parseFloat(newDepositText);

    // update deposite total 
    const depositTotal = document.getElementById('diposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;


    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBananceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBananceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;


    // clear the deposit input  field 
    depositeInput.value = "";

})


// handle withdraw with event handler 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // set withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBananceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBananceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input 
    withdrawInput.value = '';

})