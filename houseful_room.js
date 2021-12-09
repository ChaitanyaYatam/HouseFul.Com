const firebaseConfig = {
      apiKey: "AIzaSyDiuS238Eac43l49gy3Svzn3ubpBtU4HL8",
      authDomain: "houseful-2fcdc.firebaseapp.com",
      databaseURL: "https://houseful-2fcdc-default-rtdb.firebaseio.com",
      projectId: "houseful-2fcdc",
      storageBucket: "houseful-2fcdc.appspot.com",
      messagingSenderId: "398947350234",
      appId: "1:398947350234:web:32c3c25ecc1e281d9f17e3",
      measurementId: "G-J2F7LEY9GW"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("Username = ")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      })
      localStorage.setItem("House Name",room_name);
      window.location = "houseful_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Houses = " + Room_names)
      row = "<div class = 'room_name' id = "+ Room_names +" onclick = 'redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row
      });});}
getData();

function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("House Name",name)
      window.location = "houseful_page.html"
}

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("Room_names")

      window.location = "index.html"
}
