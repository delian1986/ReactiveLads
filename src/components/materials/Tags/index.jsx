import { Component } from "react";
import { TagFilter } from "../TagFilter";

export class Tags extends Component {
  componentDidMount() {
    this.props.fetchTags();
  }

  render() {
    return this.props.tags.length > 0 ? (
      <div>
        <h5>Tags</h5>
        {this.props.tags.map((tag) => (
          <TagFilter
            key={tag.id}
            id={tag.id}
            name={tag.name}
            selectTag={this.props.selectTag}
          />
        ))}
      </div>
    ) : (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
}
