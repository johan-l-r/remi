import state from "../state.js"

const validateStep = () => {
	const steps = state.getForm().querySelectorAll(".step")	

	const validationsPerStep = [
		{
			isValid: () => {
				const requiredFields = state.getForm().querySelectorAll("[required]")

				return Array.from(requiredFields).every((field) => {
					return field.value.trim() !== ""
				})
			}
		}, 
		{
			// for debugging 
			isValid: () => true
		}
	]	

	return validationsPerStep[state.getCurrentStepIndex()].isValid()
}

const getStepValidity = () => validateStep()

export default getStepValidity
