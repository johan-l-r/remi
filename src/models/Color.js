import Group from "./Group.js"
import SizeGroup from "./SizeGroup.js"		

class Color extends Group {
	constructor(name) {
		super(name)

		this._members = [
			new SizeGroup("primeras"), 
			new SizeGroup("segundas"), 
			new SizeGroup("set de tallas"), 
			new SizeGroup("muertos"), 
			new SizeGroup("cobros"), 
		]
	}

	render = () => {
		return `
			<li class="tag">
				<p class="tag__label">${this._name}</p>

				<button 
					type="button" 
					class="tag__button button--del"
					data-name="${this._name}"
					data-target-list="colors"
				>
					<svg 
						xmlns="http://www.w3.org/2000/svg" 
						viewBox="0 0 24 24" 
						height="16px" 
						width="16px" 
						fill="#2B3A67"
					>
						<path d="M6.4,19L5,17.6L10.6,12L5,6.4L6.4,5L12,10.6L17.6,5L19,6.4L13.4,12L19,17.6L17.6,19L12,13.4L6.4,19Z"/>
					</svg
				</button>
			</li>
		`
	}
}

export default Color
