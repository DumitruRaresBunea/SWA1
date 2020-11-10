import * as actionTypes from "./action-types";

const initialState = {
  place: "None",
  startDate: null,
  endDate: null,
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PLACE:
      return {
        ...state,
        place: action.place,
      };

    case actionTypes.CHANGE_START_DATE:
      return {
        ...state,
        startDate: action.startDate,
      };
    case actionTypes.CHANGE_END_DATE:
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};
export default filter;
