import {
    GET_ORDEN_BY_TITLE,
    ORDER_BY_FIRST_NAME,
    GET_ORDEN_ESTADOS,
    GET_JOB_POSTING_DETAIL,
    GET_JOBS_POSTING,
} from "./types";
import axios from "axios";
import * as endpoints from "../endpoints"
import * as adapter from "./adapters"

export function getJobPostingByTitle ( title ) {
    return async function ( dispatch ) {
        try
        {
            const json = await axios.get( endpoints.ordenes );
            const formattedOrdenes = adapter.OrdenesFromApi( json.data );
            const result = formattedOrdenes.filter( ( orden ) => orden.nombre.toLowerCase().includes( title.toLowerCase() ) );
            console.log( "search by title: ", result )
            return dispatch( {
                type: GET_ORDEN_BY_TITLE,
                //json.data devuelve lo que nos da la ruta de arriba, ya filtrado por nombre
                payload: result,
            } );
        } catch ( error )
        {
            console.log( error );
        }
    };
}
export function getJobsPosting () {
    return async function ( dispatch ) {
        try
        {
            let jobsPostingFromApi = await axios.get( endpoints.ordenes );
            let formattedJobsPosting = adapter.OrdenesFromApi(
                jobsPostingFromApi.data
            );
            // let personasInfo = json.Personas;
            return dispatch( {
                type: GET_JOBS_POSTING,
                payload: formattedJobsPosting,
            } );
        } catch ( error )
        {
            console.log( error );
        }
    };
}


export function getJobPostingStates () {
    return async function ( dispatch ) {
        try
        {
            let ordenEstadosFromApi = await axios.get( endpoints.ordenEstados );
            let formattedOrdenEstados = adapter.ordenEstadosFromApi(
                ordenEstadosFromApi.data
            );
            return dispatch( {
                type: GET_ORDEN_ESTADOS,
                payload: formattedOrdenEstados,
            } );
        } catch ( error )
        {
            console.log( error );
        }
    };
}



export function createJobPosting ( payload ) {
    return async function ( dispatch ) {
        try
        {
            let response = await axios.post( endpoints.ordenes, payload );
            if ( response ) console.log( "Job Posting Created successfully" );
        } catch ( error )
        {
            console.log( error );
        }
    };
}

export function getJobPostingDetail ( id ) {
    return async function ( dispatch ) {
        try
        {
            let jobPostingDetailFromApi = await axios.get(
                endpoints.ordenes + `/${ id }`
            );
            let formattedJobPostingDetail = adapter.OrdenFromApi(
                jobPostingDetailFromApi.data
            );

            return dispatch( {
                type: GET_JOB_POSTING_DETAIL,
                payload: formattedJobPostingDetail,
            } );
        } catch ( error )
        {
            console.log( error );
        }
    };
}
