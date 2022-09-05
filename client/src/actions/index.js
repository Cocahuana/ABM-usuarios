import { GET_PERSONAS } from './actions'
// import personas from '../utils/personas.json';
import axios from 'axios';
// const endpoint = "http://yamana.somee.com/api/usuarios";
// const personasJson = '../../utils/personas.json';

const json = {
    "Personas": [
        {
            "Persona_Id": 1,
            "Nombre": "Ezequiel Ariel",
            "Apellido": "Dominguez",
            "DocTipo": 43,
            "DocNro": "720646",
            "mail": "lessthan20@mail.com",
            "TelMovil": "481-1295",
            "TelPersonal": "223 606-5929",
            "TelLaboral": "223 606-5929",
            "Linkedin": "https://www.linkedin.com/in/ezequiel-dominguez-dev/",
            "CV": "https://www.efset.org/cert/SwVBBa",
            "PersonaTipo_Id": "1",
            "DomCalle": "Arana y Goiri",
            "DomAltura": 6956,
            "DomLocalidad": "Mar del Plata",
            "DomProvincia": "Buenos Aires",
            "DomPais": "Argentina",
            "DomCP": "7600"
        },
        {
            "Persona_Id": 2,
            "Nombre": "Nombre1 Nombre2",
            "Apellido": "Apellido1",
            "DocTipo": 80,
            "DocNro": "651125",
            "mail": "soyMail@mail.com",
            "TelMovil": "888-8888",
            "TelPersonal": "11 9 888-8888",
            "TelLaboral": "11 9 777-7777",
            "Linkedin": "https://www.linkedin.com/in/Nombre1/",
            "CV": "https://www.cvPagina.org/cv/Nombre1",
            "PersonaTipo_Id": "2",
            "DomCalle": "Domicilio1",
            "DomAltura": 8888,
            "DomLocalidad": "CABA",
            "DomProvincia": "Buenos Aires",
            "DomPais": "Argentina",
            "DomCP": "1626"
        }
    ]
}


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