import ActionTypes from "../actiontype"

const SET_QUERY = (val) => {
    return {
        type: ActionTypes.wheater.SET_QUERY,
        payload: val,
    }
}
const SET_WHEATHER = (val) => {
    return {
        type: ActionTypes.wheater.SET_WHEATHER,
        payload: val,
    }
}


const wheateractions = {SET_QUERY,SET_WHEATHER};
export default wheateractions;