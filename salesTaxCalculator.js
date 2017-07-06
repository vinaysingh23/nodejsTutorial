
/*let shopingInput = ["1 imported bottle of perfume at 27.99",
"1 bottle of perfume at 18.99",
"1 packet of headache pills at 9.75",
"1 box of imported chocolates at 11.25"];*/

/*let shopingInput = ["1 imported box of chocolates at 10.00",
"1 imported bottle of perfume at 47.50"];
*/
let shopingInput = ['1 book at 12.49',
'1 music CD at 14.99',
'1 chocolates bar at 0.85'];

let iterator = 0;
let totalPrice = 0;
let salsetaxes = 0 ;
while(iterator < shopingInput.length){

	let resultInput = shopingInput[iterator].split(' ');
	let outputString='';
	for(let i=0;i<resultInput.length-2;i++)
	{
	     outputString = outputString + ' ' +resultInput[i];
	}
	
	

	let itemPrice = (Number(resultInput[resultInput.length-1]));
	
	

	let Imported = shopingInput[iterator].indexOf("imported");

	let Currenttaxes=0;
	if(Imported>=0){


		Currenttaxes += (taxForImpoted(itemPrice));
		
	}
	
	
	if(((shopingInput[iterator].indexOf("book")>=0) || (shopingInput[iterator].indexOf("chocolates")>=0) || (shopingInput[iterator].indexOf("medical") >=0) || (shopingInput[iterator].indexOf("pills")>=0))){
	    
	    Currenttaxes += 0;
	}else{
		

		Currenttaxes+= (taxForNonSpacialGoods(itemPrice));

	}

    totalPrice =ToAddFloat(totalPrice,itemPrice) ;
    

	itemPrice =ToAddFloat(itemPrice, Number( (Math.ceil(Currenttaxes*20)/20).toFixed(2)));
	

	salsetaxes =ToAddFloat(salsetaxes, Number( (Math.ceil(Currenttaxes*20)/20).toFixed(2)));
	

	console.log(`${outputString} : ${itemPrice}` );
	iterator++;
}

function taxForImpoted(itemPrice)
{
	let Currenttaxes = 0;
		Currenttaxes =ToAddFloat(0, ((5*itemPrice)/100) );
		Currenttaxes = Number( (Math.ceil(Currenttaxes*20)/20).toFixed(2));
		
    return Currenttaxes;
		
}


function taxForNonSpacialGoods(itemPrice)
{
	let Currenttaxes = 0;
	    Currenttaxes =ToAddFloat(0, (10*itemPrice)/100);
	    Currenttaxes =  Number((Math.ceil(Currenttaxes*20)/20).toFixed(2));
		
		return Currenttaxes;
}
function ToAddFloat(number1,number2)
{

   let totalPrice =parseFloat(number1) + parseFloat(number2) ;
    totalPrice = Number(totalPrice.toFixed(2));
    return totalPrice;
}
salsetaxes = (Math.ceil(salsetaxes*20)/20).toFixed(2);

//totalPrice = (Math.ceil(totalPrice*20)/20).toFixed(2);
console.log(totalPrice);
totalPrice = Number(totalPrice)+Number(salsetaxes);
console.log(`sales taxes : ${salsetaxes}`);
console.log(`total : ${totalPrice}`);
