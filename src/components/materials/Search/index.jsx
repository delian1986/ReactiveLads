import { Component } from "react";

export class Search extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  timer = null;

  handleChange = (event) => {
    const value = event.target.value;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.props.setSearchQuery(value);
    }, 500);
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control form-control-sm mb-3"
        placeholder="Search"
        onChange={this.handleChange}
        value={this.props.searchQuery}
      />
    );
  }
}
