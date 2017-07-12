add = function(number1,number2){

		let totalPrice =parseFloat(number1) + parseFloat(number2) ;
		totalPrice = Number(totalPrice.toFixed(2));
		return totalPrice;
	}


let TotalPriceObject = function(){

	
	this.totalTaxOfItem = function(totalPriceOfItem, noOfItem){
		return noOfItem * totalPriceOfItem;		
	};
	this.totalSaleTax = function(salesTax,noOfItem){
		return noOfItem * salesTax;
	}
}


let Item = function(noOfItem, type, imported, price){

	this.noOfItem = noOfItem;
	this.type = type;
	this.imported = imported;
	this.itemPrice = price;
	this.salesTax = 0;


	
	this.generalTax = function() {
		let currentTaxes = 0;
		currentTaxes = add(0, (10*this.itemPrice)/100);
		currentTaxes = Number((Math.ceil(currentTaxes*20)/20).toFixed(2));

		return currentTaxes;
	},

	this.importedTax = function(){
		let currentTaxes = 0;
		currentTaxes = add(0, ((5*this.itemPrice)/100) );
		currentTaxes = Number( (Math.ceil(currentTaxes*20)/20).toFixed(2));
				
		return currentTaxes;
	},
    
	this.totalTax = function() {


			
		let currentTaxes=0;
		if( this.imported ){

			currentTaxes += this.importedTax(this.itemPrice);
			
		}
		
		if(!(this.type ==="chocolates bar" || this.type ==="pills" || this.type ==="book"  )){
			
			currentTaxes+= this.generalTax(this.itemPrice);

		}

		this.totalPriceOfItem = add(this.itemPrice, Number( (Math.ceil(currentTaxes*20)/20).toFixed(2)));
		this.totalPriceOfItem = totalTaxOfItem(this.totalPriceOfItem,this.noOfItem);
		this.salesTax = totalSaleTax(currentTaxes,noOfItem);
		//console.log(this.salesTax);

		if( this.imported ){

			console.log(`${this.noOfItem} imported ${this.type}: ${this.totalPriceOfItem}` );
		}else{

			console.log(`${this.noOfItem} ${this.type}: ${this.totalPriceOfItem}` );
		}
		
		
	};


};
Item.prototype = TotalPriceObject();

let object1 = new Item(1, "book", false, 12.49);
object1.totalTax();

let object2 = new Item(2, "music CD", false, 14.99);
object2.totalTax();
let object3 = new Item(1, "chocolates bar", false, 0.85);
object3.totalTax();
//console.log(object2.salesTax);
console.log(`salesTax : ${object1.salesTax + object2.salesTax +object3.salesTax}`);
console.log(`totalTax : ${object1.totalPriceOfItem + object2.totalPriceOfItem +object3.totalPriceOfItem} `);
