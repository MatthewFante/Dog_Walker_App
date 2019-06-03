
// Parse parameters passed from the booking form and create a confirmation message with it

const confirmation = document.querySelector('.confirmation');
// Create a variable and store the url parameters in in
var searchParams = new URLSearchParams(window.location.search); 

// Extract the info needed for the confirmation
var ownerName = searchParams.get('owner_name');
var dogName = searchParams.get('dog_name');
var email = searchParams.get('user_email');

//Create the HTML content for the confirmation and place in on the page
function confirm(){
    var html = "";
    html += 'Thanks, ' + ownerName + '!<br /><br />';
    html += 'Your appointment request for ' + dogName + '<br />has been received.<br /><br />';
    html += 'You will receive a confirmation<br />email shortly at <br />' + email;
    html += '<br /><br /><a href="index.html" class="homeLink">Go Home</a>';
    return html;
};
confirmation.innerHTML = confirm();