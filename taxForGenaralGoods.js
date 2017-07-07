let toAdd= require("./toAddFloat.js");

exports.taxForGenaralGood = function(itemPrice)
{
	let CurrentTaxes = 0;
	    CurrentTaxes = toAdd.toAddFloats(0, (10*itemPrice)/100);
	    CurrentTaxes =  Number((Math.ceil(CurrentTaxes*20)/20).toFixed(2));
		
		return CurrentTaxes;
}