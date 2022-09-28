import { GET_PERSONAS, DELETE_PERSONA, GET_PEOPLE_DETAIL, GET_PEOPLE_BY_NAME, ORDER_BY_FIRST_NAME, GET_JOBS_POSTING, GET_JOB_POSTING_DETAIL, GET_STUDIES, GET_COMPANIES } from './actions'
// import json from '../utils/personas.json';
import axios from 'axios';
const endpointPersonasFromApi = "http://yamana.somee.com/api/personas";
const endpointOrdenFromApi = "http://yamana.somee.com/api/Ordenes";
const yamana = "";
const estudios = yamana + "/Estudios";
const ordenes = yamana + "/Ordenes";
const personas = yamana + "/personas";
const empresas = yamana + "/Empresas";


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

const adapterOrdenesFromApiToJobPost = ( orden ) => {
    let newJobPosting = orden.map( ( orden ) => {
        return {
            idOrden: orden.idOrden,
            nombre: orden.nombre,
            cantPuestos: orden.cantPuestos,
            competencias: orden.competencias,
            duracion: orden.duracion,
            skill: orden.skill,
            empresaId: orden.empresaId,
            ciudad: orden.ciudad,
            accontManagerId: orden.accontManagerId,
            fInicioBusqueda: orden.fInicioBusqueda,
            contratacionTipo: orden.contratacionTipo,
            salario: orden.salario,
            preferenciaJob: orden.preferenciaJob,
            preferenciaCiudad: orden.preferenciaCiudad,
            preferenciaOrganismo: orden.preferenciaOrganismo,
            residencia: orden.residencia,
            preguntas: orden.preguntas,
            jobLevel: orden.jobLevel,
            jobTypeId: orden.jobTypeId,
            estudiosId: orden.estudiosId,
            archivoPath: orden.archivoPath,
            empresa: orden.empresa,
            ordenEstado: orden.ordenEstado,
            candidatos: orden.candidatos,
        }
    } );
    return newJobPosting
}

const adapterOrdenFromApiToJobPost = ( orden ) => {

    return {
        idOrden: orden.idOrden,
        nombre: orden.nombre,
        cantPuestos: orden.cantPuestos,
        ordenEstadoId: orden.ordenEstadoId,
        competencias: orden.competencias,
        duracion: orden.duracion,
        skill: orden.skill,
        empresaId: orden.empresaId,
        ciudad: orden.ciudad,
        accontManagerId: orden.accontManagerId,
        fInicioBusqueda: orden.fInicioBusqueda,
        contratacionTipo: orden.contratacionTipo,
        salario: orden.salario,
        preferenciaJob: orden.preferenciaJob,
        preferenciaCiudad: orden.preferenciaCiudad,
        preferenciaOrganismo: orden.preferenciaOrganismo,
        residencia: orden.residencia,
        preguntas: orden.preguntas,
        jobLevel: orden.jobLevel,
        jobTypeId: orden.jobTypeId,
        estudiosId: orden.estudiosId,
        archivoPath: orden.archivoPath,
        empresa: orden.empresa,
        ordenEstado: orden.ordenEstado,
        candidatos: orden.candidatos,
    }
}

const adapterEstudiosFromApiToStudies = ( estudios ) => {
    return estudios.map( ( e ) => {
        return {
            idEstudio: e.idEstudio,
            study: e.descripcion,
        }
    } )
}

const adapterCompaniesFromApi = ( companies ) => {
    // El adapter o interfaz separa la forma en la que se trabajan los datos desde el back hacia el front. 
    // De esta forma, si la forma en que los datos llegan desde el back cambian, 
    // no nos rompe toda la app ya que trabajamos los objetos con nombres de propiedades fijos
    let newCompanies = companies.map( ( companies ) => {
        return {
            empresaId: companies.empresaId,
            nombre: companies.nombre,
            telPrincipal: companies.telPrincipal,
            telSecundario: companies.telSecundario,
            telFax: companies.telFax,
            domCalle: companies.domCalle,
            domAltura: companies.domAltura,
            domLocalidad: companies.domLocalidad,
            domProvincia: companies.domProvincia,
            domPais: companies.domPais,
            domCp: companies.domCp,
            webSite: companies.webSite,
            keyTechnologies: companies.keyTecnologies,
            mensajeDestinos: companies.contactoId,
            mensajeOrigenes: companies.contacto,
            ordenes: companies.ordenes,
        }
    } )
    return newCompanies
}

export function getPersonas () {
    return async function ( dispatch ) {
        try
        {
            let peopleFromApi = await axios.get( "/personas" );
            console.log( "people from api:", peopleFromApi )
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
    return async function ( dispatch ) {
        try
        {
            let response = await axios.post( endpointPersonasFromApi, payload );
            console.log( "Person Created successfully" )

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

export function getJobsPosting () {
    return async function ( dispatch ) {
        try
        {
            let jobsPostingFromApi = await axios.get( endpointOrdenFromApi );
            let formattedJobsPosting = adapterOrdenesFromApiToJobPost( jobsPostingFromApi.data );
            // let personasInfo = json.Personas;
            return dispatch( {
                type: GET_JOBS_POSTING,
                payload: formattedJobsPosting
            } )
        }
        catch ( error )
        {
            console.log( error );
        }
    }
}

export function getJobPostingDetail ( id ) {
    return async function ( dispatch ) {
        try
        {
            let jobPostingDetailFromApi = await axios.get( endpointOrdenFromApi + `/${ id }` );
            let formattedJobPostingDetail = adapterOrdenFromApiToJobPost( jobPostingDetailFromApi.data );

            return dispatch( {
                type: GET_JOB_POSTING_DETAIL,
                payload: formattedJobPostingDetail
            } )
        }
        catch ( error )
        {
            console.log( error );
        }
    }
}

export function createJobPosting ( payload ) {
    return async function ( dispatch ) {
        try
        {
            let response = await axios.post( endpointOrdenFromApi, payload );
            if ( response )
                console.log( "Job Posting Created successfully" )
        }
        catch ( error )
        {
            console.log( error );
        }
    }
}

export function getStudies () {
    return async function ( dispatch ) {
        try
        {
            let studiesFromApi = await axios.get( "/Estudios" );
            let formattedStudies = adapterEstudiosFromApiToStudies( studiesFromApi.data );
            return dispatch( {
                type: GET_STUDIES,
                payload: formattedStudies
            } )
        }
        catch ( error )
        {
            console.log( error );
        }
    }
}

export function getCompanies () {
    return async function ( dispatch ) {
        try
        {
            let companiesFromApi = await axios.get( empresas );
            let formattedCompanies = adapterCompaniesFromApi( companiesFromApi.data );
            return dispatch( {
                type: GET_COMPANIES,
                payload: formattedCompanies
            } )
        }
        catch ( error )
        {
            console.log( error );
        }
    }
}

export function createCompany ( payload ) {
    return async function ( dispatch ) {
        try
        {
            let response = await axios.post( empresas, payload );
            console.log( "Company Created successfully" )
        }
        catch ( error )
        {
            console.log( error );
        }
    }
}
