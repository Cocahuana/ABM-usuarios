import { GET_PERSONAS } from "../actions/actions";
const initialState = {
    personasInfo: [],
}


function rootReducer ( state = initialState, action ) {
    switch ( action.type )
    {
        case GET_PERSONAS:
            // console.log( action.payload );
            return {
                ...state,
                personasInfo: action.payload,
            }
        default:
            return state;
    }
}

export default rootReducer;