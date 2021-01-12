import { Component } from "react";

export class Search extends Component {
	handleChange() {

	}
	
	render() {
		return (
			<input type="text" className="form-control form-control-sm mb-3" placeholder="Search" onChange={this.handleChange} />
		);
	}
}
