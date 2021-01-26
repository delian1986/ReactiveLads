import { resetVrScans } from "../store/actions/vrScans";
import { setPage } from "../store/actions/page";
import { fetchVrScansAsync } from "../store/actions/vrScans";
import { loadMoreEnable } from "../store/actions/loadMore";

export const filterMiddleware = (store) => (next) => (action) => {
  const before = store.getState();
  next(action);
  const after = store.getState();

  if (before.filters !== after.filters || before.search !== after.search) {
    console.log("Filters changed! Reset and load first chunk of data");
    store.dispatch(setPage(0));
    store.dispatch(resetVrScans());
    store.dispatch(loadMoreEnable());
    store.dispatch(fetchVrScansAsync());
  }
};
