import React from 'react'

export default function CurrencyRow(props) {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        amount
    } = props
    
    return (
        <div>
            <input type="numbers" className="input" value={amount} />
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option =>(
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}