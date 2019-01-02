

function vgjinia()
{
var gj=document.formgj.gjinia;
for(i=0;i<gj.length;i++){
  if(gj[i].checked==true)
  return true;
}
alert('Zgjedh mashkull ose femer');
return false;
}
