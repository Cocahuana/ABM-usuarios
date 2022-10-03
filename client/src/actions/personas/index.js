import axios from "axios";
import {
    GET_PEOPLE_DETAIL,
    GET_PEOPLE_BY_NAME,
    ORDER_BY_FIRST_NAME,
    GET_PERSONAS,
    DELETE_PERSONA,
} from "./types"

import * as adapter from "./adapters";
import * as endpoint from "../endpoints"


// import json from '../utils/personas.json';
// const personasJson = '../../utils/personas.json';

export function getPersonas () {
    return async function ( dispatch ) {
        try
        {
            let peopleFromApi = await axios.get( endpoint.personas );
            console.log( "people from api:", peopleFromApi );
            let formattedPeople = adapter.peopleFromApi( peopleFromApi.data );
            // let personasInfo = json.Personas;
            return dispatch( {
                type: GET_PERSONAS,
                payload: formattedPeople,
            } );
        } catch ( error )
        {
            console.log( error );
        }
    };
}

export function deleteUserById ( id ) {
    return async function ( dispatch ) {
        try
        {
            console.log( id );
            let deletePerson = await axios.delete(
                endpoint.personas + `/${ id }`
            );
            console.log( "Person eliminated successfully" );
            // let usersInfo = await axios.delete( `http://localhost:3001/users/${ id }` );
            // return dispatch( {
            //     type: DELETE_USER_BY_ID,
            // } )
        } catch ( error )
        {
            console.log( error );
        }
    };
}

export function createPerson ( payload ) {
    return async function ( dispatch ) {
        try
        {
            let response = await axios.post( endpoint.personas, payload );
            console.log( "Person Created successfully" );
        } catch ( error )
        {
            console.log( error );
        }
    };
}

export function updatePeopleById ( payload ) {
    return async function () {
        try
        {
            console.log( "Updated People: ", payload );
            // await axios.put( `http://localhost:3001/users/${ payload.usuarioId }`, payload );
            let personFromApi = await axios.put(
                endpoint.personas +
                `/${ payload.personaId }`,
                payload
            );
        } catch ( error )
        {
            console.log( error );
        }
    };
}

export function getPersonaDetail ( id ) {
    return async function ( dispatch ) {
        try
        {
            let personFromApi = await axios.get(
                endpoint.personas + `/${ id }`
            );
            let formattedPerson = adapter.personFromApi( personFromApi.data );

            //let foundPerson = json.Personas.find( ( e ) => e.Persona_Id == id );

            return dispatch( {
                type: GET_PEOPLE_DETAIL,
                payload: formattedPerson,
            } );
        } catch ( error )
        {
            console.log( error );
        }
    };
}
export function getPeopleByName ( name, personaTipoId ) {
    return async function ( dispatch ) {
        try
        {
            // var json = await axios.get( `/getRecipes?title=` + title );
            let peopleFromApi = await axios.get( endpoint.personas );
            let filteredPeople = peopleFromApi.data.filter(
                ( e ) => e.personaTipoId === personaTipoId
            );
            let result = filteredPeople.filter( ( e ) =>
                e.nombre.toLowerCase().includes( name.toLowerCase() )
            );

            return dispatch( {
                type: GET_PEOPLE_BY_NAME,
                //json.data devuelve lo que nos da la ruta de arriba, ya filtrado por nombre
                payload: result,
            } );
        } catch ( error )
        {
            console.log( error );
        }
    };
}

export function orderByFirstName ( payload ) {
    return {
        type: ORDER_BY_FIRST_NAME,
        payload,
    };
}