document.getElementById('deposite-button').addEventListener('click', function(){
const depositefildstring = document.getElementById('deposite-fild').value;
const depositeamount=parseFloat(depositefildstring);

const depositetotalElement = document.getElementById('deposite-total');
const currentdepositetotalstring= document.getElementById('deposite-total').innerText;
const currentdepositetotal=parseFloat(currentdepositetotalstring);
// console.log(depositetotal,depositeamount);
const totaldeposite=depositeamount+currentdepositetotal;

depositetotalElement.innerText=totaldeposite;
document.getElementById('deposite-fild').value=''


const totalbalanceshow=document.getElementById('balance-total');
const totalbalancestring=document.getElementById('balance-total').innerText;
const totalbalance=parseFloat(totalbalancestring);
const totalbalanceAfterDeposite=depositeamount+totalbalance;

totalbalanceshow.innerText=totalbalanceAfterDeposite;

}) 

