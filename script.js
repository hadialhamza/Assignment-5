// Function for get input value

function getInputValue(inputId) {
  const inputAmount = document.getElementById(inputId).value;
  const inputAmountNumber = parseFloat(inputAmount);
  return inputAmountNumber;
}

// Function for get innerText value
function getInnerTextValue(inputId) {
  const inputAmount = document.getElementById(inputId).innerText;
  const inputAmountNumber = parseFloat(inputAmount);
  return inputAmountNumber;
}

// Button event handler
const submitButton1 = document.getElementById("donate-submit1");
submitButton1.addEventListener("click", function () {
  const donateAmount = getInputValue("donate-amount1");
  const donation1 = getInnerTextValue("donation1");
  const mainBalance = getInnerTextValue("main-balance");

  // Validation fot NaN
  if (isNaN(donateAmount)) {
    alert("Please enter a valid number for donate.");
    return;
  }

  //   Validation for Negative numbers
  if (donateAmount < 0) {
    alert("Please enter a positive number for donate.");
    return;
  }
  const totalDonation = donation1 + donateAmount;
  document.getElementById("donation1").innerText = totalDonation;

  const remainingBalance = mainBalance - donateAmount;
  document.getElementById("main-balance").innerText = remainingBalance;
});
