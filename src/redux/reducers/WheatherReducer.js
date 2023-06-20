import ActionTypes from "../actiontype";

const {SET_QUERY,SET_WHEATHER} = ActionTypes.wheater;

const initial = {
    query: "",
    weather: {},
}

const WheaterReducers = (state=initial,action) =>{
    switch (action.type) {
        case SET_QUERY:
          return {
           ...state,
           query: action.payload,
          };
          case SET_WHEATHER:
            console.log("weather : ",state.weather)
            return {
             ...state,
             weather: action.payload,
            };
        default:
          {
            return state;
          }
          
      }
}

export default WheaterReducers;