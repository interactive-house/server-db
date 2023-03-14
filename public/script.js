// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {getDatabase,ref,get,set,child,update,remove,onValue} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use

  
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOZcBxs3RkxuxDrf5vT2HwexFh3ZCw94c",
    authDomain: "smarthome-3bb7b.firebaseapp.com",
    projectId: "smarthome-3bb7b",
    storageBucket: "smarthome-3bb7b.appspot.com",
    messagingSenderId: "642589059290",
    appId: "1:642589059290:web:bf23df5327b9e305c81de3"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase()
var light = document.getElementById("Namebox");
var door = document.getElementById("Rollbox");

var insbutLight = document.getElementById("insbtnLight");
var insbutDoor = document.getElementById("insbtnDoor");


// These functions are to insert data into DB

function InsertDataLight(){
  set(ref(db,"SmartHomeValueLight/"),{
    StatusOflight: light.value
  }).then(()=> {
    alert("data stored successfully for Light");
  }).catch((error)=>{alert("unsuccessful, error"+error)});
}


function InsertDataDoor(){
  set(ref(db,"SmartHomeValueDoor/"),{
    StatusOfDoor: door.value
  }).then(()=> {
    alert("data stored successfully for Door");
  }).catch((error)=>{alert("unsuccessful, error"+error)});
}


// Click event
insbutLight.addEventListener("click",InsertDataLight);
insbutDoor.addEventListener("click",InsertDataDoor); 


// Initialize refernce from DB to be able to listen any change 
const RefLight = ref(db,"SmartHomeValueLight");
const RefDoor = ref(db,"SmartHomeValueDoor");
const RefWindow = ref(db,"SmartHomeValueWindow");
const RefSoil = ref(db,"SmartHomeValueSoil");
const RefSimulatedDevices = ref(db,"simulatedDevices");

// Onvalue for listening from DB
onValue(RefLight,(snapshot)=> {
  const getValue = snapshot.val().StatusOflight
  light.value = getValue;
  console.log("The value of ligt is "+ getValue)
})

onValue(RefDoor,(snapshot)=> {
  const getValue = snapshot.val().StatusOfDoor
  door.value = getValue;
  console.log("The value of ligt is "+ getValue)
})

onValue(RefWindow,(snapshot)=> {
  const getValue = snapshot.val().StatusOfWindow
  // door.value = getValue;
  console.log("The value of Window is "+ getValue)
})

onValue(RefSoil,(snapshot)=> {
  const getValue = snapshot.val().StatusOfSoil
  // door.value = getValue;
  console.log("The value of Soil is "+ getValue)
})

onValue(RefSimulatedDevices,(snapshot)=> {
  const getValue = snapshot.val().deviceStatus
  // door.value = getValue;
  console.log("The value of device Status is "+ getValue)
})

onValue(RefSimulatedDevices,(snapshot)=> {
  const getValue = snapshot.val().songStatus
  // door.value = getValue;
  console.log("The value of device song Status is "+ getValue)
})

onValue(RefSimulatedDevices,(snapshot)=> {
  const getValue = snapshot.val().songList
  // door.value = getValue;
  console.log("The value of device song List is "+ getValue)
})

// function readDate(){
//   const dbref = ref(db);

//   get(child(dbref,"SmartHomeValueLight/")).then(()=> {
//     if(snapshot.exists()){
//       alert(" data found");
//       light.value = snapshot.val().StatusOflight
//       console.log(snapshot.val().StatusOflight);
//     }else{
//       alert("no data found");
//       console("no data found")
//     }
//   }).catch((error)=>{alert("unsuccessful reading data, error"+error)});
// }