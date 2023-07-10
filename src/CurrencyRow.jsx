import React from 'react'

export default function CurrencyRow(props) {
    const {
        CurrencyOptions
    } = props
    
    return (
        <div>
            <input type="numbers" className="input" />
            <select>
                {CurrencyOptions.map(optoin =>(
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}