import { GET_PERSONAS } from './actions'
import json from '../utils/personas.json';
import axios from 'axios';
// const endpoint = "http://yamana.somee.com/api/usuarios";
// const personasJson = '../../utils/personas.json';



export function getPersonas () {
    return async function ( dispatch ) {
        try
        {
            // let personasInfo = await axios.get( json );
            let personasInfo = json.Personas;
            // console.log( personasInfo );
            return dispatch( {
                type: GET_PERSONAS,
                payload: personasInfo
            } )
        }
        catch ( error )
        {
            console.log( error );
        }
    }
}