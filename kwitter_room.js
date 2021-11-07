const firebaseConfig = {
    apiKey: "AIzaSyDeNv4-CBjQhfbXoesAKFYswI2gSZH0_tw",
    authDomain: "kwitter-3d8cf.firebaseapp.com",
    databaseURL: "https://kwitter-3d8cf-default-rtdb.firebaseio.com",
    projectId: "kwitter-3d8cf",
    storageBucket: "kwitter-3d8cf.appspot.com",
    messagingSenderId: "294895587171",
    appId: "1:294895587171:web:945744ce35f47d6ab70d56"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
