/* Esta funcion lo que hace es ingresar un id y devuelve el valor correspondiente de ese id (el cual proviene de una tabla auxiliar) 
* para ser impreso en el codigo.
*
* id: es el valor numerico. Deberia ser una foreign Key proveniente de otra tabla
* array: es el valor donde se guardan los datos traidos de la tabla auxiliar
* value: es el "id" de la propia tabla auxiliar, el cual será igualado con el de la llave foranea
* label: es el "valor / label / descripcion / texto" que indica a que valor hace referencia esa tabla auxiliar. 
* Es el string que será impreso en la pantalla del usuario

******Ejemplo*****
    //-- Tabla Auxiliar --//
    [
        {
            "estadoId": 1,
            "descripcion": "Iniciada",
            "ordenes": []
        },
    ]
    //-- Tabla donde esta la llave foranea --//
    [
        {
            "idOrden": 2,
            "nombre": "QA tester",
            "ordenEstadoId" : 1,
        },
    ]

    let tablaAuxiliarData = arregloTablaAuxiliar;
    let tablaData = arregloTabla;

    problema que tenemos:

    tablaData.map((e) => {<h1>{e.idOrden}</h1>}) --> devuelve 1 y queremos que aparezca "Iniciada"

    lo transformamos a para la solución:

    tablaData.map((e) => {
        <h1>{getLabel(e.idOrden, tablaAuxiliarData, 'estadoId', 'descripcion')}</h1>
    });
    Aca las variables son:
    id: e.idOrden,
    array: tablaAuxiliarData,
    'prop del Id': 'estadoId',
    'prop del label': 'descripcion',

    // --- 
            Se unan comillas simples porque de esa forma, javascript sabe que son propiedades de un objeto y 
            que la estas pasando por parametro 
    --- //
*/


export const getLabel = ( id, array, value, label ) => {
    let result = "";
    for ( let i = 0; i < array.length; i++ )
    {
        if ( array[i][value] === id )
        {
            result = array[i][label];
            break;
        }
    }
    return result;
};