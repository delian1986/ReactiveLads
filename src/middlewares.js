import { resetVrScans } from "./actions/vrScans";
import { setPage } from "./actions/page";
import { fetchVrScansThunk } from "./services/fetchVrScansThunk";
import { loadMoreEnable } from "./actions/loadMore";

export const filterMiddleware = (store) => (next) => (action) => {
  const before = store.getState();
  next(action);
  const after = store.getState();

  if (before.filters !== after.filters || before.search !== after.search) {
    console.log("Filters changed! Reset and load first chunk of data");
    store.dispatch(setPage(0));
    store.dispatch(resetVrScans());
    store.dispatch(loadMoreEnable());
    store.dispatch(fetchVrScansThunk());
  }
};
