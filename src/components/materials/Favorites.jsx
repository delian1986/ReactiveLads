import PropTypes from "prop-types";

export const Favorites = ({ toggleFavoritesMode, isInFavoritesMode }) => {
  return (
    <div>
      <h5>Favorites</h5>
      <label>
        <input
          type="checkbox"
          className="mr-2"
          checked={isInFavoritesMode}
          onChange={() => toggleFavoritesMode(!isInFavoritesMode)}
        />
        Favorites
      </label>
    </div>
  );
};

Favorites.propTypes = {
  toggleFavoritesMode: PropTypes.func.isRequired
};
