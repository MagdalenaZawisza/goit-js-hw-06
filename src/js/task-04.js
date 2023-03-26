let counterValue = 0;

// pobieranie
const counter = document.getElementById("counter");
const value = document.getElementById("value");
const incrementButton = counter.querySelector('[data-action="increment"]');
const decrementButton = counter.querySelector('[data-action="decrement"]');

// dodaj click
incrementButton.addEventListener("click", () => {
  counterValue++;
  updateDisplay();
});

decrementButton.addEventListener("click", () => {
  counterValue--;
  updateDisplay();
});

function updateDisplay() {
  value.textContent = counterValue;
}
