import './App.css';

import { useSelector, useDispatch } from 'react-redux';

const App = () => {

    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const increment = () => {
        dispatch({ type: 'INC' })
    }

    const decrement = () => {
        dispatch({ type: 'DEC' })
    }

    const addBY = () => {
        dispatch({ type: 'ADD', payload: 20 })
    }

    return (
        <div className="App">
            <h1>{counter}</h1>
            <button type='button' onClick={increment}>Increment</button>
            <button type='button' onClick={decrement}>Decrement</button>
            <button type='button' onClick={addBY}>Add By</button>
        </div>
    );
}

export default App;
