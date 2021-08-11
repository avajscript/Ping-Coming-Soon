window.onload = () => {
  // Variables
  const inputField = document.querySelector("input[type='email']");
  const button = document.querySelector(".button");
  const validPopup = inputField.nextElementSibling;
  console.log(validPopup);

  // Functions
  const checkEmail = () => {
    let regex = /.+@[a-zA-Z]+\.com/g;
    let boolEmail = regex.test(inputField.value);

    if (!boolEmail) {
      // if not valid email create border and popup
      inputField.style.border = "1px solid hsl(354, 100%, 66%)";
      validPopup.style.display = "block";
    } else {
      // remove border and popup
      inputField.style.border = "1px solid hsl(223, 100%, 88%)";
      validPopup.style.display = "none";
    }
  };

  // Event Listeners
  button.addEventListener("click", checkEmail);
  inputField.addEventListener("keyup", () => {
    if (event.keyCode == 13) {
      checkEmail();
    }
  });
};
