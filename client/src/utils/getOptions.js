/*
*
* getOptions lo que hace es formatear el codigo proveniente de una 
* tabla intermedia para dejarlo con solo 2 valores: value y label.
* Esta formateado así para que pueda ser usado con la libreria React Select.
*
* let dataAMostrar = getOptions(companies, "empresaId", "nombre"). 
* El primer parametro es un arreglo de objetos, 
* El 2do y el tercero es el nombre del atributo de la tabla
* El 2do sirve para enviar, el 3ro es el que se muestra
*/

export function getOptions ( array, value, label ) {
    // Formateamos la opcion de acuerdo a la dependencia Select
    const newOption = ( propValue, propLabel ) => {
        let newObject = {
            value: propValue,
            label: propLabel,
        };
        return newObject;
    };
    //
    const storeOptions = ( array, propValue, propLabel ) => {
        const storedOptions = array.map( ( e ) => {
            return newOption( e[propValue], e[propLabel] );
        } );
        return storedOptions;
    };
    return storeOptions( array, value, label );
};


// let data = [
//     {
//         "empresaId": 1,
//         "nombre": "Microsoft",
//     },
//     {
//         "empresaId": 2,
//         "nombre": "Apple",
//     },
//     {
//         "empresaId": 3,
//         "nombre": "Eurocas",
//     }
// ];

// let formattedSelect = getOptions( data, 'empresaId', 'nombre' );
// console.log( formattedSelect );