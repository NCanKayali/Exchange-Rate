// function getExchange() {
//     return new Promise((resolve, reject) => {
//         fetch('http://api.exchangeratesapi.io/v1/latest?access_key=e64bd250736ef8ac68b043803450b667&format=1')
//             .then(response => response.json())
//             .then(result => resolve(result))
//             .catch(err => reject(err))
//     }
//     )
// }

// getExchange()
//     .then(response => console.log(response))
//     .catch(err => console.log(err))


const amountElement = document.querySelector(".number");
const firstSelect = document.querySelector("#first-currency");
const secondSelect = document.querySelector("#second-currency");
const currency = new Currency("USD","TRY")
const ui = new UI(firstSelect,secondSelect)

eventListeners();

function eventListeners(){
    amountElement.addEventListener("input",exchangeCurrency);
    firstSelect.onchange = function(){

        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent)
        ui.changeFirst()
    }
    secondSelect.onchange = function(){
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent)
        ui.changeSecond()
    }
}

function exchangeCurrency(){
    currency.changeAmount(Number(amountElement.value))
    currency.exchange()
                        .then(result => ui.displayResult(result))
                        .catch(err => console.log(err))
}


