import state from "../state.js"

let currentStepIndex = 0
const steps = state.getForm().querySelectorAll(".step")

export const goToNextStep = () => {
	currentStepIndex++

	updateStepVisibility()
}

export const goToPreviousStep = () => {
	currentStepIndex--

	updateStepVisibility()
}

const updateStepVisibility = () => {
	steps.forEach((step) => {
		if(step.classList.contains("step--active")) {
			step.classList.remove("step--active")
		}
	})

	steps[currentStepIndex].classList.add("step--active")
}
