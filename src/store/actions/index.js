export const SET_FROM_CURRENCY = 'SET_FROM_CURRENCY';
export const SET_TO_CURRENCY = 'SET_TO_CURRENCY';
export const SET_AMOUNT = 'SET_AMOUNT';
export const SUBMIT_RESULT = 'SUBMIT_RESULT';
export const HANDLE_REVERSE = 'HANDLE-REVERSE';

export const setFromCurrency = (currency) => ({
    type: SET_FROM_CURRENCY,
    payload: currency,
});

export const setToCurrency = (currency) => ({
    type: SET_TO_CURRENCY,
    payload: currency,
});

export const setAmount = (amount) => ({
    type: SET_AMOUNT,
    payload: amount,
});

export const submitResult = () => ({
    type: SUBMIT_RESULT,    
    // payload: result,
});

export const handleReverse = () => ({
    type: HANDLE_REVERSE,
})