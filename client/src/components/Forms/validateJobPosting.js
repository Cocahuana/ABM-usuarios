export function validateJobPosting ( jobPost ) {
    let {
        nombre,
    } = jobPost;
    let errors = {};

    const hasWhiteSpaces = /(?!^\s+$)^.*$/m;
    const isAlphabetical =
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    const hasFirstUpper =
        /^[A-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    const isEmail = /\S\@\S+\S+/; // Expresion Regular para validar Emails.
    const hasOnlyDigits = /^\d+$/;

    /* Nombre validations start */

    if ( !hasWhiteSpaces.test( nombre ) )
        errors.nombre = "First name can not include whitespaces :,(";
    if ( !hasFirstUpper.test( nombre ) )
        errors.nombre = "First letter should be Uppercase";
    if ( !isAlphabetical.test( nombre ) )
        errors.nombre = "First name can not include special characters";
    if ( nombre.length >= 45 )
        errors.nombre = "First name can not be longer to 45 characters";

    return errors;
}