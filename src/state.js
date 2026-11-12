const state = {
	getForm: () => document.querySelector("form"), 
	getCurrentStepIndex: () => {
		const index = document.querySelector(".step--active").dataset.stepIndex

		return Number(index)
	}
}

export default state 
