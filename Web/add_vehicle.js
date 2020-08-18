var url;
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
 
  firebase.initializeApp(firebaseConfig);
  
 firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in
	var userId = firebase.auth().currentUser.uid;
	//window.alert(userId);
	var MassageRef = firebase.database().ref('transportation/'+ userId);
	var reff=firebase.database().ref('transportation/'+'user/');
	//window.alert(reff);
	reff.on("value", function(user){
		user.forEach(function(singleuser){
			if(userId == singleuser.val().uid)
			{
			document.getElementById("name").innerHTML = singleuser.val().firstname;
			}
		})
		//var mypage = showpage();
	})
document.getElementById('entry').addEventListener('submit', submitform);

function submitform(e) {
    e.preventDefault();
    var State = getinputval('State');
    var City = getinputval('City');
    var VehicalIs = getinputval('VehicalIs');
    var VehicalName = getinputval('VehicleName');
    var AvailableSeats = getinputval('AvailableSeats');
    var AvailableOn = getinputval('AvailableOn');
    var PickUpPoint = getinputval('PickUpPoint');
    var DestinationPoint = getinputval('DestinationPoint');
    var VehicalType = getinputval('VehicleType');
    var VehicalNumber = getinputval('VehicleNumber');
    var DriverName = getinputval('DriverName');
    var DriverContactNumber = getinputval('DriverContactNumber');
   
function move(){   
    var file = document.getElementById("fileButton").files[0];
// Create the file metadata
var metadata = {
  contentType: 'image/jpeg'
};
var storageRef = firebase.storage().ref();
// Upload file and metadata to the object 'images/mountains.jpg'
var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);
// Listen for state changes, errors, and completion of the upload.
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 10;
    console.log('Upload is ' + progress + '% done');
	 var elem = document.getElementById("myBar");
	 var width=progress;
	 elem.style.progress = progress + "%";
	 elem.innerHTML = width + "%";
	 
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {
  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;

    

    case 'storage/unknown':
      // Unknown error occurred, inspect error.serverResponse
      break;
  }
  window.alert("pass 3");
}, function() {
  // Upload completed successfully, now we can get the download URL
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
	window.alert(downloadURL);
	url = downloadURL;
  });
});
}
	var Photo = url;
    var OtherDetails = getinputval('other');

	
    SaveMassage(State, City, VehicalIs, VehicalName, AvailableSeats, AvailableOn, Photo, PickUpPoint, DestinationPoint, VehicalType, VehicalNumber, DriverName, DriverContactNumber, OtherDetails);
	//var storageref = firebase.storage().ref();
	//var file = getinputval('fileButton');
 //storageref.put(file).then(function(snapshot) {
  //console.log('Uploaded a blob or file!');
//});

    // Reload page 3 seconds after form submission
  ("entry").onsubmit = setTimeout(function() {
        window.location = "add_vehicle.html";
    }, 5000);
	var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];
	var c= "your Data has been submitted!! You can view your submitted data on view vehicle Details, and can edit in edit vehicle details.";
	document.getElementById("mas").innerHTML = c;
  modal.style.display = "block";


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
   //window.alert("Data has been submitted!! You can view your submitted data on view vehical Details and also you can edit submitted data on edit vehical details");
}

		
	function getinputval(id) {
    return document.getElementById(id).value;
}

function SaveMassage(State, City, VehicalIs, VehicalName, AvailableSeats, AvailableOn, Photo, PickUpPoint, DestinationPoint, VehicalType,  VehicalNumber, DriverName, DriverContactNumber, OtherDetails) {
    var newMassageRef = MassageRef.push();
    newMassageRef.set({
        State: State,
        City: City,
        VehicalIs: VehicalIs,
        VehicalName: VehicalName,
        AvailableSeats: AvailableSeats,
        AvailableOn: AvailableOn,
        PickUpPoint: PickUpPoint,
        DestinationPoint: DestinationPoint,
        VehicalType: VehicalType,
        VehicalNumber: VehicalNumber,
        DriverName: DriverName,
        DriverContactNumber: DriverContactNumber,
        Photourl: Photo,
        OtherDetails: OtherDetails
    })
}


function myfi() {
    window.location = "add_vehicle.html";
}

  }
  else {
	  var c="You are not signed in! kindly please do login";
	  document.getElementById("mas").innerHTML = c;
	 // window.alert("You are not signed in!");
    // No user is signed in.
	//window.location="login-hotel.html";
	 // window.alert("You are not signed in!");
    // No user is signed in.
	window.location="login-traveller.html";
  }

});
