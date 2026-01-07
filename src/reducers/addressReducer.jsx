const initialState = {
  addresses: [],
  error: null
};
export default function addressReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ADDRESSES':
      return {
        ...state,
        addresses: action.payload, error: null 
      };
    case 'SET_ADDRESS_ERROR':
      return {...state,
        error: action.payload
        };
    default:
      return state;
  }
}