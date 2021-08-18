// user deposit money event hendaler 
document.getElementById('deposit-button').addEventListener('click',function () {
    const depositAmount=document.getElementById('deposit-amount');
    const newDepositAmount=parseFloat (depositAmount.value);

//   total deposit part 

const depositTotal=document.getElementById('deposit-total');

const currentDepositAmount =parseFloat (depositTotal.innerText);
const newDepositTotal=currentDepositAmount+newDepositAmount;
depositTotal.innerText= newDepositTotal;




const totalBalance=document.getElementById('total-balance');
    const newBalance=parseFloat(totalBalance.innerText);
    const newTotalBalance=newBalance+newDepositAmount;
    totalBalance.innerText=newTotalBalance;
// clear input field 
depositAmount.value='';
})


// user Withdraw money event hendaler 

document.getElementById('withdraw-button').addEventListener('click',function () {
    const withdrawAmount=document.getElementById('withdraw-amount');
 const newWithdraw=parseFloat (withdrawAmount.value);


const withdrawTotal=document.getElementById('withdraw-total');

const currentWithdraw=parseFloat (withdrawTotal.innerText);
const newTotalWithdraw=currentWithdraw+newWithdraw;

withdrawTotal.innerText=newTotalWithdraw;


const totalBalance=document.getElementById('total-balance');

const withdrawTotalBalance=parseFloat(totalBalance.innerText);

  const totalCalculation=withdrawTotalBalance-newWithdraw;
  if (withdrawTotalBalance<newWithdraw || withdrawTotalBalance<0 ) {
    
    console.log("Sorry You Account is No Money");
} 
  totalBalance.innerText=totalCalculation;
   


// clear withdarw input 

withdrawAmount.value='';
    
})


// balance part event handelar 
    

