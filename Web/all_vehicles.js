 window.alert("func called");
 //firebase.initializeApp(firebaseConfig);
//var u = firebase.auth().currentUser.uid;
function deleteblogrecoed(jah){
	//var deleteref = firebase.database().ref().child('/transportation/' + u).child(key);

	window.alert(jah);
	return jah.remove();
	

}
	
var dbblog = firebase.database().ref().child('/restaurant/' + userId);
	dbblog.on("value", function(blogs)
	{
		if(blogs.exists())
		{
			
			var blogsHtml = " ";
			//blogsHtml += "<div class='page-wrapper'>";
			//	blogsHtml += "<div class='page-container'>";
				//blogsHtml += "<div class='page-content-wrapper'>";
				//blogsHtml += "<div class='page-content'>";
				blogsHtml += "<div class='row'>";
			blogs.forEach(function(singleBlog)
			{
				
				//src = "all_vehicles.js"
				//blogsHtml += "<div class='blogThumb'>";
				blogsHtml += "<div class='col-lg-4 col-md-6 col-12 col-sm-6'>";
				blogsHtml += "<div class='thumb-center'> <img width='400px' height='250px' src='";
				blogsHtml += singleBlog.val().Photourl;
				blogsHtml += "'/> </div><br> ";
				blogsHtml += "<div class='user-name'> <p> <b> VehicalName: "+singleBlog.val().RestaurantName+" </b> </p> </div>";
				
				blogsHtml += "<div class='vehicle-box'>";
				blogsHtml += "<div> <p> <strong> State :</strong> "+singleBlog.val().State +"</p> </div>";
				blogsHtml += "<div> <p> <strong> City :</strong> "+singleBlog.val().City +"</p> </div>";
				blogsHtml += "<div> <p> <strong> Restaurant is :</strong> "+singleBlog.val().RestaurantIs +"</p> </div>";
				blogsHtml += "<div> <p> <strong> Available Tables :</strong> "+singleBlog.val().AvailableTables +"</p> </div>";
				blogsHtml += "<div> <p> <strong> Available NOt on :</strong> "+singleBlog.val().AvailableNotOn +"</p> </div>";
				
				blogsHtml += "<div> <p> <strong> Restaurant Type :</strong> "+singleBlog.val().RestaurantType +"</p> </div>";
				blogsHtml += "<div> <p> <strong> Address :</strong> "+singleBlog.val().Address +"</p> </div>";
				blogsHtml += "<div> <p> <strong> Restaurant Services :</strong> "+singleBlog.val().RestaurantServices +"</p> </div>";
				blogsHtml += "<div> <p> <strong> Speciality :</strong> "+singleBlog.val().Speciality +"</p> </div>";
				blogsHtml += "<div> <p> <strong> Contact Number :</strong> "+singleBlog.val().ContactNumber +"</p> </div>";
				blogsHtml += "<div> <p> <strong> Other Details :</strong> "+singleBlog.val().OtherDetails +"</p> </div>";
				var deleteref = firebase.database().ref().child('/transportation/' + userId).child(singleBlog.key);
				//window.alert(deleteref);
				ref = firebase.database().ref().child('/restaurant/' + userId);
				jk= firebase.database().ref().child('restaurant/' + userId);
				blogsHtml += "<div><button id='nb' class='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink' onclick = ref.child('"+singleBlog.key+"').remove() >Delete this Data</button> </div>";
				//document.getElementById("nb").addEventListener('click', deleteblogrecoed, deleteref);✎
				//deleteblogrecoed('"+singleBlog.key+"')
				//onclick = deleteblogrecoed('"+deleteref+"')
				blogsHtml += "</div>";
				//blogsHtml += "</div>";
				blogsHtml += "</div>";
				
				//blogsHtml += "</div>";
			});
			blogsHtml += "</div>";
				//blogsHtml += "</div>";
				//blogsHtml += "</div>";
				//blogsHtml += "</div>";
				//blogsHtml += "</div>";
			$("#myData").html(blogsHtml);
		}
		else{
		window.alert("no data found");
		}
	});


 } else {
	  window.alert("You are not signed in!");
  }
  	
});


  

	