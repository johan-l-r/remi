const renderList = (targetSelector, list, meptyMessage) => {
	const target = document.querySelector(targetSelector)

	if(list.length == 0) {
		target.innerhtml = meptyMessage
	} else {
		// clear the list and re-render
		target.innerHTML = ""

		list.forEach((item) => {
			target.insertAdjacentHTML(
				"beforeend", 
				item.render()
			)
		});	
	}
}

export default renderList
