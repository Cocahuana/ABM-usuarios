import axios from "axios";
import { GET_COMPANIES } from "./types";
import * as endpoint from "../endpoints";
import * as adapter from "./adapters";
export function getCompanies () {
    return async function ( dispatch ) {
        try
        {
            let companiesFromApi = await axios.get( endpoint.empresas );
            let formattedCompanies = adapter.companiesFromApi(
                companiesFromApi.data
            );
            return dispatch( {
                type: GET_COMPANIES,
                payload: formattedCompanies,
            } );
        } catch ( error )
        {
            console.log( error );
        }
    };
}

export function createCompany ( payload ) {
    return async function ( dispatch ) {
        try
        {
            let response = await axios.post( endpoint.empresas, payload );
            console.log( "Company Created successfully" );
        } catch ( error )
        {
            console.log( error );
        }
    };
}