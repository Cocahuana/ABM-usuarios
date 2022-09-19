import { GET_PERSONAS, DELETE_PERSONA, GET_PEOPLE_DETAIL, GET_PEOPLE_BY_NAME, ORDER_BY_FIRST_NAME } from './actions'
import json from '../utils/personas.json';
import axios from 'axios';
const endpointPersonasFromApi = "http://yamana.somee.com/api/personas";
// const personasJson = '../../utils/personas.json';

const adapterPeopleFromApi = ( people ) => {
    // El adapter o interfaz separa la forma en la que se trabajan los datos desde el back hacia el front. 
    // De esta forma, si la forma en que los datos llegan desde el back cambian, 
    // no nos rompe toda la app ya que trabajamos los objetos con nombres de propiedades fijos
    let newPeople = people.map( ( people ) => {
        return {
            personaId: people.personaId,
            nombre: people.nombre,
            apellido: people.apellido,
            docTipo: people.docTipo,
            docNro: people.docNro,
            mail: people.mail,
            telMovil: people.telMovil,
            telPersonal: people.telPersonal,
            telLaboral: people.telLaboral,
            linkedin: people.linkedin,
            cv: people.cv,
            personaTipoId: people.personaTipoId,
            domCalle: people.domCalle,
            domAltura: people.domAltura,
            domLocalidad: people.domLocalidad,
            domProvincia: people.domProvincia,
            domPais: people.domPais,
            domCp: people.domCp,
            candidatos: people.candidatos,
            empresas: people.empresas,
            mensajeDestinos: people.mensajeDestinos,
            mensajeOrigenes: people.mensajeOrigens,
        }
    } )
    return newPeople
}
const adapterPersonFromApi = ( people ) => {
    let newPeople = {
        personaId: people.personaId,
        nombre: people.nombre,
        apellido: people.apellido,
        docTipo: people.docTipo,
        docNro: people.docNro,
        mail: people.mail,
        telMovil: people.telMovil,
        telPersonal: people.telPersonal,
        telLaboral: people.telLaboral,
        linkedin: people.linkedin,
        cv: people.cv,
        personaTipoId: people.personaTipoId,
        domCalle: people.domCalle,
        domAltura: people.domAltura,
        domLocalidad: people.domLocalidad,
        domProvincia: people.domProvincia,
        domPais: people.domPais,
        domCp: people.domCp,
        candidatos: people.candidatos,
        empresas: people.empresas,
        mensajeDestinos: people.mensajeDestinos,
        mensajeOrigenes: people.mensajeOrigens,
    }
    return newPeople
}

export function getPersonas () {
    return async function ( dispatch ) {
        try
        {
            let peopleFromApi = await axios.get( endpointPersonasFromApi );
            let formattedPeople = adapterPeopleFromApi( peopleFromApi.data );
            // let personasInfo = json.Personas;
            return dispatch( {
                type: GET_PERSONAS,
                payload: formattedPeople
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
            let deletePerson = await axios.delete( endpointPersonasFromApi + `/${ id }` );
            console.log( "Person eliminated successfully" )
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

export function createPerson ( payload ) {
    return function () {
        try
        {
            axios.post( endpointPersonasFromApi, payload );
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
            let personFromApi = await axios.put( "http://yamana.somee.com/api/personas" + `/${ payload.personaId }`, payload );

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
            let personFromApi = await axios.get( endpointPersonasFromApi + `/${ id }` );
            let formattedPerson = adapterPersonFromApi( personFromApi.data );

            //let foundPerson = json.Personas.find( ( e ) => e.Persona_Id == id );

            return dispatch( {
                type: GET_PEOPLE_DETAIL,
                payload: formattedPerson
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
            let peopleFromApi = await axios.get( endpointPersonasFromApi );
            let filteredPeople = peopleFromApi.data.filter( ( e ) => e.personaTipoId === personaTipoId );
            let result = filteredPeople.filter( ( e ) => e.nombre.toLowerCase().includes( name.toLowerCase() ) );

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