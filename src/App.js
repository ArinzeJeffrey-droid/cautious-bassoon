import React, { useReducer } from 'react';
import HomePage from './pages/home-page/HomePage';
import { reducer, INITIAL_STATE, StateContext} from "./store"

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    return (
      <StateContext.Provider value={{ state, dispatch }}>
          <HomePage/>
      </StateContext.Provider>
    );
}

export default App;