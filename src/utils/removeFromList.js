const removeFromList = (list, target) => {
	const itemIndex = list.findIndex((item) => item.getName() === target)	

	if(itemIndex !== -1) 
		list.splice(itemIndex, 1);
}

export default removeFromList
