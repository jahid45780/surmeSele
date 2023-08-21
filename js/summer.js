const total1 = document.getElementById('total-on');
let total =0;
function handleClickCard (target){
   const selectedItemContainer=document.getElementById('selected-Items');
const itemsName =  target.childNodes[3].childNodes[3].innerText;
console.log(itemsName);
const li =document.createElement('li');
li.innerText=itemsName
selectedItemContainer.appendChild(li);

const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0]; 

total = parseInt (total) + parseInt(price);
 document.getElementById('total-price').innerText=total;
 totalPrice.innerText = total;

 total1.innerText = parseFloat(totalPrice.innerText);

 





  
}






 function applyClick(target){
   const discount = document.getElementById('discount');
   const inputId = document.getElementById('input-id');
   const inputIdElement = inputId.value;
   if ( inputIdElement === 'SELL200'){
      discount.innerText =parseFloat(totalPrice.innerText)*0.2;
      total.innerText =parseFloat(totalPrice.innerText) - parseFloat(totalPrice.innerText)*0.2;

   };


}


function goHome(){
   location.reload()
}



 


