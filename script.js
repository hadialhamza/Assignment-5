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

const date = new Date();

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
  if (donateAmount < 0 || donateAmount > mainBalance) {
    alert("Please enter a positive number for donate.");
    return;
  }

  //   Calculation
  const totalDonation = donation1 + donateAmount;
  document.getElementById("donation1").innerText = totalDonation;

  const remainingBalance = mainBalance - donateAmount;
  document.getElementById("main-balance").innerText = remainingBalance;

  //   Transaction history
  const div = document.createElement("div");
  div.classList.add("border", "border-[#c9c9c9]", "p-5", "rounded-2xl", "mb-3");
  div.innerHTML = `<h2 class="text-xl font-bold">
            ${donateAmount} Taka is Donated for famine-2025 at Feni, Bangladesh
          </h2>
          <p class="text-base text-[#737373] font-light">
            ${date}
          </p>`;
  document.getElementById("history-section").appendChild(div);
});

// History button event handler

const historyButton = document.getElementById("history-btn");
historyButton.addEventListener("click", function () {
  document.getElementById("main-section").classList.add("hidden");
  document.getElementById("donate-btn").classList.remove("bg-[#B4F461]");
  document.getElementById("history-btn").classList.add("bg-[#B4F461]");
  document.getElementById("history-section").classList.remove("hidden");
});

// DOnation button event handler

const donationButton = document.getElementById("donate-btn");
donationButton.addEventListener("click", function () {
  document.getElementById("main-section").classList.remove("hidden");
  document.getElementById("donate-btn").classList.add("bg-[#B4F461]");
  document.getElementById("history-btn").classList.remove("bg-[#B4F461]");
  document.getElementById("history-section").classList.add("hidden");
});
