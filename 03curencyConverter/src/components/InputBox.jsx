
const InputBox=({
            label,
            amount,
            onAmountChange,
            onCurrencyChange,
            currencyOptions = [],
            selectCurrency = "usd",
            })=>{
    return (
        <div className="w-full bg-gray-500 ">
            <div className="flex justify-between">
                <span className="px-6">{label}</span>
                <span className="px-6">Currency Type</span>
            </div>
            <div className="flex justify-between">
                <input type="number" value={amount} className="px-6 outline-none" 
                onChange={(e)=>onAmountChange(e.target.value)}/>
                <select  className="px-6 outline-none" value={selectCurrency}
                    onChange={e=>onCurrencyChange(e.target.value)}>
                {
                    currencyOptions.map((curr)=>(
                    <option key={curr}value={curr}>{curr}</option>
                    ))
                }
                </select>
            </div>

        </div>
    )
};

export default InputBox;