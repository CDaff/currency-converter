import { useState, useEffect } from 'react'
import './App.css'
import CurrencyRow from './CurrencyRow.jsx'

const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function App() {
  const [count, setCount] = useState(0)

  const [currencyOptions, setCurrencyOptions] = useState([])
  // console.log(currencyOptions) --testing currency option array was correctly pulled

  useEffect(() =>{
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      })
  }, [])

  return (
    <>
      <h1>Currency Calculator: Convert</h1>
      <CurrencyRow
        currencyOptions={currencyOptions}
      />
      <div className="equals">=</div>
      <CurrencyRow
        currencyOptions={currencyOptions}
      />
    </>
  );
}

export default App
