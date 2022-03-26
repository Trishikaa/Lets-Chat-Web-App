
var firebaseConfig = {
      apiKey: "AIzaSyA6_ViqKDwSnpOOsg-Kv4wCK53hEdCWRTw",
      authDomain: "kwitter-f788d.firebaseapp.com",
      databaseURL: "https://kwitter-f788d-default-rtdb.firebaseio.com",
      projectId: "kwitter-f788d",
      storageBucket: "kwitter-f788d.appspot.com",
      messagingSenderId: "189640231690",
      appId: "1:189640231690:web:6b8d2196243639c906c8f3"
    };
    
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");


     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

     function addRoom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location="kwitter_page.html";
}

function getData() 
{
      firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      });
    });
      
}

getData();

function redirectToRoomName(name)
{

      localStorage.setItem("room_name", name);
      window.location='kwitter_page.html';
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html"
}