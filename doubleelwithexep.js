let number=[20,30,'4s0','as',10];
function doubleEle(num)
{
   if(isNaN(num))
	{
		return num;
	}else
		return 2*num;
}

let arr=number.map(doubleEle);
console.log(arr);
