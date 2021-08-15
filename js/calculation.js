// deposite calculation 
document.getElementById('deposit-button').addEventListener('click', function(){
    const deposit = document.getElementById('deposit');
    const depositAmountValueText = deposit.value;
    const depositAmountValue = parseFloat(depositAmountValueText);
    // console.log(typeof depositAmountValue);

    const depositAmount = document.getElementById('deposit-amount');
    
    const previousDepositAmountText = depositAmount.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    // console.log(typeof previousDepositAmount);
    
    const totalDepositAmount = previousDepositAmount + depositAmountValue;
    // console.log(typeof totalDepositAmount);
    // // console.log(parseFloat(totalDepositAmount));

    depositAmount.innerText = totalDepositAmount;
    deposit.value = '';


    const totalBalance = document.getElementById('balance-amount');
    const previoustotalBalanceText = totalBalance.innerText;
    const previoustotalBalance = parseFloat(previoustotalBalanceText);

    const updateTotalBalance = previoustotalBalance + depositAmountValue;
    // console.log(typeof updateTotalBalance);
    totalBalance.innerText = updateTotalBalance;
})


// withdraw calculation 
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdraw = document.getElementById('withdraw');
    const withdrawValueText = withdraw.value;
    const withdrawValue = parseFloat(withdrawValueText);
    // console.log(typeof withdrawValue);

    const totalBalance = document.getElementById('balance-amount');
    const previoustotalBalanceText = totalBalance.innerText;
    const previoustotalBalance = parseFloat(previoustotalBalanceText);

    const updateTotalBalance = previoustotalBalance - withdrawValue;
    // console.log(typeof updateTotalBalance);
    if(updateTotalBalance >= 0){
        totalBalance.innerText = updateTotalBalance;

        const withdrawAmountText = document.getElementById('withdraw-amount').innerText;
        console.log(withdrawAmountText);
        const withdrawAmount = parseFloat(withdrawAmountText);
        const totalWithdraw = withdrawAmount + withdrawValue;
        document.getElementById('withdraw-amount').innerText = totalWithdraw;

        withdraw.value = '';
    }
    else{
        console.log('insufficient balance');
        withdraw.value = '';
    }    
    
})