const firebaseConfig = {
    apiKey: "AIzaSyBrYUEJjr6-QsAov4-uWXHh7SSrzcWVIyY",
    authDomain: "bike-form-29da1.firebaseapp.com",
    projectId: "bike-form-29da1",
    storageBucket: "bike-form-29da1.appspot.com",
    messagingSenderId: "406009589269",
    appId: "1:406009589269:web:dd2f2b4071b680074b681c",
    measurementId: "G-08260HBGRN"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
var messagesRef = firebase.database().ref('messages');
document.getElementById('contactForm').addEventListener('submit', submitForm);
function submitForm(e){
    e.preventDefault();
    var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  saveMessage(name, company, email, phone, message);
  document.querySelector('.alert').style.display = 'block';
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
  document.getElementById('contactForm').reset();
}
function getInputVal(id){
    return document.getElementById(id).value;
  }
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }  