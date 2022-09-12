import { GET_PERSONAS, GET_PEOPLE_DETAIL } from "../actions/actions";
const initialState = {
    personasInfo: [],
    personaDetalle: [],
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
        case GET_PEOPLE_DETAIL:
            // console.log( action.payload );
            return {
                ...state,
                personaDetalle: action.payload,
            }
        default:
            return state;
    }
}

export default rootReducer;