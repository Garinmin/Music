let userPref = confirm('Do you like a music?');
if (userPref == true){ 
    document.write('<h2>' + 'HELLO!!!' + '</h2>');
}
else{
document.write('<h2>' + 'Maybe you can look for another site' + '</h2>');
}
let firstName = prompt('Please enter your name: ');
let firstVisit = confirm('Are you first time in this site?');
if (firstVisit == true){
    document.write('<h2>' + 'Congratulations on your first visit, ' + firstName + '</h2>');
} 
else{
    document.write('<h2>' + 'Welcome back, ' + firstName + '</h2>');
}
