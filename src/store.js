import { createContext } from "react"
import * as action from "./actions/action.types"

export const INITIAL_STATE = {
    templates: {
        loading: false,
        data: [],
        num_of_results: 0
    }
}

export const reducer = (state, { type, payload}) => {
    switch (type) {
        case action.SET_LOADER:
            return {
                ...state,
                templates: {
                    ...state.templates,
                    loading: true
                }
            }
        case action.STOP_LOADER:
            return {
                ...state,
                templates: {
                    ...state.templates,
                    loading: false
                }
            }
        case action.GET_ALL_TEMPLATES:
            return {
                ...state,
                templates: {
                    ...state.templates,
                    data: payload,
                    num_of_results: payload.length
                }
            }
        default:
            return state
    }
}



export const StateContext = createContext(INITIAL_STATE)