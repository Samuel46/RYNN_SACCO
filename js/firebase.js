// Your web app's Firebase configuration // Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCYI9RMe8k7kSBPN3w21M9tBC6LNW2_REk",
  authDomain: "rynnnn-cf958.firebaseapp.com",
  databaseURL: "https://rynnnn-cf958.firebaseio.com",
  projectId: "rynnnn-cf958",
  storageBucket: "",
  messagingSenderId: "585137539639",
  appId: "1:585137539639:web:b80c2515df4912fd"
};
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref("applicant_name");

// Submit form
function submitForm(e) {
  e.preventDefault();

  //   Get Values
  var applicant_name = getInputVal("applicant_name");
  var national_id = getInputVal("national_id");
  var gender = getInputVal("gender");
  var other_dep = getInputVal("other_dep");
  var mobile_no = getInputVal("mobile_no");

  // Save the application form
  saveMessage(applicant_name, national_id, gender, other_dep, mobile_no);

  // show Alert
  document.querySelector(".alert").style.display = "block";
  // Hide alert after 3 seconds
  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   Clear form
  document.getElementById("contactForm").reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}
//   Save message to firebase
function saveMessage(
  applicant_name,
  national_id,
  gender,
  other_dep,
  mobile_no
) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    applicant_name: applicant_name,
    national_id: national_id,
    gender: gender,
    other_dep: other_dep,
    mobile_no: mobile_no
  });
}
