import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function App() {

  const [amount,setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
console.log(currencyInfo[from]);
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
   }

   const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
   }

   return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-slate-800"
        // style={{
        //     backgroundImage: `url('https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg')`,
        // }}
       
    > 
        <h2 className='text-4xl text-white font-semibold'>Currency Converter</h2>
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>

        <div className="flex justify-center bg-slate-500 hover:text-white shadow-xl p-2 rounded-xl hover:shadow-blue-500/50 hover:scale-105 ease-in duration-300 cursor-pointer text-slate-950">
                    <p className="text-xl font-semibold">Made with <span className='hover:scale-150 ease-in duration-300 hover:mx-'>&#10084;</span> by Ayush</p>
                    
                </div>
    </div>
);
}

export default App
