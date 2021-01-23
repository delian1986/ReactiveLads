import { Component } from "react";
import ColorFilters from "../../containers/Colors";
import MaterialTypes from "../../containers/MaterialTypes";
import { SaveFilter } from "./SaveFilter";
import Tags from "../../containers/Tags";
import Favorites from "../../containers/Favorites";

export class FiltersContainer extends Component {
  render() {
    return (
      <div className="h-100 overflow-auto">
        <SaveFilter />
        <Favorites />
        <MaterialTypes />
        <ColorFilters />
        <Tags />
      </div>
    );
  }
}
