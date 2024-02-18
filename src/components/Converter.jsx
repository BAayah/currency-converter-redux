import React from 'react';
import { handleReverse, setAmount, setFromCurrency, setToCurrency, submitResult } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.css';

const currencies = [
  { label: 'USD', value: 89.43, },
  { label: 'EUR', value: 96.29, },
  { label: 'RUB', value: 0.98, },
  { label: 'JPY', value: 0.560, },
  { label: 'THB', value: 2.50, },
  { label: 'GBP', value: 112.86, },
  { label: 'TRY', value: 2.91, },
  { label: 'KZT', value: 0.20, },
  { label: 'KGS', value: 0.01, },
];

export const Converter = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  return (
    <div className="border-2 border-orange-400 shadow-lg shadow-orange-400/50 py-10 mt-6 rounded-2xl">
      <h1 className="text-orange-300 text-2xl font-light shadow-lg shadow-orange-400/50">Currency Converter</h1>
      <label className="ml-2 text-orange-200">
        Amount to convert:
        <input
          className="mx-2.5 w-24 rounded-sm mt-2 bg-gradient-to-r from-purple-400 md:from-yellow-500 text-slate-950 px-1 font-bold"
          type="number"
          onChange={(e) => dispatch(setAmount(parseInt(e.target.value)))}
        />
      </label>
      <br />
      <br />
      <label className="text-orange-200">
        From: {" "}
        <select
          className=" bg-violet-600 rounded-sm w-20"
          onChange={(e) => dispatch(setFromCurrency(parseFloat(e.target.value)))}
        >
          {currencies.map((el, id) => (
            <option key={id} value={el.value}>
              {el.label}
            </option>
          ))}
        </select>
      </label>
      <br />
      <br />
      <button
        className="w-10 border-2 border-orange-300 text-orange-300  ml-10"
        onClick={() => dispatch(handleReverse())} type="button"> ⇅</button>
      <br />
      <br />
      <label className="text-orange-200 ml-6">
        To: {" "}
        <select
          className="bg-violet-600 w-20"
          onChange={(e) => dispatch(setToCurrency(parseFloat(e.target.value)))}
        >
          {currencies.map((el, id) => (
            <option key={id} value={el.value}>
              {el.label}
            </option>
          ))}
        </select>
      </label>
      <br />
      <br />
      <button
        className="text-orange-200 border-2 border-orange-400 w-32"
        onClick={() => dispatch(submitResult())}>Submit</button>        
      <p className="text-orange-200 mt-5">Result: {state.result}</p>
    </div>
  )
}


