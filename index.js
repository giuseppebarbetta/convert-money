const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select-target")
const currencySelectToConvert = document.querySelector(".select-to-convert")


function convertCurrency () {
    const currencyToConvert = document.querySelector(".value-to-convert")
    const inputCurrencyValue = document.querySelector(".input-currency-value").value
    const currencyTarget = document.querySelector(".value-target")

    const dolarToRealToday = 5.2
    const euroToRealToday = 5.80
    const libraToRealToday = 6.25

    const dolarToEuro = 0.93
    const dolarToLibra = 0.79

    const euroToLibra = 0.86

    if(inputCurrencyValue == "" || inputCurrencyValue <= 0) {
        alert("O valor precisa ser maior que ZERO para realizar uma conversão!")
    }

    if (currencySelectToConvert.value == "real" && currencySelect.value == "dolar") {
        currencyTarget.innerText = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue/dolarToRealToday)
        currencyToConvert.innerText = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "real" && currencySelect.value == "euro") {
        currencyTarget.innerText = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToRealTodday)
        currencyToConvert.innerText = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "real" && currencySelect.value == "libra") {
        currencyTarget.innerText = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue/libraToRealToday)
        currencyToConvert.innerText = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    ////////////////////////////////////////////////////

    if (currencySelectToConvert.value == "dolar" && currencySelect.value == "real") {
        currencyTarget.innerText = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue*dolarToRealToday)
        currencyToConvert.innerText = new Intl.NumberFormat("en-Us", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "dolar" && currencySelect.value == "euro") {
        currencyTarget.innerText = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue*dolarToEuro)
        currencyToConvert.innerText = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "dolar" && currencySelect.value == "libra") {
        currencyTarget.innerText = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue*dolarToLibra)
        currencyToConvert.innerText = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    /////////////////////////////////////////////////////////

    if (currencySelectToConvert.value == "euro" && currencySelect.value == "real") {
        currencyTarget.innerText = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue*euroToRealToday)
        currencyToConvert.innerText = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "euro" && currencySelect.value == "dolar") {
        currencyTarget.innerText = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue/dolarToEuro)
        currencyToConvert.innerText = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "euro" && currencySelect.value == "libra") {
        currencyTarget.innerText = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue*euroToLibra)
        currencyToConvert.innerText = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    ////////////////////////////////////////////////////////

    if (currencySelectToConvert.value == "libra" && currencySelect.value == "real") {
        currencyTarget.innerText = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue*libraToRealToday)
        currencyToConvert.innerText = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "libra" && currencySelect.value == "dolar") {
        currencyTarget.innerText = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue/dolarToLibra)
        currencyToConvert.innerText = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "libra" && currencySelect.value == "euro") {
        currencyTarget.innerText = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToLibra)
        currencyToConvert.innerText = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

}

function changeSelectTarget () {
    const nameCurrencyTarget = document.querySelector(".currency-target")
    const currencyImg = document.querySelector(".currency-img")
    const selectedOption = currencySelect.value

    for (let i = 0; i < currencySelectToConvert.options.length; i++) {
        if (currencySelectToConvert.options[i].value === selectedOption) {
          currencySelectToConvert.options[i].disabled = true;
        } else {
          currencySelectToConvert.options[i].disabled = false;
        }
    }

    if (currencySelect.value == "dolar") {
        nameCurrencyTarget.innerText = "Dólar Americano"
        currencyImg.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        nameCurrencyTarget.innerText = "EURO"
        currencyImg.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        nameCurrencyTarget.innerText = "Libra Esterlina"
        currencyImg.src = "./assets/libra.png"
    }

    if (currencySelect.value == "real") {
        nameCurrencyTarget.innerText = "Real Brasileiro"
        currencyImg.src = "./assets/real.png"
    }

    convertCurrency()
}

function changeSelectToConvert () {
    const currencyToConvert = document.querySelector(".value-to-convert")
    const inputCurrencyValue = document.querySelector(".input-currency-value").value
    const nameCurrencyToConvert = document.querySelector(".currency-to-convert")
    const currencyToConvertImg = document.querySelector(".currency-to-convet-img")
    const selectedOption = currencySelectToConvert.value

    for (let i = 0; i < currencySelect.options.length; i++) {
        if (currencySelect.options[i].value === selectedOption) {
          currencySelect.options[i].disabled = true;
        } else {
          currencySelect.options[i].disabled = false;
        }
    }

    if (currencySelectToConvert.value == "dolar") {
        nameCurrencyToConvert.innerText = "Dólar Americano"
        currencyToConvertImg.src = "./assets/dolar.png"
        currencyToConvert.innerText = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "euro") {
        nameCurrencyToConvert.innerText = "EURO"
        currencyToConvertImg.src = "./assets/euro.png"
        currencyToConvert.innerText = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "libra") {
        nameCurrencyToConvert.innerText = "Libra Esterlina"
        currencyToConvertImg.src = "./assets/libra.png"
        currencyToConvert.innerText = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "real") {
        nameCurrencyToConvert.innerText = "Real Brasileiro"
        currencyToConvertImg.src = "./assets/real.png"
        currencyToConvert.innerText = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
}

currencySelectToConvert.addEventListener("change", changeSelectToConvert)
currencySelect.addEventListener("change", changeSelectTarget)
convertButton.addEventListener("click", convertCurrency)