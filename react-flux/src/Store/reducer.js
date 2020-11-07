import { Switch } from "react-router-dom";
import * as actionTypes from "./actionTypes";

const initialState = {
    weatherData: [],
    loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA_START:
      return {
        ...state,
        loading: true, 
      };
    case actionTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        weatherData: action.weatherData,
        loading:false
      };
      case actionTypes.GET_DATA_FAIL:
          return{
              ...state,
              loading:false
          }
    default:
      return state;
  }
};

export default reducer;
