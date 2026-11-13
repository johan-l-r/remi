import Color from "../models/Color.js"
import state from "../state.js"

const listConfig = {
	colors: {
		listName: state.colors, 
		model: Color, 
		targetSelector: ".color-list",
	},
}

export default listConfig
