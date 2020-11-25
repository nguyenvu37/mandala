import * as Types from "../constants/constants";

let initialState = false;

const loading = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOADING:
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default loading;
