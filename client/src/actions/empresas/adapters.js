export const companiesFromApi = ( companies ) => {
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
        };
    } );
    return newCompanies;
};