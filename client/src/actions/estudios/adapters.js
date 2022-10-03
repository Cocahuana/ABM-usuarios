export const estudiosFromApi = ( estudios ) => {
    return estudios.map( ( e ) => {
        return {
            idEstudio: e.idEstudio,
            study: e.descripcion,
        };
    } );
};