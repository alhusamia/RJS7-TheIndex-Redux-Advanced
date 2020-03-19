import { SET_AUTHORS } from "../actions/actionTypes"

const initialState = {
    authors :[],
    loading: true
}

export default (state = initialState, action) =>{
    switch(action.type){
        case SET_AUTHORS:
            
            return{
                ...state,
                authors:action.payload,
                loading:false
            }
        default:
            return state;    
    }
}
    
 