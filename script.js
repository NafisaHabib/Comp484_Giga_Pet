$(function() {
  // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $(".treat-button").click(clickedTreatButton);
  $(".play-button").click(clickedPlayButton);
  $(".exercise-button").click(clickedExerciseButton);
  // here is the two extra button
  $(".song-button").click(clickedSongButton);
  $(".check-button").click(clickedCheckButton);
});

// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = { name: "Kich Kich", weight: 10, happiness: 10, check: "Hi" }; // added the new attribute here

//This is for the song.
// I could make different var for each song for the buttons, But I thought the other way is easier
var pet_song = new Audio(
  "https://cdn.glitch.com/f42c3be2-22c5-4a17-aa4b-5ccbe05c233e%2Ftom-and-jerry-ringtone.mp3?v=1604561395114"
);

function clickedTreatButton() {
  // Increase pet happiness
  pet_info.happiness += 5;
  // Increase pet weight
  pet_info.weight += 5;
  // adding the audio
  var audio = document.getElementById("sound1");
  audio.play();
  // changing the check attribute
  pet_info.check = "Hi";
  checkAndUpdatePetInfoInHtml();
  // adding the comment here
  document.getElementById("comment").innerHTML = "The treat is awesome!";
}

function clickedPlayButton() {
  // Increase pet happiness
  pet_info.happiness += 2;
  // Decrease pet weight
  pet_info.weight -= 2;
  var audio = document.getElementById("sound2");
  audio.play();
  pet_info.check = "Hi";
  checkAndUpdatePetInfoInHtml();
  document.getElementById("comment").innerHTML = "Playing is fun!";
}

function clickedExerciseButton() {
  // Decrease pet happiness
  pet_info.happiness -= 5;
  // Decrease pet weight
  pet_info.weight -= 5;
  var audio = document.getElementById("sound3");
  audio.play();
  pet_info.check = "Hi";
  checkAndUpdatePetInfoInHtml();
  document.getElementById("comment").innerHTML = "I lost a lot of pounds!";
}

function clickedSongButton() {
  pet_song.play();
  pet_info.check = "Hi";
  checkAndUpdatePetInfoInHtml();
  document.getElementById("comment").innerHTML = "Do you remember this song?";
}
// This is a new function which figure put what the pet wants
function clickedCheckButton() {
  // here is some conditions to check the status of the pet
  if (pet_info.weight <= 5 && pet_info.happiness <= 5)
    pet_info.check = "I want food and I want to be happy";
  else if (pet_info.weight == 10) pet_info.check = "I do not need anything";
  else if (pet_info.weight < 10) pet_info.check = "I want food";
  else if (pet_info.weight > 10)
    pet_info.check = "I want to be happy. Play with me";

  checkAndUpdatePetInfoInHtml();
  document.getElementById("comment").innerHTML =
    "Thank you for checking my feelings";
}
function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  // Add conditional so if weight is lower than zero, set it back to zero
  if (pet_info.weight < 0) {
    pet_info.weight = 0; // This ensures that the weight cannot be less than zero
    alert("Please feed me! I am dying.");
  } else if (pet_info.weight == 2) {
    alert("I am hungry. Feed me!"); // This gives alert if the weight =2
  }

  if (pet_info.happiness < 0) {
    pet_info.happiness = 0; // This ensures that the happiness cannot be negative
    alert("I am sad! Play with me."); // It alerts that pet wants to play
  } else if (pet_info.happiness >= 50) pet_info.happiness = 50;

  updatePetInfoInHtml();
}

// Updates your HTML with the current values in your pet_info dictionary
function updatePetInfoInHtml() {
  $(".name").text(pet_info["name"]);
  $(".weight").text(pet_info["weight"]);
  $(".happiness").text(pet_info["happiness"]);
  $(".check").text(pet_info["check"]); // This is the new check
}
