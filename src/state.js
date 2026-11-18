import Size from "./models/Size.js"

const state = {
	colors: [], 
	sizes: [
		new Size("xs"), 
		new Size("s"), 
		new Size("m"), 
		new Size("l"), 
		new Size("xl"), 
	], 

	getForm: () => document.querySelector("form"), 
	getCurrentStepIndex: () => {
		const index = document.querySelector(".step--active").dataset.stepIndex

		return Number(index)
	}
}

export default state 
