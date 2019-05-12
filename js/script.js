const showBookingForm = document.querySelector("#bookWalker");
const bookingForm = document.querySelector('.booking');
const ourMission = document.querySelector('.ourMission');
const scheduleConfirm = document.querySelector('#schedule');
const confirmation = document.querySelector('.confirmation');
const confirm_name = document.querySelector('#owner_name');
const resetPage = document.querySelector('.resetDiv');


showBookingForm.addEventListener('click', () => {
    ourMission.style.display = 'none';
    bookingForm.style.display = 'block';
});

function confirm(){
    var html = "";
    html += 'Thanks, ' + confirm_name.value + '!</br>';
    html += 'Your appointment has been confirmed!';
    html += '<div class="resetDiv"><a href="#">Go Home.</a></div>';
    return html;
};

scheduleConfirm.addEventListener('click', () => {
    ourMission.style.display = 'none'
    bookingForm.style.display = 'none';
    confirmation.style.display = 'block';
    confirmation.innerHTML = confirm();
    resetPage.style.display = 'block';
});


resetPage.addEventListener('click', () => {
    ourMission.style.display = 'block';
    bookingForm.style.display = 'none';
    confirmation.style.display = 'none';
});
