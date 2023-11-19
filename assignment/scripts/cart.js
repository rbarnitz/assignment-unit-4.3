console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;


console.log(basket);

function addItem(item){
    if (isFull(basket)===false){
        basket.push(item);
        console.log(item, 'added to basket')
        return true;
    }
    else {
        return false;
    }

}

addItem('fruits');
addItem('vegetables');
addItem('meats');
addItem('more vegetables');
addItem('even more vegetables');


console.log(`Basket now contains: ${basket}`);

function listItems(array){
    for (let items of array){
    console.log(items);
    }
}
listItems(basket);


function empty(array){
    array.length = 0;
}


empty(basket);
console.log(basket);


//refilling basket

addItem('fruits');
addItem('vegetables');
addItem('meats');
addItem('more vegetables');
addItem('even more vegetables');


function isFull(basket){
    if (basket.length < maxItems){
        return false;
    }
    else{
        return true;
    }
}

console.log(isFull(basket));


function removeItem(item){
    if (basket.indexOf(item) !== -1){
        let i = basket.indexOf(item)
        basket.splice(i,1);
        console.log(item, 'removed from basket');
    }
    else{
        console.log(item, ' not found ')
        return null
    }
}

removeItem("meats");

console.log(basket);




// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
