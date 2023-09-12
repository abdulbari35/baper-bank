document.getElementById('button-widtrow').addEventListener('click',function(){
const widtrowfildstring=document.getElementById('widtrow-fild').value;
const widtrowamount=parseFloat(widtrowfildstring);

const widtrowtotalElement=document.getElementById('widtrow-total');
const currentwidtrowtotalstring=document.getElementById('widtrow-total').innerText;
const currentwidtrowtotal=parseFloat(currentwidtrowtotalstring);

const totalwidtrow=currentwidtrowtotal+widtrowamount;
widtrowtotalElement.innerText=totalwidtrow;
document.getElementById('widtrow-fild').value=''

const totalbalanceshow=document.getElementById('balance-total');
const totalbalancestring=document.getElementById('balance-total').innerText;
const totalbalance=parseFloat(totalbalancestring);

const balanceTotalAfterwidtrow=totalbalance-widtrowamount;
totalbalanceshow.innerText=balanceTotalAfterwidtrow;


})