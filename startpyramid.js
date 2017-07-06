let n=6;
let m=n*2;
let flag=1;
let str="";
for(let i=0;i<n;i++)
{
 for(let j=1;j<m;j++)
  {
   if(j>=(m/2-i) && j<= (m/2+i) && flag==1)
   {
   	str+='*';
	flag=0;
   }
   else{
	str+='';
	flag=1;
	}
  }
   str+='\n';
}
console.log(str);



