let generalTax= require("./taxForGenaralGoods.js");
let importedTax= require("./taxForImportedGoods.js");
let output= require("./outputForSalesTax.js");
let toAdd= require("./toAddFloat.js");




exports.mainFunctionForTax = function(shopingInput) {
	
	let salesTaxes = 0 ;	

	shopingInput.forEach(function(item) {

	//console.log(item.price);
		let CurrentTaxes=0;
		if(item.imported == 'yes'){


			CurrentTaxes += importedTax.ImportedTax(item.price);
			
		}
		
		
		if(item.type =='chocolates bar' || item.type =='pills' || item.type =='book'  ){


		}else{
			

			CurrentTaxes+= generalTax.taxForGenaralGood(item.price);

		}

	    
	    

		let itemPrice =toAdd.toAddFloats(item.price, Number( (Math.ceil(CurrentTaxes*20)/20).toFixed(2)));
		

		salesTaxes =toAdd.toAddFloats(salesTaxes, Number( (Math.ceil(CurrentTaxes*20)/20).toFixed(2)));
		
	    if(item.imported=='yes'){

			console.log(`${item.noOfItem} imported ${item.type}: ${itemPrice}` );
		}else{

			console.log(`${item.noOfItem} ${item.type}: ${itemPrice}` );
		}
		
	});
	return salesTaxes;

}
