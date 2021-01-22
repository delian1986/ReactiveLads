import { useCallback, useRef } from "react";
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
  const isVrScansLoaded = useSelector((state) => state.isVrScansLoaded);
  const observer = useRef();

  const nextPageTriggerElem = useCallback((e) => {
    if (!isVrScansLoaded) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && loadMore) {
        console.log("Load more items...");
        dispatch(fetchVrScansThunk());
      }
    });
    if (e) observer.current.observe(e);
  });

  const pushToFavorites = (scanId) => {
    dispatch(addFavoritesThunk({ vrscanId: scanId, userId }));
  };

  const removeFromFavorites = (favData) => {
    dispatch(removeFavoritesThunk(favData[0].id));
  };

  return (
    <div className="card p-3 overflow-auto h-100">
      <div className="row row-cols-4">
        {scans.map((scan, index) => (
          <VRScan
            key={scan.id}
            id={scan.id}
            name={scan.name}
            thumb={scan.thumb}
            fileName={scan.fileName}
            favoriteData={favorites.filter((fav) => fav.vrscanId === scan.id)}
            pushToFavorites={pushToFavorites}
            removeFromFavorites={removeFromFavorites}
            thisRef={index === scans.length - 5 ? nextPageTriggerElem : undefined}
          />
        ))}
        {isVrScansLoaded && scans.length === 0 && (
          <div className="d-flex justify-content-center">No results.</div>
        )}
        {!isVrScansLoaded && (
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
