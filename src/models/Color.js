import Group from "./Group.js"

class Color extends Group {
	constructor(name) {
		super(name)
	}

	render = () => {
		return `
			<li class="list__item">${this._name}</li>
		`
	}
}

export default Color
