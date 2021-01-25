import { useEffect } from "react";
import { FiltersContainer } from "./FiltersContainer";
import Search from "../../containers/Search";
import { VRScans } from "./VRScans";
import { homeInitThunk } from "../../services/homeInitThunk";
import { useDispatch, useSelector } from "react-redux";

export const MaterialsContainer = () => {
  const dispatch = useDispatch();
  const isHomeLoaded = useSelector((state) => state.isHomeLoaded);

  useEffect(() => {
    if (!isHomeLoaded) {
      dispatch(homeInitThunk());
    }
  }, []);

  return (
    <div className="h-100 overflow-hidden p-3">
      <div className="bg-light card p-3 h-100 d-flex flex-column">
        <h2>VRScans</h2>
        <div className="d-flex overflow-hidden">
          <div className="p-1 h-100" style={{width: 300}}>
            <FiltersContainer />
          </div>
          <div className="p-1 h-100 w-100 d-flex flex-column">
            <Search />
            <VRScans />
          </div>
        </div>
      </div>
    </div>
  );
};
