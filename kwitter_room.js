
 var firebaseConfig = {
      apiKey: "AIzaSyDP28gZF8pXmRimhuHxjzLnzFQOgsHaF2E",
      authDomain: "project-93-d8fba.firebaseapp.com",
      databaseURL: "https://project-93-d8fba-default-rtdb.firebaseio.com",
      projectId: "project-93-d8fba",
      storageBucket: "project-93-d8fba.appspot.com",
      messagingSenderId: "213548784403",
      appId: "1:213548784403:web:96c4815a537a6a9edcd8e6",
      measurementId: "G-8NRXG8PGDN"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("room_name - "+Room_names);
     row="<div class='room_names'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      //End code
      });});}
getData();
function redirectToRoomName(name){
     console.log(name);
     localStorage.setItem("roomname,name");
     window.location="kwitter_page.html";
}
function logout(){
     localStorage.removeItem("Username");
     localStorage.removeItem("Roomname");
     Window.location="index.html";
}






