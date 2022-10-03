import {
    GET_ORDEN_BY_TITLE,
    ORDER_BY_FIRST_NAME,
    GET_ORDEN_ESTADOS,
    GET_JOB_POSTING_DETAIL,
    GET_JOBS_POSTING,
} from "../actions";
import axios from "axios";

const yamana = "http://yamana.somee.com/api";
const ordenes = yamana + "/Ordenes";
const endpointOrdenFromApi = "http://yamana.somee.com/api/Ordenes";
const ordenEstados = yamana + "/OrdenEstados";

const adapterOrdenesFromApiToJobPost = ( orden ) => {
    let newJobPosting = orden.map( ( orden ) => {
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
        };
    } );
    return newJobPosting;
};
export function getJobPostingByTitle ( title ) {
    return async function ( dispatch ) {
        try
        {
            const json = await axios.get( ordenes );
            const formattedOrdenes = adapterOrdenesFromApiToJobPost( json.data );
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
            let jobsPostingFromApi = await axios.get( endpointOrdenFromApi );
            let formattedJobsPosting = adapterOrdenesFromApiToJobPost(
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
        recruiter: orden.recruiter,
    };
};

const adapterOrdenEstadosFromApi = ( orden ) => {
    let newJobPostingState = orden.map( ( orden ) => {
        return {
            value: orden.estadoId,
            label: orden.descripcion,
        };
    } );
    return newJobPostingState;
};
export function getJobPostingStates () {
    return async function ( dispatch ) {
        try
        {
            let ordenEstadosFromApi = await axios.get( ordenEstados );
            let formattedOrdenEstados = adapterOrdenEstadosFromApi(
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
            let response = await axios.post( endpointOrdenFromApi, payload );
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
                endpointOrdenFromApi + `/${ id }`
            );
            let formattedJobPostingDetail = adapterOrdenFromApiToJobPost(
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
