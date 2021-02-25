function getUserPref(){
  let userPref = confirm('Do you like a music?');
if (userPref == true){ 
    document.write('<h2>' + 'HELLO!!!' + '</h2>');
}
else{
document.write('<h2>' + 'Maybe you can look for another site' + '</h2>');
return userPref;
}
}