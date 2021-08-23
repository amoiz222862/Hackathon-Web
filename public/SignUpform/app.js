

  // Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var Username = getInputVal('Username');
  var email = getInputVal('email');
  var country = getInputVal('country');
  var phone = getInputVal('phone');
  var password = getInputVal('password');

  // Save message
  saveMessage(Username, email, country, phone, password);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(Username, email, country, phone, password) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    Username: Username,
    email: email,
    country: country,
    phone: phone,
    password: password
  });
}


