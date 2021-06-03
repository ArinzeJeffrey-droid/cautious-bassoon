import React, { useContext } from 'react'
import { retryRequest } from '../actions/action';
import { StateContext } from '../store';



const FallbackError = () => {
    const { dispatch } = useContext(StateContext)
    return (
    <div className="error-container">
        <div className="error-inner">
            <h1>Something went wrong</h1>
            <button 
                className="btn-retry"
                onClick={() => retryRequest(dispatch)}
            >Try again</button>
        </div>
    </div>
    );
}

export default FallbackError;