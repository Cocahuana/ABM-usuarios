import usePersonaTipo from "./usePersonaTipo";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPersonas } from "../actions/personas";
import { useEffect } from "react";

// Este hook recibe un string que debe estar relacionado con los tipos de personas existentes en el endpoint PersonaTipos
// Lo que devuelve es un arreglo de objetos (que son todas las personas filtradas por el personaTipo que usted necesite)
// Ejemplo usePersona("admin"); devuelve todas las personas que son admin
function usePersona ( personaTipoString ) {
    const dispatch = useDispatch();
    const typeId = usePersonaTipo( personaTipoString );
    useEffect( () => {
        dispatch( getPersonas() );
    }, [dispatch] )
    let { personasInfo } = useSelector( ( state ) => state );

    const filterByPersonType = () => {
        const filteredPeople = personasInfo.filter( ( person ) => person.personaTipoId === typeId )
        return filteredPeople;
    }
    return filterByPersonType( personaTipoString );
}

export default usePersona