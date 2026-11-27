import Color from "../models/Color.js"
import Size from "../models/Size.js"
import state from "../state.js"
import { renderSizeGroups } from "../features/selectColor.js"

const listConfig = {
	colors: {
		listName: state.colors, 
		model: Color, 
		targetSelector: "[data-list-name='colors']",
		emptyMessage: "No has agregado colores.", 

		onChange: () => {
			state.getColorSelect().innerHTML = ""

			state.colors.forEach((color) => {
				state.getColorSelect().insertAdjacentHTML(
					"beforeend", 
					`
						<label class="tab" data-value="${color.getName()}">
							${color.getName()}
							<input type="radio" name="selected-color">
						</label>
					`
				)	
			})
		}
	},   
	sizes: {
		listName: state.sizes, 
		model: Size, 
		targetSelector: "[data-list-name='sizes']",
		emptyMessage: "No has agregado tallas.", 

		onChange: () => {
			renderSizeGroups()
		}
	}
}

export default listConfig
