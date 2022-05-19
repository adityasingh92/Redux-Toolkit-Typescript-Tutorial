import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    value : number;
};

const initialState : CounterState = {
    value : 0
};

export const counterSlice = createSlice({
    name : 'Counter Slice',
    initialState : initialState,
    reducers : {
        increment : (state) => {
            state.value = state.value + 1;
        },
        decrement : (state) => {
            state.value = state.value - 1;
        },
        incrementByAmount : (state, action : PayloadAction<number>) => {
            state.value = state.value + action.payload;
        }
    }
});

export const incrementAsync = (amount : number) => (dispatch : Dispatch) => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount));
    }, 1000);
  };

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;