const removeFromList = (list, target) => {
	const itemIndex = list.findIndex((item) => item.getName() === target.getName())	

	if(!itemIndex !== -1) 
		list.splice(itemIndex, 1);
}
