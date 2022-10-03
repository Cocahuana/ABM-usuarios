export const peopleFromApi = ( people ) => {
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
        };
    } );
    return newPeople;
};
export const personFromApi = ( people ) => {
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
    };
    return newPeople;
};