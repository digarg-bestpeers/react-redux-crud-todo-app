import {ADD_PLAN, GET_EDIT_PLAN, EDIT_PLAN, DELETE_PLAN} from "../constants/types"


const intialState = {
    data: [],
    oldData: null,
    planId: null
}

const planReducer = (state=intialState, action) => {
    switch(action.type){
        case ADD_PLAN:
            return {
                ...state,
                data: [...state.data, action.payload]
            }

        case GET_EDIT_PLAN:
            const olddata = state.data.filter( plan => state.data.indexOf(plan) === action.payload.index ? plan : null)
            const planid = action.payload.index
        
            return {
                ...state,
                oldData: olddata,
                planId: planid
            }

        case EDIT_PLAN:
            return{
                ...state,
                data: state.data.map( plan => state.data.indexOf(plan) === state.planId ? action.payload : plan)
                
            }

        case DELETE_PLAN:
            const data = state.data.filter( plan => state.data.indexOf(plan)!==action.payload.index)
            
            return {
                ...state,
                data: data
            }

        default: return state;
    }
}


export default planReducer;