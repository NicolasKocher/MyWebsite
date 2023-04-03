const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) { // Change this value as needed
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

function sendEmail() {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "nicokocher1999",
    Password : "hellschwarz99",
    To : 'nicokocher1999@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact Form Enquiry",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

}