exports.toAddFloats = function(number1,number2)
{

   let totalPrice =parseFloat(number1) + parseFloat(number2) ;
    totalPrice = Number(totalPrice.toFixed(2));
    return totalPrice;
}