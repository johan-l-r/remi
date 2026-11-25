import Group from "./Group.js";
import state from "../state.js"

class SizeGroup extends Group {
	constructor(name) {
		super(name)
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

	#fillTable = () => {
		state.sizes.forEach((size) => {
			state.getGroupsContainer().lastElementChild
				.querySelector(".table__content").insertAdjacentHTML(
				"beforeend",
				`
					<span class="text-center text-uppercase">${size.getName()}</span>
					<input type="text" inputmode="numeric" pattern="[0-9]*" value="0">
				`
			)
		})		
	}

	render = () => {
		this.#createTable()
		this.#fillTable()
	}
}

export default SizeGroup
