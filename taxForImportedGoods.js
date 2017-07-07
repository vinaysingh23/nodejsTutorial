let toAdd= require("./toAddFloat.js");

exports.ImportedTax = function(itemPrice)
{
	let CurrentTaxes = 0;
		CurrentTaxes =toAdd.toAddFloats(0, ((5*itemPrice)/100) );
		CurrentTaxes = Number( (Math.ceil(CurrentTaxes*20)/20).toFixed(2));
		
    return CurrentTaxes;
		
}