// En este hook ingresamos un personaTipo en forma de string y nos devuelve su valor numerico correspondiente.
// Por ejemplo si quiero el valor numerico del recruiter, ingreso usePersonaTipo("recruiter"). Ese id me va a servir para filtrar por tipo de persona
// Acepta valores string tanto en mayuscula como en minuscula
function usePersonaTipo ( personaTipoString ) {
    const selectPersonaTipo = ( string ) => {
        let tipoId;
        switch ( string.toLowerCase() )
        {
            case "admin":
                tipoId = 0;
                break;
            case "candidato":
                tipoId = 1;
                break;
            case "cliente":
                tipoId = 2;
                break;
            case "recruiter":
                tipoId = 3;
                break;
            default: tipoId = "Not valid tipoId or not exist that number";
        }
        return tipoId;
    }
    return selectPersonaTipo( personaTipoString );
}

export default usePersonaTipo