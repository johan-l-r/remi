import Group from "./Group.js";
import state from "../state.js"

class SizeGroup extends Group {
	constructor(name) {
		super(name)
	}

	render = () => {
		
	}
	
	#createTable = () => {
		state.getGroupsContainer().insertAdjacentHTML(
			"beforeend", 
			`
				<article class="table">
					<div class="table__header">
						<h3>${this._name}</h3>
					</div>

					<div class="table__content">
					</div>
				</article>
			`
		)
	} 

	render = () => {
		this.#createTable()
	}
}

export default SizeGroup
