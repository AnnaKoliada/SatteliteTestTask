const UPDATE_IS_FETCHING = 'UPDATE_IS_FETCHING';


const initialState = {
  isFetching: false,
  
};

const commonReducer = (
  state = initialState,
  action: { type: string; isFetching: boolean; },
) => {
  switch (action?.type) {
    case UPDATE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    
    default:
      return state;
  }
};

export const updateIsFetching = (isFetching: boolean): { type: string; isFetching: boolean } => ({
  type: UPDATE_IS_FETCHING,
  isFetching,
});

export default commonReducer;