import state from "../state.js"

let selectedColor

const selectColor = (targetValue) => {
	selectedColor = state.colors.find((color) => {
		return color.getName() === targetValue   
	})
}

const renderSizeGroups = () => {
	state.getGroupsContainer().innerHTML = ""

	selectedColor.getMembers().forEach((member) => {
		member.render()	
	});
}

export { selectColor, renderSizeGroups }
