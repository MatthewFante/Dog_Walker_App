
const bookingForm = document.querySelector('.booking');
const scheduleConfirm = document.querySelector('#schedule');
const confirmation = document.querySelector('.confirmation');
const confirm_name = document.querySelector('#owner_name');
const appt_date = document.querySelector('#date');
const appt_time = document.querySelector('#time');
const header = document.querySelector('.headerBlank');

function headerContents(){
    var html = "";
    html += '<h1><a class="mainHeadLink" href="index.html">Walk A Goodboi&trade;</a></h1>';
    html += '<h2>Dog Walking Service</h2>';
    html += '<ul class="main-nav">';
    html += '<li><a href="booking.html">Book a Walker</a></li>';
    html += '<li><a href="contact.html">Contact Us</a></li>';
    html += '</ul>';
    return html;
};

header.innerHTML = headerContents();

function confirm(){
    var html = "";
    html += 'Thanks, ' + confirm_name.value + '!</br>';

    html += 'Your appointment request for the following has been received for: </br>';
    html += appt_date.value + '&nbsp;&nbsp;' + appt_time.value + '</br>';
    html += 'You will receive a confirmation email shortly.'
    html += '</br><a href="index.html" class="homeLink">Go Home.</a>';
    return html;
};

scheduleConfirm.addEventListener('click', () => {
    bookingForm.style.display = 'none';
    confirmation.style.display = 'block';
    confirmation.innerHTML = confirm();
});


