import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 100 },
    reducers: {
        INC(state, action) {
            state.counter++
        },
        DEC(state, action) {
            state.counter--
        },
        ADD(state, action) {
            state.counter += action.payload
        }
    }
})

export const actions = counterSlice.actions

const store = configureStore({
    reducer: counterSlice.reducer
})

export default store


// import { createStore } from "redux";

// const reducerFn = (state = { counter: 10 }, action) => {

//     switch (action.type) {
//         case 'INC':
//             return { counter: state.counter + 1 }

//         case 'DEC':
//             return { counter: state.counter - 1 }

//         case 'ADD':
//             return {counter: state.counter + action.payload}

//         default:
//             return state
//     }
// }

// const store = createStore(reducerFn)

// export default store
