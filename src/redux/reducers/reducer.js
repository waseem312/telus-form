import { ADD_FORM_DATA } from '../actions/action';
const initialState = {
  formDataList: [],
};

const rootReducer = (state = initialState, action) => {
    

  switch (action.type) {
    
    case ADD_FORM_DATA:
      return {
        ...state,
        formDataList: [...state.formDataList, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
