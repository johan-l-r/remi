const addToList = (list, newItem) => {
	const itemExists = list.some((item) => item.getName() === newItem.getName() )
	
	if(!itemExists) {
		list.push(newItem);
	}
}

export default addToList
