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
  
var userId;
var MassageRef = firebase.database().ref('hotel/' + 'users');

document.getElementById('regform').addEventListener('submit', submitform);

function submitform(e)
{
	e.preventDefault();
	var pass=document.getElementById('pass').value;
	var repass=document.getElementById('repass').value;
	if(pass != repass)
	{
		window.alert("Please confirm password");
		return false;
	}
	else{
		
	var firstname= getinputval('fname');
	var email= getinputval('email');
	var address= getinputval('address');
	var company= getinputval('company');
	var mobile= getinputval('mobile');
	var gender= getinputval('gender');
	var state= getinputval('state');
	var city= getinputval('city');
	var password= getinputval('pass');
	var repassword= getinputval('repass');
	
	localStorage.setItem("fname",firstname);
	localStorage.setItem("email",email);
	localStorage.setItem("address",address);
	localStorage.setItem("company",company);
	localStorage.setItem("mobile",mobile);
	localStorage.setItem("gender",gender);
	localStorage.setItem("state",state);
	localStorage.setItem("city",city);
	localStorage.setItem("pass",password);
	
	alert("hi");
	
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert(error);
});

	//if(password!=repassword)
	//{
		//window.alert("Please confirm password");
		//window.location = "regpage-hotel.html"; 
	//}
	
// Reload page 3 seconds after form submission
	("form").onsubmit = setTimeout(function () {
	
    window.location = "login-hotel.html"; 
    }, 3000);

	window.alert("you are registered successfully");
}
}
/*
function validate()
{
	
	var pass=document.getElementById('pass').value;
	var repass=document.getElementById('repass').value;
	if(pass != repass)
	{
		window.alert("Please confirm password");
		return false;
	}
	else{
		
		var useremail = document.getElementById('email').value;
		var userpassword = document.getElementById('pass').value;
		firebase.auth().createUserWithEmailAndPassword(useremail, userpassword).then(credential => {
    // Save user here.
   
      //email: credential.user.email,
      userId =  credential.user.uid;
		//window.alert("ok");
  })
		.catch(function(error) {
  // Handle Errors here.
  
  var errorCode = error.code;
  var errorMessage = error.message;
  //window.alert(error);
});
	
}


}   */
function getinputval(id)
{
	return document.getElementById(id).value;
}

function SaveMassage(firstname, email, address, company, mobile, gender, state, city, password, userId)
{
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




