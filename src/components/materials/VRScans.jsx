import { useCallback, useEffect } from "react";
import { VRScan } from "./VRScan";
import { useDispatch, useSelector } from "react-redux";
import fetchVrScansThunk from "../../services/fetchVrScansThunk";

export const VRScans = () => {
  const scans = useSelector((state) => state.vrScans);
  const loadMore = useSelector((state) => state.loadMore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVrScansThunk());
  }, []);

  const handleScroll = useCallback(
    (e) => {
      const el = e.target;
      const reachedBottom = el.scrollTop + el.clientHeight === el.scrollHeight;
      if (reachedBottom && scans.length && loadMore) {
        console.log("Load more items...");
        dispatch(fetchVrScansThunk());
      }
    },
    [scans, dispatch]
  );

  return (
    <div className="card p-3 overflow-auto" onScroll={handleScroll}>
      <div className="row row-cols-4">
        {scans.length > 0 ? (
          scans.map((scan) => (
            <VRScan
              key={scan.id}
              id={scan.id}
              name={scan.name}
              thumb={scan.thumb}
              fileName={scan.fileName}
            />
          ))
        ) : (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
