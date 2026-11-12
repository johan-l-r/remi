import { goToNextStep } from "./navigateForm.js"
import { goToPreviousStep } from "./navigateForm.js"
import getStepValidity from "./validateStep.js"
import state from "../state.js"

export default function handleEvents() {
	state.getForm().addEventListener("click", (event) => {
		if(event.target.classList.contains("button--prev")) 
			goToPreviousStep()

		if(!getStepValidity())
			return 

		if(event.target.classList.contains("button--next"))	
			goToNextStep()
	})
}
