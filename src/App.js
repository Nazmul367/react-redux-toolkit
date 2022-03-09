import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store'

const App = () => {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(actions.INC())
  }

  const decrement = () => {
    dispatch(actions.DEC())
  }

  const addBY = () => {
    dispatch(actions.ADD(200))
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
