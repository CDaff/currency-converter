import React from 'react'

export default function CurrencyRow(props) {
    const {
        CurrencyOptions,
        selectedCurrency
    } = props
    
    return (
        <div>
            <input type="numbers" className="input" />
            <select value={selectedCurrency}>
                {CurrencyOptions.map(option =>(
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}