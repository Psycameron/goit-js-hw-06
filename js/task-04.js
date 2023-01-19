const counterValue = {
  value: 0,

  increment() {
    this.value += 1;
  },

  decrement() {
    this.value -= 1;
  },
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(`🚀 ~ decrementBtn`, decrementBtn);
const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(`🚀 ~ decrementBtn`, incrementBtn);
const valueEl = document.querySelector("#value");
console.log(`🚀 ~ counterValue`, counterValue);

decrementBtn.addEventListener("click", function () {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
});

incrementBtn.addEventListener("click", function () {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
});
