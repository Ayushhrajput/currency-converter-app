import { useId } from "react"

function Inputbox({
    label,
    amount, 
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false,
    className = ''
}) {
    const AmountInputId = useId()
    return (
        <div className={`w-md bg-gray-200 rounded-lg ${className}
        flex justify-between p-6 px-4 m-2`}>
            <div className="flex flex-col gap-2">
                <label className="bg-blue-400 px-2 w-min rounded" htmlFor={AmountInputId}>{label}</label>
                <input 
                    type="number" disabled={amountDisable} value={amount} id={AmountInputId} onChange={(e) => onAmountChange &&
                    onAmountChange(Number(e.target.value))} placeholder="Amount" 
                    className="bg-white w-25 rounded px-2 outline-none"/>
            </div>
            <div className="flex flex-col items-end gap-2">
                <h4 className=" rounded">Currency Type</h4>
                <select name="" id="" className="w-20 bg-white rounded px-2 outline-0"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOption.map((currency) => (
                        <option value={currency}
                        key={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Inputbox