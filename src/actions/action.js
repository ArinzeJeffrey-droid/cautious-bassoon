import axios from "axios"
import process from "../env"
import { GET_ALL_TEMPLATES, SET_LOADER, STOP_LOADER } from "./action.types"

const service_url = process.env.SERVICE_URL

export const fetchTemplates = async (dispatch) => {
    try {
        dispatch({
            type: SET_LOADER
        })
        const templates = await axios.get(`${service_url}/task_templates`)
        dispatch({
            type: GET_ALL_TEMPLATES,
            payload: templates.data
        })
        dispatch({
            type: STOP_LOADER
        })
    } catch (error) {
        console.log(error, "error");
        dispatch({
            type: STOP_LOADER
        })
    }
}