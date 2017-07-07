
exports.outputForSalesTax = function(salesTaxes, totalPrice) {
	

	salesTaxes = (Math.ceil(salesTaxes*20)/20).toFixed(2);


	//console.log(totalPrice);
	totalPrice = Number(totalPrice.toFixed(2))
	totalPrice = Number(totalPrice)+Number(salesTaxes);

	console.log(`sales taxes : ${salesTaxes}`);
	console.log(`total : ${totalPrice}`);
}