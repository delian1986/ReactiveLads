import { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      currentSearchQuery: this.props.searchQuery ?? ""
    };
  }
  timer = null;

  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ currentSearchQuery: this.props.searchQuery });
    }
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ currentSearchQuery: value });
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
        name="searchBox"
        type="text"
        className="form-control form-control-sm mb-3"
        placeholder="Search"
        onChange={this.handleChange}
        value={this.state.currentSearchQuery}
      />
    );
  }
}
