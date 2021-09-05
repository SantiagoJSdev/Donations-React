

import { types } from '../type/types';

const initialState = {
    data:[],
    loading: false,
    
}

export const notaReducer = (state = initialState, action) => {
    
   switch (action.type) {

    case types.user:
        return {
            ...state,
           data: action.payload,
           loading: true
           
          
        }
    case types.suma:
        return {
            ...state,
            total: state.total + action.payload
            }
    case types.menor:
        return {
            ...state,
            data: action.payload
                }
    case types.mayor:
        return {
            ...state,
            data: action.payload
                }

    case types.total:
        return {
            ...state,
            total: action.payload

        }


     
       default:
           return state;
   }
}
