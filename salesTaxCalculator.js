
/*let shopingInput = ["1 imported bottle of perfume at 27.99",
"1 bottle of perfume at 18.99",
"1 packet of headache pills at 9.75",
"1 box of imported chocolates at 11.25"];*/

/*let shopingInput = ["1 imported box of chocolates at 10.00",
"1 imported bottle of perfume at 47.50"];
*/
/*let shopingInput = ['1 book at 12.49',
'1 music CD at 14.99',
'1 chocolates bar at 0.85'];*/

let shopingInput = [
	{noOfItem: 1 , type: 'book' , imported: 'no' ,price: 12.49  },
	{noOfItem: 1 , type: 'music CD' , imported: 'no' ,price: 14.99  },
	{noOfItem: 1 , type: 'chocolates bar' , imported: 'no' ,price: 0.85  }
];


let totalPrice = 0;
let salesTaxes = 0 ;
shopingInput.forEach(function(item) {

//console.log(item.price);
	let CurrentTaxes=0;
	if(item.imported == 'yes'){


		CurrentTaxes += (taxForImpoted(item.price));
		
	}
	
	
	if(item.type =='chocolates bar' || item.type =='pills' || item.type =='book'  ){


	}else{
		

		CurrentTaxes+= (taxForNonSpacialGoods(item.price));

	}

    totalPrice =toAddFloat(totalPrice,item.price) ;
    

	itemPrice =toAddFloat(item.price, Number( (Math.ceil(CurrentTaxes*20)/20).toFixed(2)));
	

	salesTaxes =toAddFloat(salesTaxes, Number( (Math.ceil(CurrentTaxes*20)/20).toFixed(2)));
	
    if(item.imported=='yes'){

		console.log(`${item.noOfItem} imported ${item.type}: ${itemPrice}` );
	}else{

		console.log(`${item.noOfItem} ${item.type}: ${itemPrice}` );
	}
	
});

function taxForImpoted(itemPrice)
{
	let CurrentTaxes = 0;
		CurrentTaxes =toAddFloat(0, ((5*itemPrice)/100) );
		CurrentTaxes = Number( (Math.ceil(CurrentTaxes*20)/20).toFixed(2));
		
    return CurrentTaxes;
		
}


function taxForNonSpacialGoods(itemPrice)
{
	let CurrentTaxes = 0;
	    CurrentTaxes =toAddFloat(0, (10*itemPrice)/100);
	    CurrentTaxes =  Number((Math.ceil(CurrentTaxes*20)/20).toFixed(2));
		
		return CurrentTaxes;
}
function toAddFloat(number1,number2)
{

   let totalPrice =parseFloat(number1) + parseFloat(number2) ;
    totalPrice = Number(totalPrice.toFixed(2));
    return totalPrice;
}
salesTaxes = (Math.ceil(salesTaxes*20)/20).toFixed(2);

//totalPrice = (Math.ceil(totalPrice*20)/20).toFixed(2);
console.log(totalPrice);
totalPrice = Number(totalPrice)+Number(salesTaxes);
console.log(`sales taxes : ${salesTaxes}`);
console.log(`total : ${totalPrice}`);
