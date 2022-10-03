import * as types from "./types"
import axios from "axios";
import * as endpoint from "../endpoints";
import * as adapter from "./adapters"

export function getStudies () {
    return async function ( dispatch ) {
        try
        {
            let studiesFromApi = await axios.get( endpoint.estudios );
            let formattedStudies = adapter.estudiosFromApi(
                studiesFromApi.data
            );
            return dispatch( {
                type: types.GET_STUDIES,
                payload: formattedStudies,
            } );
        } catch ( error )
        {
            console.log( error );
        }
    };
}
