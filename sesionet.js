if (localStorage) {
  document.write('Local storage mbeshtetet');
}
else {
  document.write('Local storage nuk mbeshtetet');
}
funksion store()
{
  localStorage.name=document.getElementsById('username')
  localStorage.email=document.getElementsById('mail')
  localStorage.password=document.getElementsId('pass')

}
function getlocalstorage(){
  if(localStorage.name)
  {
    document.getElementById('span1').innerHTML=localStorage.name;
    document.getElementById('span1').innerHTML=localStorage.email;
    document.getElementById('span1').innerHTML=localStorage.password;
  }
}
