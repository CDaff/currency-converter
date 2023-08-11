import { useState, useEffect } from 'react'
import './App.css'
import CurrencyRow from './CurrencyRow.jsx'

const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function App() {
  const [count, setCount] = useState(0)

  const [currencyOptions, setCurrencyOptions] = useState([])
  // console.log(currencyOptions) --testing currency option array was correctly pulled
  const [fromCurrency, setFromCurrency] = useState([]);
  const [toCurrency, setToCurrency] = useState([]);

  useEffect(() =>{
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
      })
  }, [])

  return (
    <>
      <h1>Currency Calculator: Convert</h1>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectCurrency={fromCurrency}
      />
      <div className="equals">=</div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectCurrency={toCurrency}
      />
    </>
  );
}

export default App
