
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDKom0Dcwbd3Q0MvMaNBaQimpeaTjOtMLQ",
    authDomain: "hexplore-daa3a.firebaseapp.com",
    databaseURL: "https://hexplore-daa3a.firebaseio.com",
    projectId: "hexplore-daa3a",
    storageBucket: "hexplore-daa3a.appspot.com",
    messagingSenderId: "907722720364",
    appId: "1:907722720364:web:de03f4d90928319c12c449",
    measurementId: "G-KWSCNW67RQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
var MassageRef = firebase.database().ref('hotel/' + 'users');
function login()
{
	//window.alert("gh");
	/*// Reload page 3 seconds after form submission
	("form").onsubmit = setTimeout(function () {
    window.location = "login-hotel.html"; 
    }, 3000);
	window.alert("you are logged in !!!");   */
	
	var userEmail = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	//window.alert(userEmail);
//	firebase.auth().signInWithEmailAndPassword(userEmail, password).catch(function(error) {
   
  // Handle Errors here.
 // var errorCode = error.code;
  //var errorMessage = error.message;
 // firebase.auth().CreateUserWithEmailAndPassword(userEmail, password).catch(function(error) {
  // Handle Errors here.
 // var errorCode = error.code;
 // var errorMessage = error.message;
 // window.alert("Error: " + error.message);
  // ...

//});


firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
//	var token = firebase.auth().createCustomToken(UID);
//	firebase.auth().signInWithCustomToken(token);
    firebase.auth().signInWithEmailAndPassword(userEmail, password);
	//window.location="index-transportation.html";

	
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
	window.alert("Error: " + error.message);
  });



firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	var userId = firebase.auth().currentUser.uid;
	//alert(userId);
	//window.alert(userId);
	//continueUrl: 'file:///C:/Users/Admin/Desktop/testlogin/index-transportation.html' | null
	
	//alert(MassageRef);
	var firstname = localStorage.getItem("fname");
	var email = localStorage.getItem("email");
	var address = localStorage.getItem("address");
	var company = localStorage.getItem("company");
	var mobile = localStorage.getItem("mobile");
	var gender = localStorage.getItem("gender");
	var state = localStorage.getItem("state");
	var city = localStorage.getItem("city");
	var password = localStorage.getItem("password");
	//alert(firstname);
	//alert(city);
	
	SaveMassage(firstname, email, address, company, mobile, gender, state, city, password, userId);
	
	setTimeout(function () {
	
    window.location = "index-hotel.html"; 
    }, 3000);
	//window.location="index-hotel.html"; 
	
  } else {
	  //window.alert("Please Enter right email and password ");
    // No user is signed in.
	//window.location="login-hotel.html";
  }
});
}

function SaveMassage(firstname, email, address, company, mobile, gender, state, city, password, userId)
{	
	//alert("called");
	var newMassageRef=MassageRef.push();
	newMassageRef.set({
		firstname: firstname,
		email: email,
		address: address,
		company: company,
		mobile: mobile,
		gender: gender,
		state: state,
		city: city,
		password: password,
		uid: userId
	})
}


//Firebase.auth().createCustomToken(UID) to sign in user on firebase with the following function firebase.auth().signInWithCustomToken(token)