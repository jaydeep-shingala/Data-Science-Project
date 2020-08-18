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


var userId;
var userName;
firebase.auth().onAuthStateChanged(function(user) {

  if (user) {
	userId = firebase.auth().currentUser.uid;
	window.alert(userId);
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

	//window.alert(userId);
	var userRef = firebase.database().ref().child('/restaurant/' + 'userss');
	//window.alert(userRef);
	userRef.on("value", function(users)
	{
		if(users.exists())
		{
			users.forEach(function(singleuser)
			{
				if(userId == singleuser.val().uid)
				{
					document.getElementById("username").innerHTML = singleuser.val().firstname;
					document.getElementById("username2").innerHTML = singleuser.val().firstname;
					document.getElementById("email").innerHTML = singleuser.val().email;
					document.getElementById("company").innerHTML = singleuser.val().company;
					document.getElementById("state").innerHTML = singleuser.val().state;
					document.getElementById("city").innerHTML = singleuser.val().city;
					document.getElementById("mn").innerHTML = singleuser.val().mobile;
					document.getElementById("gender").innerHTML = singleuser.val().gender;
					document.getElementById("address").innerHTML = singleuser.val().address;
					
				
				}
			});
		}
	});
	var ref2 = firebase.database().ref().child('/restaurant/' + userId);
	var c=0;
	ref2.on("value", function(entry)
	{
		if(entry.exists())
		{	
			
			entry.forEach(function(singleentry)
			{
				c = c+1;
				document.getElementById("totalentry").innerHTML = c;
			});
		}
	});
	
	
  

  }
  else{
	  window.alert("You are not signed in!");
}
});
function updatedata(key,a,b,c,d,e,f,g,h)
{
	var MassageRef = firebase.database().ref('restaurant/'+ 'userss');
//	window.alert(f);
	firstname = document.getElementById(a).value;
	Email = document.getElementById(b).value;
	State = document.getElementById(c).value;
	City = document.getElementById(d).value;
	Company = document.getElementById(e).value;
	Mobile = document.getElementById(f).value;
	Address = document.getElementById(g).value;
	Gender = document.getElementById(h).value;
	
	
	//window.alert(State);
	MassageRef.child(key).update({
		firstname : firstname,
		email: Email,
		state: State,
		city: City,
		company: Company,
		mobile: Mobile,
		address: Address,
		gender: Gender
		})
}
function myf2(){
	var userRef = firebase.database().ref().child('/restaurant/' + 'userss');
	//window.alert(userRef);
	userRef.on("value", function(users)
	{
		if(users.exists())
		{	
			var blogsHtml = " ";
					
			users.forEach(function(singleuser)
			{
				if(userId == singleuser.val().uid)
				{
					blogsHtml += "<div class='page-title'> User Profile</div>";
					blogsHtml += "<div class='list-group list-group-unbordered'>";
					blogsHtml += "<div class='list-group-item'>";
					blogsHtml += "<b> Full Name: <div class='pull-right' ></b>"+singleuser.val().firstname+"</div>";
					blogsHtml += "</div>";
					blogsHtml += "</div>";
					
					blogsHtml += "<div class='list-group list-group-unbordered'>";
					blogsHtml += "<div class='list-group-item'>";
					blogsHtml += "<b> Email: <div class='pull-right' ></b>"+singleuser.val().email+"</div>";
					blogsHtml += "</div>";
					blogsHtml += "</div>";
					
					blogsHtml += "<div class='list-group list-group-unbordered'>";
					blogsHtml += "<div class='list-group-item'>";
					blogsHtml += "<b> State: <div class='pull-right' ></b>"+singleuser.val().state+"</div>";
					blogsHtml += "</div>";
					blogsHtml += "</div>";
					
					blogsHtml += "<div class='list-group list-group-unbordered'>";
					blogsHtml += "<div class='list-group-item'>";
					blogsHtml += "<b> City: <div class='pull-right' ></b>"+singleuser.val().city+"</div>";
					blogsHtml += "</div>";
					blogsHtml += "</div>";
					
					blogsHtml += "<div class='list-group list-group-unbordered'>";
					blogsHtml += "<div class='list-group-item'>";
					blogsHtml += "<b> company Name: <div class='pull-right' ></b>"+singleuser.val().company+" </div>";
					blogsHtml += "</div>";
					blogsHtml += "</div>";
					
					blogsHtml += "<div class='list-group list-group-unbordered'>";
					blogsHtml += "<div class='list-group-item'>";
					blogsHtml += "<b> Mobile Number: <div class='pull-right' ></b>"+singleuser.val().mobile+"</div>";
					blogsHtml += "</div>";
					blogsHtml += "</div>";
					
					blogsHtml += "<div class='list-group list-group-unbordered'>";
					blogsHtml += "<div class='list-group-item'>";
					blogsHtml += "<b> Address: <div class='pull-right' ></b>"+singleuser.val().address+" </div>";
					blogsHtml += "</div>";
					blogsHtml += "</div>";
					
					blogsHtml += "<div class='list-group list-group-unbordered'>";
					blogsHtml += "<div class='list-group-item'>";
					blogsHtml += "<b> Gender: <div class='pull-right' ></b>"+singleuser.val().gender+"</div>";
					blogsHtml += "</div>";
					blogsHtml += "</div>";
					
					//blogsHtml += "<div><button data-modal-target='#modal' class='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink' onclick = updatedata('"+singleuser.key+"','"+a+"','"+b+"','"+c+"','"+d+"','"+e+"','"+f+"','"+g+"','"+h+"') >update your profile</button> </div>";
					
					
				}
				
			});
			$("#mydata2").html(blogsHtml);
		}
	});
	
}
function resett(email)
{
	var auth = firebase.auth();

auth.sendPasswordResetEmail(email).then(function() {
  // Email sent.
  window.alert("An mail has been sent to your registred email address!");
}).catch(function(error) {
  // An error happened.
  window.alert(error);
});
}
function myf(){
	//window.alert("hi");
	var userRef = firebase.database().ref().child('/restaurant/' + 'userss');
	//window.alert(userRef);
	userRef.on("value", function(users)
	{
		if(users.exists())
		{	
			var blogsHtml = " ";
					var a=0;
					var b=1000;
					var c=10000;
					var d=100000;
					var e=1000000;
					var f=10000000;
					var g=100000000;
					var h=1000000000;
			users.forEach(function(singleuser)
			{
				if(userId == singleuser.val().uid)
				{
					blogsHtml += "<div class='page-title'>Edit User Profile</div>";
					blogsHtml += "<div class='list-group list-group-unbordered'>";
					blogsHtml += "<div class='list-group-item'>";
					blogsHtml += "<b> Full Name: <div class='pull-right' ></b><input id='"+a+"' value='"+singleuser.val().firstname+"' /></div>";
					blogsHtml += "</div>";
					blogsHtml += "</div>";
					
					blogsHtml += "<div class='list-group list-group-unbordered'>";
					blogsHtml += "<div class='list-group-item'>";
					blogsHtml += "<b> Email: <div class='pull-right' ></b><input id='"+b+"' value='"+singleuser.val().email+"' /></div>";
					blogsHtml += "</div>";
					blogsHtml += "</div>";
					
					blogsHtml += "<div class='list-group list-group-unbordered'>";
					blogsHtml += "<div class='list-group-item'>";
					blogsHtml += "<b> State: <div class='pull-right' ></b><input id='"+c+"' value='"+singleuser.val().state+"' /></div>";
					blogsHtml += "</div>";
					blogsHtml += "</div>";
					
					blogsHtml += "<div class='list-group list-group-unbordered'>";
					blogsHtml += "<div class='list-group-item'>";
					blogsHtml += "<b> City: <div class='pull-right' ></b><input id='"+d+"' value='"+singleuser.val().city+"' /></div>";
					blogsHtml += "</div>";
					blogsHtml += "</div>";
					
					blogsHtml += "<div class='list-group list-group-unbordered'>";
					blogsHtml += "<div class='list-group-item'>";
					blogsHtml += "<b> company Name: <div class='pull-right' ></b><input id='"+e+"' value='"+singleuser.val().company+"' /></div>";
					blogsHtml += "</div>";
					blogsHtml += "</div>";
					
					blogsHtml += "<div class='list-group list-group-unbordered'>";
					blogsHtml += "<div class='list-group-item'>";
					blogsHtml += "<b> Mobile Number: <div class='pull-right' ></b><input id='"+f+"' value='"+singleuser.val().mobile+"' /></div>";
					blogsHtml += "</div>";
					blogsHtml += "</div>";
					
					blogsHtml += "<div class='list-group list-group-unbordered'>";
					blogsHtml += "<div class='list-group-item'>";
					blogsHtml += "<b> Address: <div class='pull-right' ></b><input id='"+g+"' value='"+singleuser.val().address+"' /></div>";
					blogsHtml += "</div>";
					blogsHtml += "</div>";
					
					blogsHtml += "<div class='list-group list-group-unbordered'>";
					blogsHtml += "<div class='list-group-item'>";
					blogsHtml += "<b> Gender: <div class='pull-right' ></b><input id='"+h+"' value='"+singleuser.val().gender+"' /></div>";
					blogsHtml += "</div>";
					blogsHtml += "</div>";
					
					blogsHtml += "<div><button data-modal-target='#modal' class='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink' onclick = updatedata('"+singleuser.key+"','"+a+"','"+b+"','"+c+"','"+d+"','"+e+"','"+f+"','"+g+"','"+h+"') >update your profile</button> ";
					var email = singleuser.val().email;
					blogsHtml += "<button data-modal-target='#modal' class='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-gray' onclick=resett('"+email+"')>Reset password</button>";
					blogsHtml += "</div>";
					blogsHtml += "<div><br><br></div>";
				}
				a=a+1;
				b=b+1;
				c=c+1;
				d=d+1;
				e=e+1;
				f=f+1;
				g=g+1;
				h=h+1;
			});
			$("#mydata").html(blogsHtml);
		}
	});
	
}