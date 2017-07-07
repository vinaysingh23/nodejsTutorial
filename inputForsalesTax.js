let mainFunction= require("./mainFunctionForSalesTax.js");
let generalTax= require("./taxForGenaralGoods.js");
let importedTax= require("./taxForImportedGoods.js");
let output= require("./outputForSalesTax.js");
let toAdd= require("./toAddFloat.js");


let shopingInput = [
	{noOfItem: 1 , type: 'book' , imported: 'no' ,price: 12.49  },
	{noOfItem: 1 , type: 'music CD' , imported: 'no' ,price: 14.99  },
	{noOfItem: 1 , type: 'chocolates bar' , imported: 'no' ,price: 0.85  }
];

let totalPrice = 0;
let totalTaxes = 0;
totalTaxes = mainFunction.mainFunctionForTax(shopingInput);


shopingInput.forEach(function(item) {

	totalPrice += item.price;
});

output.outputForSalesTax(totalTaxes, totalPrice);