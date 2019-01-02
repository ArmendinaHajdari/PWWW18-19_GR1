function validgjinia()
{var mgjinia, fgjinia;

var x=0;
try
{
  if(mgjinia.checked)
{
x++;
} if(fgjinia.checked)
{
x++;
}
if(x==0)
{
alert('Select Male/Female');
mgjinia.focus();
return false;
}
else
{
alert('Form Successfully Submitted');
window.location.reload()
return true;}
}
catch ( e ) {
                   alert("Error: " + e.description );
               }
               finally {
                   alert("Finally block will always execute!" );
               } 
}
