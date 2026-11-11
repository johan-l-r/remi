import { goToNextStep } from "./navigateForm.js"
import { goToPreviousStep } from "./navigateForm.js"
import state from "../state.js"

export default function handleEvents() {
	state.getForm().addEventListener("click", (event) => {
		// form navigation 
		if(event.target.classList.contains("button--next"))	{
			goToNextStep()
		} else if(event.target.classList.contains("button--prev")) {
			goToPreviousStep()
		}
	})
}
