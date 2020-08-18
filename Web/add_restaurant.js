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
	var reff=firebase.database().ref('restaurant/'+'userss/');
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
	var MassageRef = firebase.database().ref('restaurant/'+ userId);
document.getElementById('entry').addEventListener('submit', submitform);

function submitform(e) {
    e.preventDefault();
    var State = getinputval('State');
    var City = getinputval('City');
    var RestaurantType = getinputval('RestaurantType');
    var RestaurantName = getinputval('RestaurantName');
    var Address = getinputval('Address');
    
    var AvailableNotOn = getinputval('AvailableNotOn');
   
    var RestaurantIs = getinputval('RestaurantIs');
    var AvailableTables = getinputval('AvailableTables');
    var RestaurantServices = getinputval('RestaurantServices');
    var ContactNumber = getinputval('ContactNumber');
    var Speciality = getinputval('Speciality');
   // var ContactNumber = getinputval('ContactNumber');
	
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

	
    SaveMassage(State, City, RestaurantType, RestaurantName, RestaurantIs, AvailableNotOn, Speciality, RestaurantServices, AvailableTables, Photo, Address, ContactNumber, OtherDetails);
	//var storageref = firebase.storage().ref();
	//var file = getinputval('fileButton');
 //storageref.put(file).then(function(snapshot) {
  //console.log('Uploaded a blob or file!');
//});

    // Reload page 3 seconds after form submission
  ("entry").onsubmit = setTimeout(function() {
        window.location = "add_restaurant.html";
    }, 5000);
	var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];
	var c= "your Data has been submitted!! You can view your submitted data on view Restaurant Details, and can edit in edit Restaurants details.";
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
  // window.alert("Data has been submitted!! You can view your submitted data on view hotel Details.");
}
/*
function photo11(){
	var fileButtongh,file,storageRef,task,url;
	   fileButtongh = document.getElementById("fileButton")
	   file = e.target.files[0];
	   //fileButtongh.addEventListener('change', function(e){
	   //file = e.target.files[0];
	   storageRef = firebase.storage().ref();
	   storageRef.put(file).then(function(snapshot) {
				console.log('Uploaded a blob or file!');
				});
	   //});
}

	   
            fileButtongh.addEventListener('change', function(e){
                 file = e.target.files[0];
				
				 window.alert("hello");
                 storageRef = firebase.storage().ref(file.name);
				 task = storageRef.put(file);
				 window.alert("uploaded");
				 //Update Progress Bar 
     task.on('state_changed', 

     function progress(snapshot){
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) *100;
        //uploader.value = percentage;

        //if percentage = 100
        //$(".overlay").hide();         
				 task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
					
  
				window.alert("hello");
				window.alert(downloadURL);
				});
				//src="https://firebasestorage.googleapis.com/v0/b/hexplore-fd40d.appspot.com/o/add_vehicle.html?alt=media&token=68d4ebca-a190-4ce6-928b-3650d77db78a";
               // storageRef.put(file);
				
            });
			});
			return url;
}
*/
		
	function getinputval(id) {
		//window.alert("done");
    return document.getElementById(id).value;
	
}

function SaveMassage(State, City, RestaurantType, RestaurantName, RestaurantIs, AvailableNotOn, Speciality, RestaurantServices, AvailableTables, Photo, Address, ContactNumber, OtherDetails) {
    var newMassageRef = MassageRef.push();
    newMassageRef.set({
        State: State,
        City: City,
		RestaurantType: RestaurantType,
		RestaurantName: RestaurantName,
		RestaurantIs: RestaurantIs,
		AvailableNotOn: AvailableNotOn,
		Speciality: Speciality,
		RestaurantServices: RestaurantServices,
		AvailableTables: AvailableTables,
		Address: Address,
        ContactNumber: ContactNumber,
        Photourl: Photo,
        OtherDetails: OtherDetails
    })
}


function myfi() {
    window.location = "add_restaurant.html";
}

