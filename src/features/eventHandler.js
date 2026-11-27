import { goToNextStep, goToPreviousStep } from "./navigateForm.js"
import { selectColor, renderSizeGroups } from "./selectColor.js"	

import getStepValidity from "./validateStep.js"
import state from "../state.js"

import addToList from "../utils/addToList.js"
import renderList from "../utils/renderList.js"	
import removeFromList from "../utils/removeFromList.js"

import listConfig from "../utils/listConfig.js"

const handleEvents = () => {
	const lists = state.getForm().querySelectorAll("[data-target-list]")

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

			config.onChange()

			event.target.value = ""
		}
	})

	state.getForm().addEventListener("click", (event) => {
		const delButton = event.target.closest(".button--del")

		// form navigation 
		if(event.target.classList.contains("button--prev")) 
			goToPreviousStep()
		if(event.target.classList.contains("button--next") && getStepValidity())	
			goToNextStep()

		if(event.target.classList.contains("tab")) {
			selectColor(event.target.dataset.value)
			renderSizeGroups()
		}

		if(!delButton) 
			return

		let config = listConfig[delButton.dataset.targetList]

		if(!config)
			return 

		// removing an item 
		if(delButton) {
			removeFromList(
				config.listName,
				delButton.dataset.name
			)

			renderList(
				config.targetSelector, 
				config.listName, 
				config.emptyMessage
			)

			config.onChange()
		}
	})

	// auto render list state
	lists.forEach((list) => {
		const target = list.dataset.targetList

		renderList(
			listConfig[target].targetSelector, 
			listConfig[target].listName, 
			listConfig[target].emptyMessage
		)
	})
}

export default handleEvents
