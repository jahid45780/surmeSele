const applyBtn = document.getElementById ('apply-btn');
const applyInput = document.getElementById ('apply-input');
const totalPrice = document.getElementById('total-price');
const discount = document.getElementById('discount');
const totalOn = document.getElementById('total-on');
const showParent = document.getElementById('selected-Items')
const makePurchaseBtn = document.getElementById('make-purchase-btn');


let newTotalPrice = 0;

function handleClickCard(event){
    const itemNames = event.children[1].children[1].innerText;
    const itemPriceText = event.children[1].children[2].children[0].innerText;
    const itemPrice= parseFloat(itemPriceText);
    const li = document.createElement('li');
    li.innerText= itemNames;
    showParent.appendChild(li);
    newTotalPrice = newTotalPrice + itemPrice;
    totalPrice.innerText = newTotalPrice;
    totalOn.innerText = newTotalPrice;

    if(newTotalPrice > 0 ){
        makePurchaseBtn.removeAttribute('disabled');
    }

    
    if(newTotalPrice >= 200){
        applyBtn.removeAttribute('disabled');
    }

}

applyBtn.addEventListener('click',function(){

 const cuponCode= document.getElementById('apply-input').value;
 

 if(cuponCode !== 'SELL200'){
    alert('coupon code vul disan vai')
    return;
 }

 const discountPrice = newTotalPrice * 20 / 100;
 discount.innerText = discountPrice;

 const remainingTotalPrice = newTotalPrice - discountPrice;
 totalOn.innerText = parseFloat(remainingTotalPrice);

});

function goHome(){
    location.reload()
};




 


