import React, { useState } from 'react';

const Convertor = () => {
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [exchangeRate, setExchangeRate] = useState(0);
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(1);

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleConvertClick = () => {
    fetch(' https://v6.exchangerate-api.com/v6/61faac170e7ce451209f511d/latest/USD')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        
        console.log(data.conversion_rates[toCurrency])
        if (data.result==='success') {
            console.log('hello')

          setExchangeRate(data.conversion_rates[toCurrency]);
          console.log(exchangeRate)
          setConvertedAmount(amount * exchangeRate);
        } else {
          console.log('No exchange rate found for the selected currencies.');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  

  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <label>From:</label>
        <input type="text" value={fromCurrency} onChange={handleFromCurrencyChange} />
      </div>
      <div>
        <label>To:</label>
        <input type="text" value={toCurrency} onChange={handleToCurrencyChange} />
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <button onClick={handleConvertClick}>Convert</button>
      <div>
        <label>Converted amount:</label>
        <span>{convertedAmount}</span>
      </div>
    </div>
  );
};

export default Convertor;