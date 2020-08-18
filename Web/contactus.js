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
 
  firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in
	var userId = firebase.auth().currentUser.uid;
	//window.alert(userId);
	var MassageRef = firebase.database().ref('Massages/' + userId);
    document.getElementById('entry').addEventListener('submit', submitform);

function submitform(e) {
    e.preventDefault();
    var name = getinputval('name');
    var email = getinputval('email');
    var massage = getinputval('message');
    
   

	
   /* SaveMassage(name, email, massage);
	var storageref = firebase.storage().ref();
	var file = getinputval('fileButton');
 storageref.put(file).then(function(snapshot) {
  console.log('Uploaded a blob or file!');
});*/

    // Reload page 3 seconds after form submission
  ("entry").onsubmit = setTimeout(function() {
        window.location = "contactus.html";
    }, 3000);
	
   window.alert("Your Massage has been sent to our team, We will reach you soon!");
}

		
	function getinputval(id) {
		//window.alert("done");
    return document.getElementById(id).value;
	
}

function SaveMassage(name, email, massage) {
    var newMassageRef = MassageRef.push();
    newMassageRef.set({
        name: name,
		email: email,
		massage: massage
    });
}

  }
  else{
	  window.alert("You are not logged in");
}
});