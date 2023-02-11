// Write JavaScript here 
const senderButton = document.querySelector("#sender");
const logisticianButton = document.querySelector("#logistician");
const receiverButton = document.querySelector("#receiver");

const loginSignupForm = document.querySelector(".login-signup-form");
const trackIdForm = document.querySelector(".track-id");

receiverButton.addEventListener("click", function() {
  loginSignupForm.style.display = "none";
  trackIdForm.style.display = "block";
  receiverButton.style.backgroundColor = "#3e3e3e";
  receiverButton.style.color = "#fff";
  senderButton.style.backgroundColor = "#fff";
  senderButton.style.color = "#3e3e3e";
  logisticianButton.style.backgroundColor = "#fff";
  logisticianButton.style.color = "#3e3e3e";
});

senderButton.addEventListener("click", function() {
  loginSignupForm.style.display = "block";
  trackIdForm.style.display = "none";
  senderButton.style.backgroundColor = "#3e3e3e";
  senderButton.style.color = "#fff";
  receiverButton.style.backgroundColor = "#fff";
  receiverButton.style.color = "#3e3e3e";
  logisticianButton.style.backgroundColor = "#fff";
  logisticianButton.style.color = "#3e3e3e";
});

logisticianButton.addEventListener("click", function() {
  loginSignupForm.style.display = "block";
  trackIdForm.style.display = "none";
  logisticianButton.style.backgroundColor = "#3e3e3e";
  logisticianButton.style.color = "#fff";
  senderButton.style.backgroundColor = "#fff";
  senderButton.style.color = "#3e3e3e";
  receiverButton.style.backgroundColor = "#fff";
  receiverButton.style.color = "#3e3e3e";
});
