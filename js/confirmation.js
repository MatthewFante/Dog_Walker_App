
// Create a test URLSearchParams object 
var searchParams = new URLSearchParams(window.location.search); 
const confirmation = document.querySelector('.confirmation');
var ownerName = searchParams.get('owner_name');
var dogName = searchParams.get('dog_name');




function confirm(){
    var html = "";
    html += 'Thanks, ' + ownerName + '!</br>';
    html += 'Your appointment request for ' + dogName + '</br>has been received.</br>';
    html += 'You will receive a confirmation email shortly.'
    html += '</br></br><a href="index.html" class="homeLink">Go Home</a>';
    return html;
};



confirmation.innerHTML = confirm();