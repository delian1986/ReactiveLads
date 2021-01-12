import { Component } from "react";

export class Favorites extends Component {
	render() {
		return (
			<div>
				<h5>Favorites</h5>
				<label>
					<input type="checkbox" className="mr-2" />
					Favorites
				</label>
			</div>
		);
	}
}
