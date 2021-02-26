let firstName = prompt('Please enter your name: ');
let firstVisit = confirm('Are you first time in this site?');
if (firstVisit == true){
    document.write('<h2>' + 'Congratulations on your first visit, ' + firstName + '</h2>');
} 
else{
    document.write('<h2>' + 'Welcome back, ' + firstName + '</h2>');
}
