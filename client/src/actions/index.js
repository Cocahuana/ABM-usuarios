import { GET_PERSONAS, DELETE_PERSONA, GET_PEOPLE_DETAIL, GET_PEOPLE_BY_NAME, ORDER_BY_FIRST_NAME } from './actions'
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

export function deleteUserById ( id ) {
    return async function ( dispatch ) {
        try
        {
            console.log( id );
            // let usersInfo = await axios.delete( `http://localhost:3001/users/${ id }` );
            // return dispatch( {
            //     type: DELETE_USER_BY_ID,
            // } )
        }
        catch ( error )
        {
            console.log( error );
        }
    }
}

export function updatePeopleById ( payload ) {
    return async function () {
        try
        {
            console.log( "Updated People: ", payload )
            // await axios.put( `http://localhost:3001/users/${ payload.usuarioId }`, payload );
        }
        catch ( error )
        {
            console.log( error );
        }
    }
}

export function getPersonaDetail ( id ) {
    return async function ( dispatch ) {
        try
        {
            let foundPerson = json.Personas.find( ( e ) => e.Persona_Id == id );

            let newPersona = {
                personaId: foundPerson.Persona_Id,
                nombre: foundPerson.Nombre,
                apellido: foundPerson.Apellido,
                docTipo: foundPerson.DocTipo,
                docNro: foundPerson.DocNro,
                mail: foundPerson.mail,
                telMovil: foundPerson.TelMovil,
                telPersonal: foundPerson.TelPersonal,
                telLaboral: foundPerson.TelLaboral,
                linkedin: foundPerson.Linkedin,
                cv: foundPerson.CV,
                personaTipoId: foundPerson.PersonaTipo_Id,
                domCalle: foundPerson.DomCalle,
                domAltura: foundPerson.DomAltura,
                domLocalidad: foundPerson.DomLocalidad,
                domProvincia: foundPerson.DomProvincia,
                domPais: foundPerson.DomPais,
                domCp: foundPerson.DomCP,
            }

            return dispatch( {
                type: GET_PEOPLE_DETAIL,
                payload: newPersona
            } )
        }
        catch ( error )
        {
            console.log( error );
        }
    }
}
export function getPeopleByName ( name, personaTipoId ) {
    return async function ( dispatch ) {
        try
        {
            // var json = await axios.get( `/getRecipes?title=` + title );
            let filteredPeople = json.Personas.filter( ( e ) => e.PersonaTipo_Id == personaTipoId );
            let result = filteredPeople.filter( ( e ) => e.Nombre.toLowerCase() === name.toLowerCase() )
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