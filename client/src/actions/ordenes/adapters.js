export const OrdenesFromApi = ( orden ) => {
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
export const OrdenFromApi = ( orden ) => {
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

export const ordenEstadosFromApi = ( orden ) => {
    let newJobPostingState = orden.map( ( orden ) => {
        return {
            value: orden.estadoId,
            label: orden.descripcion,
        };
    } );
    return newJobPostingState;
};