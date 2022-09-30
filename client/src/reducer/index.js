import { GET_PERSONAS, GET_PEOPLE_DETAIL, GET_PEOPLE_BY_NAME, ORDER_BY_FIRST_NAME, GET_JOBS_POSTING, GET_JOB_POSTING_DETAIL, GET_STUDIES, GET_COMPANIES, GET_ORDEN_ESTADOS } from "../actions/actions";
const initialState = {
    personasInfo: [],
    personaDetalle: [],
    jobsPosting: [],
    jobPostingDetail: [],
    studies: [],
    companies: [],
    jobPostingStates: [],
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
        case GET_JOBS_POSTING:
            return {
                ...state,
                jobsPosting: action.payload,
            }
        case GET_JOB_POSTING_DETAIL:
            // console.log( action.payload );
            return {
                ...state,
                jobPostingDetail: action.payload,
            }
        case GET_STUDIES:
            return {
                ...state,
                studies: action.payload,
            }
        case GET_COMPANIES:
            // console.log( action.payload );
            return {
                ...state,
                companies: action.payload,
            }
        case GET_ORDEN_ESTADOS:
            return {
                ...state,
                jobPostingStates: action.payload,
            }
        default:
            return state;
    }
}

export default rootReducer;