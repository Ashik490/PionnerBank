// login enter button 

const tom=document.getElementById("login");
tom.addEventListener('click', function(){
   var toms= document.getElementById("logArea");
   toms.style.display="none";
   const transition=document.getElementById("transition-area");
   transition.style.display="block";
})

//Deposit enter button

const depositBtn=document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    const addDeposit=document.getElementById("depositAmount").value;
    const depositNumber =parseFloat(addDeposit);

   //  const currentDeposit =document.getElementById("currentDeposit").innerText;
   //  const currentDepositNumber=parseFloat(currentDeposit);
   //  const totalDeposit =  depositNumber+currentDepositNumber;
   // document.getElementById("currentDeposit").innerText=totalDeposit;
   
   updateAmountBalance("currentDeposit",depositNumber);

   updateAmountBalance("currentBalance",depositNumber);


   document.getElementById("depositAmount").value="";
 

   // const currentBalance = document.getElementById("currentBalance").innerText;
   // const currentBalanceNumber=parseFloat(currentBalance);
   // const totalBalance= depositNumber + currentBalanceNumber;

   // document.getElementById("currentBalance").innerText=totalBalance;

   


})

const addWithdraw=document.getElementById("addWithdraw");
addWithdraw.addEventListener("click", function(){
   const currentWithdrawAmount=document.getElementById("addAmount").value;
   const withdrawNumber=parseFloat(currentWithdrawAmount);

   updateAmountBalance("curremtWithdraw",withdrawNumber);
   updateAmountBalance("currentBalance",-1*withdrawNumber);

   document.getElementById("addAmount").value="";
})

function updateAmountBalance (id,depositNumber){
   
   const current =document.getElementById(id).innerText;
   const currentNumber=parseFloat(current);
   const totalAmount =  depositNumber+currentNumber;
  document.getElementById(id).innerText=totalAmount;

 }

