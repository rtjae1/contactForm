// YOUR WEB APP'S FIREBASE CONFIGURATION
var firebaseConfig = {
  apiKey: "AIzaSyD9xbUAoxZMMMDhrOJVQ5U0QilRdWe5w7w",
  authDomain: "contactform-dea44.firebaseapp.com",
  databaseURL: "https://contactform-dea44.firebaseio.com",
  projectId: "contactform-dea44",
  storageBucket: "contactform-dea44.appspot.com",
  messagingSenderId: "303811674454",
  appId: "1:303811674454:web:666b15501383f8c18356f7"
};
// INITIALIZE FIREBASE
firebase.initializeApp(firebaseConfig);

// REFERENCE MESSAGES COLLECTION
var messagesRef = firebase.database().ref("messages");

// LISTEN FOR FORM SUBMIT
document.getElementById("contactForm").addEventListener("submit", submitForm);

// SUBMIT FORM
function submitForm(e) {
  e.preventDefault();

  //   GET VALUES
  var name = getInputVal("name");
  var company = getInputVal("company");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var message = getInputVal("message");

  //   SAVE MESSAGE
  saveMessage(name, company, email, phone, message);

  //   SHOW ALERT
  document.querySelector(".alert").style.display = "block";

  // HIDE ALERT AFTER 3 SECONDS
  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
//   CLEAR FORMS
  document.getElementById("contactForm").reset();
}

// FUNCTION TO GET FORM VALUES
function getInputVal(id) {
  return document.getElementById(id).value;
}

// SAVE MESSAGE TO FIREBASE
function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
