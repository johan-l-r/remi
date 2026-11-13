import { goToNextStep, goToPreviousStep } from "./navigateForm.js"
import getStepValidity from "./validateStep.js"
import state from "../state.js"

import addToList from "../utils/addToList.js"
import renderList from "../utils/renderList.js"	

import listConfig from "../utils/listConfig.js"

const handleEvents = () => {
	state.getForm().addEventListener("keyup", (event) => {
		let config = listConfig[event.target.dataset.targetList]

		if(event.key === "Enter" && event.target.value.trim() !== "") {
			let inputValue = event.target.value.trim().toLowerCase()

			if(!config) 
				return 

			addToList(
				config.listName, 
				new config.model(inputValue)
			)	

			renderList(
				config.targetSelector, 
				config.listName, 
				config.emptyMessage
			)

			event.target.value = ""
		}
	})

	state.getForm().addEventListener("click", (event) => {
		if(event.target.classList.contains("button--prev")) 
			goToPreviousStep()

		if(!getStepValidity())
			return 

		if(event.target.classList.contains("button--next"))	
			goToNextStep()
	})
}

export default handleEvents
