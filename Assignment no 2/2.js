exports.isprime=function(n){
for (i=2;i<n;i++)
{ 
 if(n%2==0)
   return false;
}
return true;
}
exports.calfat=function(n){
var value=1;	
if(n==0)
	return 1;
else
   {
	   for(i=1;i<=n;i++)
		   value*=i;
   }
   return value;
}
exports.perfect=function(n)
{
	var value=0;
	for(i=1;i<n;i++)
	{
		if(n%i==0)
	       value+=i;
    }
	if(n==value)
		return true;
	else
		return false;
}











































































































