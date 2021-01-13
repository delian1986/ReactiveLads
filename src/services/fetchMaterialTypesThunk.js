import { fetchMaterialTypes } from "../actions/materialTypes";

const fetchMaterialTypesThunk = () => {
  return (dispatch) => {
    fetch("https://reactivelads.herokuapp.com/materials")
      .then((data) => data.json())
      .then((data) => data && dispatch(fetchMaterialTypes(data)))
      .catch((error) => console.log(error));
  };
};

export default fetchMaterialTypesThunk;
