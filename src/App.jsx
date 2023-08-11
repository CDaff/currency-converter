import { useState, useEffect } from 'react'
import './App.css'
import CurrencyRow from './CurrencyRow.jsx'

const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function App() {
  const [count, setCount] = useState(0)

  const [currencyOptions, setCurrencyOptions] = useState([])
  // console.log(currencyOptions) --testing currency option array was correctly pulled
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState(); // gets the exchange rate and sets the value
  const [amount, setAmount] = useState(1); // can be either currency
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true) // keep track of fromCurrency row being changed with a bool

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    //true (From Currency was changed)
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() =>{
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
      })
  }, [])

  return (
    <>
      <h1>Currency Calculator: Convert</h1>
      <CurrencyRow
        currencyOptions = {currencyOptions}
        selectedCurrency = {fromCurrency}
        onChangeCurrency = {e => setFromCurrency(e.target.value)}
        amount = {fromAmount}
      />
      <div className="equals">=</div>
      <CurrencyRow
        currencyOptions = {currencyOptions}
        selectedCurrency = {toCurrency}
        onChangeCurrency = {e => setToCurrency(e.target.value)}
        amount = {fromAmount}
      />
    </>
  );
}

export default App