/*
function photo(){
	
document.getElementById('entry').addEventListener('submit', submitform);

function submitform(e){
	e.preventDefault();
	var file = document.getElementById("fileButton").files[0];
// Create the file metadata
var metadata = {
  contentType: 'image/jpeg'
};
window.alert("hii");
var storageRef = firebase.storage().ref();
// Upload file and metadata to the object 'images/mountains.jpg'
var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);
window.alert("pass 1");
// Listen for state changes, errors, and completion of the upload.
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {
window.alert("pass 2");
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
  });
});
}
window.alert("last pass");
}*/  
  }
 }
  else {
	  var c="You are not signed in!";
	  document.getElementById("mas").innerHTML = c;
	  //window.alert("You are not signed in!");
    // No user is signed in.
	window.location="login-restaurant.html";
  }

});
//var userId = firebase.auth().currentUser.uid;
/*
var MassageRef = firebase.database().ref('transportation/' + userId);
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
    var Photo = photo();
    var OtherDetails = getinputval('other');

	
    SaveMassage(State, City, VehicalIs, VehicalName, AvailableSeats, AvailableOn, PickUpPoint, DestinationPoint, VehicalType, VehicalNumber, DriverName, DriverContactNumber, OtherDetails);


    // Reload page 3 seconds after form submission
  ("entry").onsubmit = setTimeout(function() {
        window.location = "add_vehicle.html";
    }, 3000);

   window.alert("Data has been submitted!! You can view your submitted data on view vehical Details and also you can edit submitted data on edit vehical details");
}

function photo(){
	
	  var fileButton = document.getElementById("fileButton");
            fileButton.addEventListener('change', function(e){
                var file = e.target.files[0];
                var storageRef = firebase.storage().ref(file.name);
				//src="https://firebasestorage.googleapis.com/v0/b/hexplore-fd40d.appspot.com/o/add_vehicle.html?alt=media&token=68d4ebca-a190-4ce6-928b-3650d77db78a";
                storageRef.put(file);
            });
}
		
/*	 var xhttp;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
    xhttp.open("GET", "Photo", true);
  xhttp.send();
}

function send(){
	var image = document.getElementById("Photo").files[0];
	var imageName = image.name;
	var storageRef = firebase.storage().ref('images/'+imageName);
	var uploadTask = storageRef.put(image);
	uploadTask.on('State_changed', function(snapshot) {
		var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
		console.log("upload is"+progress+"done");
	}, function (error) {
		console.log(error.message);
	}, function () {
		uploadTask.snapshot.ref.getDownloadURL().then( function (downloadURL) {
			console.log(downloadURL);
		});
	});
}
	// Create a root reference
/*var storageRef = firebase.storage().ref();

// Create a reference to 'mountains.jpg'
var mountainsRef = storageRef.child('images/*');

// Create a reference to 'images/mountains.jpg'
var mountainImagesRef = storageRef.child(document.getElementById("Photo"));

// While the file names are the same, the references point to different files
mountainsRef.name === mountainImagesRef.name            // true
mountainsRef.fullPath === mountainImagesRef.fullPath    // false
	
	// Uint8Array
//var bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
//ref.put(bytes).then(function(snapshot) {
  //console.log('Uploaded an array!');
//});
	var file = document.getElementById("Photo"); // use the Blob or File API
    ref.put(file).then(function(snapshot) {
  console.log('Uploaded a blob or file!');
});
}

	
	
/*	var timestamp = Number(new Date());
	var storageRef = firebase.storage().ref(timestamp.toString());
	
	//var $ = jQuery;
	var $ = document.getElementById("Photo");
	var file_data = $('#Photo').prop('files')[0];
	
	storageRef.put(file_data);
}
*/
	
	
	
	/*
		const ref = firebase.storage().ref();
const file = document.querySelector('Photo').files[0]
const name = (+new Date()) + '-' + file.name;
const metadata = {
  contentType: file.type
};
const task = ref.child(name).put(file, metadata);
task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then((url) => {
    console.log(url);
    document.querySelector('Photo').src = url;
  })
  .catch(console.error);
	}
	

function getinputval(id) {
    return document.getElementById(id).value;
}

function SaveMassage(State, City, VehicalIs, VehicalName, AvailableSeats, AvailableOn, PickUpPoint, DestinationPoint, VehicalType, VehicalNumber, DriverName, DriverContactNumber, OtherDetails) {
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
       // Photo: storageRef,
        OtherDetails: OtherDetails
    })
}


function myfi() {
    window.location = "add_vehicle.html";
}
var auth = firebase.auth();
var storageRef = firebase.storage().ref();

function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();
 var file = evt.target.files[0];


  var metadata = {
    'contentType': file.type
  };

  // Push to child path.
  var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

  // Listen for errors and completion of the upload.
  // [START oncomplete]
  uploadTask.on('state_changed', null, function(error) {
    // [START onfailure]
    console.error('Upload failed:', error);
    // [END onfailure]
  }, function() {
    console.log('Uploaded',uploadTask.snapshot.totalBytes,'bytes.');
    console.log(uploadTask.snapshot.metadata);
    var url = uploadTask.snapshot.metadata.downloadURLs[0];
    console.log('File available at', url);
    // [START_EXCLUDE]
    document.getElementById('linkbox').innerHTML = '<a href="' +  url + '">Click For File</a>';}

*/



