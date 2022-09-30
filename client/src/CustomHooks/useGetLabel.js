import React, {useState} from "react";

function useGetLabel(id, array) {
	const [label, setLabel] = useState(getLabel(id, array));

	const getLabel = (id, array) => {
		let result = "";
		for (let i = 0; i < array.length; i++) {
			if (array[i].value === id) {
				result = array[i].label;
				break;
			}
		}
		return result;
	};
	return label;
}

export default useGetLabel;
