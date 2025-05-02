let fitnessTotal = 0;
let waterTotal = 0;

const fitnessInput = document.getElementById("fitnessInput");
const waterInput = document.getElementById("waterInput");
const fitnessTotalDisplay = document.getElementById("fitnessTotal");
const waterTotalDisplay = document.getElementById("waterTotal");

document.getElementById("addFitnessBtn").addEventListener("click", () => {
  const fitnessValue = parseInt(fitnessInput.value);
  if (fitnessValue && fitnessValue > 0) {
    fitnessTotal += fitnessValue;
    fitnessTotalDisplay.textContent = fitnessTotal;
    fitnessInput.value = "";
  } else {
    alert("Please enter a valid number for fitness activity.");
  }
});

document.getElementById("addWaterBtn").addEventListener("click", () => {
  const waterValue = parseInt(waterInput.value);
  if (waterValue && waterValue > 0) {
    waterTotal += waterValue;
    waterTotalDisplay.textContent = waterTotal;
    waterInput.value = "";
  } else {
    alert("Please enter a valid number for water intake.");
  }
});
