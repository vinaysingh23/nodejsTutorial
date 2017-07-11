

let MainObj= function() {

	let totalPrice = 0;

	this.shopingInput = [
		{noOfItem: 1 , type: "book" , imported: false ,price: 12.49  },
		{noOfItem: 1 , type: "music CD" , imported: false ,price: 14.99  },
		{noOfItem: 1 , type: "chocolates bar" , imported: false ,price: 0.85  }
	];
    
	this.shopingInput.forEach(function(item){
		totalPrice = totalPrice + item.price;

	}

	);
	this.totalPrice = totalPrice;
	
	
};
MainObj.prototype.output = function() {
	
	
	this.salesTaxes = (Math.ceil(this.salesTaxes*20)/20).toFixed(2);
	this.totalPrice = Number(this.totalPrice.toFixed(2));
	this.totalPrice = Number(this.totalPrice)+Number(this.salesTaxes);

	console.log(`sales taxes : ${this.salesTaxes}`);
	console.log(`total : ${this.totalPrice}`);
		
};
MainObj.prototype.generalTax = function(itemPrice){
	let currentTaxes = 0;
	currentTaxes = this.add(0, (10*itemPrice)/100);
	currentTaxes = Number((Math.ceil(currentTaxes*20)/20).toFixed(2));

	return currentTaxes;

};
MainObj.prototype.importedTax = function(itemPrice){
	let currentTaxes = 0;
	currentTaxes = this.add(0, ((5*itemPrice)/100) );
	currentTaxes = Number( (Math.ceil(currentTaxes*20)/20).toFixed(2));
			
	return currentTaxes;
};


MainObj.prototype.add = function(number1,number2){

	let totalPrice =parseFloat(number1) + parseFloat(number2) ;
	totalPrice = Number(totalPrice.toFixed(2));
	return totalPrice;
	
};

MainObj.prototype.mainFunctionForSalesTax = function() {

	let salesTaxes = 0;
	this.shopingInput.forEach(function(item) {

			
		let currentTaxes=0;
		if( item.imported ){

			currentTaxes += mainObject.importedTax(item.price);
			
		}
		
		if(!(item.type ==="chocolates bar" || item.type ==="pills" || item.type ==="book"  )){
			
			currentTaxes+= mainObject.generalTax(item.price);

		}

		let itemPrice = mainObject.add(item.price, Number( (Math.ceil(currentTaxes*20)/20).toFixed(2)));
		

		salesTaxes = mainObject.add(salesTaxes, Number( (Math.ceil(currentTaxes*20)/20).toFixed(2)));
		
		if( item.imported ){

			console.log(`${item.noOfItem} imported ${item.type}: ${itemPrice}` );
		}else{

			console.log(`${item.noOfItem} ${item.type}: ${itemPrice}` );
		}
		
	});	
	this.salesTaxes = salesTaxes;
};



//MainObj.prototype = { GeneralTaxObj,ImportedTaxObj,AddObj,OutputObj };

let mainObject = new MainObj();

mainObject.mainFunctionForSalesTax();
mainObject.output();

