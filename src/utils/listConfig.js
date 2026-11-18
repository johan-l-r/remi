import Color from "../models/Color.js"
import Size from "../models/Size.js"
import state from "../state.js"

const listConfig = {
	colors: {
		listName: state.colors, 
		model: Color, 
		targetSelector: "[data-list-name='colors']",
		emptyMessage: "No has agregado colores."
	},   
	sizes: {
		listName: state.sizes, 
		model: Size, 
		targetSelector: "[data-list-name='sizes']",
		emptyMessage: "No has agregado tallas."
	}
}

export default listConfig
