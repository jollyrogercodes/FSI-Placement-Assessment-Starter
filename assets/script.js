let yourName = "Stephanie Sargent" 

let gb = 0
let cc = 0 
let sugar = 0 

const credit = document.querySelector('#credit')
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

function updateGbQuantity(displayQuantity) {
    let gb = document.querySelector('#qty-gb')
    gb.innerHTML = displayQuantity
}

function updateCcQuantity(displayQuantity) {
    let cc = document.querySelector('#qty-cc')
    cc.innerHTML = displayQuantity
}

function updateSugarQuantity(displayQuantity) {
    let sugar = document.querySelector('#qty-sugar')
    sugar.innerHTML = displayQuantity
}

function updateTotalQuantity(displayQuantity) {
    let total = document.querySelector('#qty-total')
    total.innerHTML = displayQuantity
}

gbPlusBtn.addEventListener('click', function() {
    gb++;
    updateGbQuantity(`${gb}`)
    updateTotalQuantity(`${gb+cc+sugar}`)
})

gbMinusBtn.addEventListener('click', function() {
    if(gb > 0){
        gb--
    updateGbQuantity(`${gb}`)
    updateTotalQuantity(`${gb+cc+sugar}`)
}})

ccPlusBtn.addEventListener('click', function() {
    cc++
    updateCcQuantity(`${cc}`)
    updateTotalQuantity(`${gb+cc+sugar}`)
})

ccMinusBtn.addEventListener('click', function() {
    if(cc > 0){
        cc--
        updateCcQuantity(`${cc}`)
        updateTotalQuantity(`${gb+cc+sugar}`)
    }
})

sugarPlusBtn.addEventListener('click', function() {
    sugar++
    updateSugarQuantity(`${sugar}`)
    updateTotalQuantity(`${gb+cc+sugar}`)
})

sugarMinusBtn.addEventListener('click', function(){
    if(sugar > 0){
        sugar--
        updateSugarQuantity(`${sugar}`)
        updateTotalQuantity(`${gb+cc+sugar}`)
    }
})

credit.textContent = `Created by ${yourName}`