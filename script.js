// const currencyFirstEl = document.getElementById("currency-first");

// const worthFirstEl = document.getElementById("worth-first");

// const currencySecondEl = document.getElementById("currency-second");

// const worthSecondEl = document.getElementById("worth-second");

// const getExchangeRate = document.getElementById("exchange-rate");

// function updateRate(){
//     fetch(`https://v6.exchangerate-api.com/v6/f37e550b8cce5c587d85148c/latest/${currencyFirstEl.value}`
//         ).then((res) => res.json()).then((data) => {
//         const rate = data.conversation_rates[currencySecondEl.value];
//         console.log(rate);
//         getExchangeRate.innerText = `1 ${currencyFirstEl.value} = ${rate + " " + currencySecondEl.value}`;
//         worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2)
// });
// }


// currencyFirstEl.addEventListener("change", updateRate);

// currencySecondEl.addEventListener("change", updateRate);

// worthFirstEl.addEventListener("input", updateRate);

const currencyFirstEl = document.getElementById("currency-first");

const worthFirstEl = document.getElementById("worth-first");

const currencySecondEl = document.getElementById("currency-second");

const worthSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");

updateRate()

function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/f37e550b8cce5c587d85148c/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEl.value];
      console.log(rate);
      exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${
        rate + " " + currencySecondEl.value
      }`;

      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2)
    });
}

currencyFirstEl.addEventListener("change", updateRate);

currencySecondEl.addEventListener("change", updateRate);

worthFirstEl.addEventListener("input", updateRate);