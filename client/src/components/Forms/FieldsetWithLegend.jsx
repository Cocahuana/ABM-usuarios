import React from "react";
function FieldsetWithLegend({legendTitle}, props) {
	const {children} = props;
	return (
		<fieldset style={{border: "3px solid"}} className='px-2'>
			<legend className='float-none w-auto p-2'>{legendTitle}</legend>
			
		</fieldset>
	);
}

export default FieldsetWithLegend;
