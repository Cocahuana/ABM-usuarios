import { GET_PERSONAS, GET_PEOPLE_DETAIL, GET_PEOPLE_BY_NAME } from "../actions/actions";
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
        case GET_PEOPLE_BY_NAME:
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