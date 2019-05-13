// Adjust contents of header and footer here
const header = document.querySelector('.headerBlank');
function headerContents(){
    var html = "";
    html += '<h1><a class="mainHeadLink" href="index.html">Walk A Goodboi&trade;</a></h1>';
    html += '<h3>Dog Walking Service</h3>';
    html += '<ul class="main-nav">';
    html += '<li><a href="booking.html">Book a Walker</a></li>';
    html += '<li><a href="contact.html">Contact Us</a></li>';
    html += '</ul>';
    return html;
};
header.innerHTML = headerContents();

const footer = document.querySelector('.footerBlank');
function footerContents(){
    var html = "";
    html += "<small><a href='https://github.com/MatthewFante'>&copy; Matthew Fante 2019</a></small>"
    return html;
};
footer.innerHTML = footerContents();