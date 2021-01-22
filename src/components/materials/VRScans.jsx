import { useCallback } from "react";
import { VRScan } from "./VRScan";
import { useDispatch, useSelector } from "react-redux";
import fetchVrScansThunk from "../../services/fetchVrScansThunk";
import {
  addFavoritesThunk,
  removeFavoritesThunk
} from "../../services/favoritesThunk";

export const VRScans = () => {
  const scans = useSelector((state) => state.vrScans);
  const loadMore = useSelector((state) => state.loadMore);
  const favorites = useSelector((state) => state.favorites);
  const userId = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();

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

  const pushToFavorites = (scanId) => {
    dispatch(addFavoritesThunk({ vrscanId: scanId, userId }));
  };

  const removeFromFavorites = (favData) => {
    dispatch(removeFavoritesThunk(favData[0].id));
  };

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
              favoriteData={favorites.filter((fav) => fav.vrscanId === scan.id)}
              pushToFavorites={pushToFavorites}
              removeFromFavorites={removeFromFavorites}
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
