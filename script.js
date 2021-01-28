// Phone Event handler

// Created Event Listner  

/* 
document.getElementById("phone-increase").addEventListener("click", () => {
const phoneInput = document.getElementById("phone-count");
const phonecount = parseInt(phoneInput.value);
const phoneNewCount = phonecount + 1;
phoneInput.value = phoneNewCount;
const phoneTotal = 1219 * phoneNewCount;
document.getElementById("phone-total").innerText = "$" + phoneTotal;

})

document.getElementById("phone-decrease").addEventListener ("click", ()=>{
const phoneInput = document.getElementById("phone-count");
const phonecount = parseInt(phoneInput.value);
const phoneNewCount = phonecount -1;
phoneInput.value = phoneNewCount;
const phoneTotal = 1219 * phoneNewCount;
document.getElementById("phone-total").innerText = "$" + phoneTotal; 

})
*/


// same code Created Function 

/*
document.getElementById("phone-increase").addEventListener("click", () => {
    phoneHandlerChange(true);

});

document.getElementById("phone-decrease").addEventListener("click", () => {
    phoneHandlerChange(false);

});

function phoneHandlerChange(isAdd) {
    const phoneInput = document.getElementById("phone-count");
    const phonecount = parseInt(phoneInput.value);

    let phoneNewCount = phonecount;
    if (isAdd == true) {
        phoneNewCount = phonecount + 1;
    }
    if (isAdd == false && phonecount > 0) {
        phoneNewCount = phonecount - 1;
    }

    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById("phone-total").innerText = "$" + phoneTotal;
}

*/





// Case Event handler



// Created Event Listner

/* 
document.getElementById("case-add").addEventListener("click", () => {
    const caseInput = document.getElementById("case-count");
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount + 1;
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById("case-total").innerText = '$' + caseTotal;
});

document.getElementById("case-substract").addEventListener("click", () => {
    const caseInput = document.getElementById("case-count");
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount - 1;
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById("case-total").innerText = '$' + caseTotal;
});
*/

// Same code convert function

/*
document.getElementById("case-add").addEventListener("click", function () {
    handlerProductChange(true);
});

document.getElementById("case-substract").addEventListener("click", function () {
    handlerProductChange(false);
});



function handlerProductChange(isAdd) {
    const caseInput = document.getElementById("case-count");
    const caseCount = parseInt(caseInput.value);
    
    let caseNewCount = caseCount;
    if (isAdd == true) {
        caseNewCount = caseCount + 1;
    }
    
    if (isAdd == false && caseCount > 0) {
        caseNewCount = caseCount - 1;
    }
    
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById("case-total").innerText = '$' + caseTotal;
}

*/



// Two function Murge to in one function 

function handlerItemChange(item, isAdd) {
    const itemInput = document.getElementById(item + "-count");
    const itemCount = parseInt(itemInput.value);

    let itemNewCount = itemCount;
    if (isAdd == true) {
        itemNewCount = itemNewCount + 1;
    }

    if (isAdd == false && itemCount > 0) {
        itemNewCount = itemCount - 1;
    }

    itemInput.value = itemNewCount;
    // const totalItem = itemNewCount * 59;
    let totalItem = 0;
    if (item == 'phone') {
        totalItem = itemNewCount * 1219;
    }
    if (item == 'case') {
        totalItem = itemNewCount * 59;
    }

    document.getElementById(item + "-total").innerText = '$' + totalItem;

    totalPrice()
}


// total Price 

function totalPrice() {
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    const total = (phoneCount * 1219) + (caseCount * 59);
    document.getElementById("total-price").innerText = '$' + total;

    // tex 
    const totalTex = total * 0.5;
    document.getElementById("tex").innerText = "$" + totalTex;
    // Grand Total 
    const grandTotal = total + totalTex;
    document.getElementById("grand-total").innerText = "$" + grandTotal;
}


function getInputValue(product) {
    const productInput = document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value);
    return productCount;
}
