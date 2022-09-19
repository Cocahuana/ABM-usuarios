import { GET_PERSONAS, GET_PEOPLE_DETAIL, GET_PEOPLE_BY_NAME, ORDER_BY_FIRST_NAME } from "../actions/actions";
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
        case ORDER_BY_FIRST_NAME:
            let sortedName = action.payload === 'ascendente' ?
                state.personasInfo.sort( function ( a, b ) {

                    if ( a.Nombre > b.Nombre )
                    {
                        return 1;
                    }
                    if ( b.Nombre > a.Nombre )
                    {
                        return -1;
                    }
                    return 0;
                } ) :
                state.personasInfo.sort( function ( a, b ) {
                    if ( a.Nombre > b.Nombre )
                    {
                        return -1;
                    }
                    if ( b.Nombre > a.Nombre )
                    {
                        return 1;
                    }
                    return 0;
                } );
            return {
                ...state,
                personasInfo: sortedName
            }
        default:
            return state;
    }
}

export default rootReducer;