//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCo0WlaYBfYG7fS7-XUHHES2fvyZeWtcFA",
      authDomain: "kwitter-db992.firebaseapp.com",
      databaseURL: "https://kwitter-db992-default-rtdb.firebaseio.com",
      projectId: "kwitter-db992",
      storageBucket: "kwitter-db992.appspot.com",
      messagingSenderId: "725265776311",
      appId: "1:725265776311:web:2dff64ab0b327447b51732"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig); 

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData(); 
user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");
function send()
{
msg = document.getElementById("msg").value
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

document.getElementById("msg").value = "";
}