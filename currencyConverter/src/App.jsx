import { useState } from 'react'

import Inputbox from './InputBox.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'

function App() {
  
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState('')

  const currencyInfo = useCurrencyInfo(from)
  const currencyOptions = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convertCurrency = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <h1 className='px-4 text-white text-4xl italic'>Get Exchange Rate</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        convertCurrency()
      }}>
        <div className="w-min mx-auto center p-4 m-4 bg-white
      rounded-lg flex flex-col items-center justify-center
      ">
        <div className="">
          <Inputbox label='From' className=''
          amount={amount}
          currencyOption={currencyOptions}
          onCurrencyChange={(currency) => setFrom(currency)}
          onAmountChange={(value) => setAmount(value)}
          selectCurrency={from}
          />
        </div>
        <div className="relative">
          <button type='button' onClick={swap} className='bg-purple-400 px-4 rounded absolute -translate-y-1/2 -translate-x-1/2 p-4'>swap</button>
        </div>
        <div className="">
          <Inputbox label='To' className=''
          amount={convertedAmount}
          currencyOption={currencyOptions}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          amountDisable
          />
        </div>
        <button className='bg-green-400 w-max rounded-md p-2 text-white text-xl'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        
      </div>
      </form>
      
    </>
  )
}

export default App
