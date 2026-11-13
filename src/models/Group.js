class Group {
	_name
	_members

	constructor(name) {
		this._name = name
		this._members = []
	}

	render = () => {}

	getName = () => this._name
	getMembers = () => this._members
}

export default Group
