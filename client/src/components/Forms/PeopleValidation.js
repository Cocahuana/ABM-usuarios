export function validate ( persona ) {
    let {
        nombre,
        apellido,
        docTipo,
        docNro,
        mail,
        telMovil,
        telPersonal,
        telLaboral,
        linkedin,
        cv,
        personaTipoId,
        domCalle,
        domAltura,
        domLocalidad,
        domProvincia,
        domPais,
        domCp,
    } = persona;
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

    /* apellido validations start */

    if ( !hasWhiteSpaces.test( apellido ) )
        errors.apellido = "Last name can not include whitespaces :/";
    if ( !hasFirstUpper.test( apellido ) )
        errors.apellido = "Last letter should be Uppercase";
    if ( !isAlphabetical.test( apellido ) )
        errors.apellido =
            "Last name can not include special characters or being lower than 1 character";
    if ( apellido.length >= 45 )
        errors.apellido = "Last name can not be longer to 45 characters";

    /* docTipo validations start */

    if ( docTipo.length === 0 ) errors.docTipo = "No options selected";

    /* docNro validations start */

    if ( !hasOnlyDigits.test( docNro ) )
        errors.docNro = "Only numbers are allowed in this input";
    if ( docNro.length >= 20 )
        errors.docNro = "ID can not be longer than 20 numbers";

    /* mail validations start */
    if ( !mail ) errors.mail = "A email is required";
    if ( !hasWhiteSpaces.test( mail ) ) errors.mail = "Whitespaces are not allowed";
    if ( mail.length <= 8 || mail.length >= 30 )
        errors.mail = "email must have between 8 and 30 characters";
    if ( !isEmail.test( mail ) )
        errors.mail = "Not a valid email. Ex: example@mail.com";

    /* telMovil validations start */

    if ( !telMovil ) errors.telMovil = "Phone is required";
    if ( !hasOnlyDigits.test( telMovil ) )
        errors.telMovil = "Only numbers are allowed in this input";
    if ( telMovil.length <= 5 || telMovil.length >= 20 )
        errors.telMovil = "Phone must have between 5 and 20 numbers";

    /* telPersonal validations start */

    if ( telPersonal.length > 0 )
    {
        if ( telPersonal.length <= 5 || telPersonal.length >= 20 )
            errors.telPersonal = "Phone must have between 5 and 20 numbers";
        if ( !hasOnlyDigits.test( telPersonal ) )
            errors.telPersonal = "Only numbers are allowed in this input";
    }

    /* telLaboral validations start */

    if ( telLaboral.length > 0 )
    {
        if ( telLaboral.length <= 5 || telLaboral.length >= 20 )
            errors.telLaboral = "Phone must have between 5 and 20 digits";
        if ( !hasOnlyDigits.test( telLaboral ) )
            errors.telLaboral = "Only numbers are allowed in this input";
    }

    /* cv validations start */
    if ( cv.length === 0 ) errors.cv = "Please, upload your Resume / CV";

    /* linkedin validations start */

    if ( linkedin.length <= 5 || linkedin.length >= 100 )
        errors.linkedin = "Linkedin must have between 5 and 100 characters";
    if ( !linkedin ) errors.linkedin = "Linkedin is required";

    /* Street validations start */
    if ( domCalle.length > 0 )
    {
        if ( !hasWhiteSpaces.test( domCalle ) )
            errors.domCalle = "Street can not include whitespaces";
        if ( !hasFirstUpper.test( domCalle ) )
            errors.domCalle = "Street should be Uppercase";
        if ( !isAlphabetical.test( domCalle ) )
            errors.domCalle =
                "Street can not include special characters or being lower than 1 character";
        if ( domCalle.length >= 45 )
            errors.domCalle = "Street can not be longer to 45 characters";
    }
    /* Street Nº validations start */
    if ( domAltura.length > 0 )
    {
        if ( domAltura.length <= 1 || domAltura.length >= 5 )
            errors.domAltura =
                "Street Nº must have between 1 and 5 digits. Example: 82, 159, 10581";
        if ( !hasOnlyDigits.test( domAltura ) )
            errors.domAltura = "Only numbers are allowed in this input";
    }
    /* Postal Code validations start */
    if ( domCp.length > 0 )
    {
        if ( domCp.length <= 1 || domCp.length >= 10 )
            errors.domCp =
                "Street Nº must have between 1 and 10 digits. Example: 1600, 628";
        if ( !hasOnlyDigits.test( domCp ) )
            errors.domCp = "Only numbers are allowed in this input";
    }

    return errors;
}