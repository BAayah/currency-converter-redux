import { HANDLE_REVERSE, SET_AMOUNT, SET_FROM_CURRENCY, SET_TO_CURRENCY, SUBMIT_RESULT } from "../actions";

const initialState = {
    fromCurrency: 0,
    toCurrency: 0,
    amount: 1,
    result: 0,
};

export const currencyConverterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FROM_CURRENCY:
            return { ...state, fromCurrency: action.payload };
        case SET_TO_CURRENCY:
            return { ...state, toCurrency: action.payload };
        case SET_AMOUNT:
            return { ...state, amount: action.payload };
        case HANDLE_REVERSE:
            return { ...state, fromCurrency: state.toCurrency, toCurrency: state.fromCurrency };
        case SUBMIT_RESULT:
            return {
                ...state,  result: (state.fromCurrency > state.toCurrency
                    ? state.amount * state.toCurrency
                    : state.amount / state.toCurrency).toFixed(3)
            };
        default:
            return state;
    }
};