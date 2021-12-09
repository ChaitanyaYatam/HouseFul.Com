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
    
    
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username = ")
    room_name = localStorage.getItem("House Name")

    var Name;
    var Message;
    var like

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['Name']
    message = message_data['Message']
    like = message_data['like']
    name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'></h4>"
    message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>"
    like_button = "<button class = 'btn btn-warning' id = "+firebase_message_id+" value = "+like+" onclick = 'updatelike(this.id)'>"
    span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Likes: "+like+" </span> </button> <hr>" 
    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML+= row;
      } });  }); }


function updatelike(message_id){
      console.log("clicked on the like button - " + message_id);
      button_id = message_id
      like = document.getElementById(button_id).value;
      updatelikes = Number(like) + 1;
      console.log(updatelikes)

      firebase.database().ref(room_name).child(message_id).update({
            like:updatelikes
      })
}

getData();



function sendmsg(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            Name:user_name,
            Message:msg,
            like:0
      })
      console.log(Name)
      console.log(Message)
      document.getElementById("msg").value = ""
}

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")

      window.location.replace("index.html")
}
