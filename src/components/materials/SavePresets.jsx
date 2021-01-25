import { useDispatch, useSelector } from "react-redux";
import { resetAllFilters, setAllFilters } from "../../actions/filters";
import { setPresetId } from "../../actions/savePresets";
import { useState } from "react";
import { addPresetThink, removePresetThunk } from "../../services/savePresetsThunk";

export const SavePresets = () => {
  const dispatch = useDispatch();
  const savePresets = useSelector((state) => state.savePresets.presetsCollection);
  const presetId = useSelector((state) => state.savePresets.presetId);
  const [templateTitle, setTemplateTitle] = useState("");

  const changePresets = (id) => {
    if (id > 0) {
      dispatch(setPresetId(parseInt(id)));
      const presets = savePresets.filter((ps) => ps.id === parseInt(id))[0];
      dispatch(
        setAllFilters({
          tags: presets.tags || [],
          colors: presets.colors || [],
          types: presets.materialTypes || [],
          favoritesMode: false,
          searchQuery: presets.search || ""
        })
      );
    } else {
      dispatch(setPresetId(0));
      dispatch(resetAllFilters());
    }
    setTemplateTitle("");
  };

  const savePresetTemplate = () => {
    dispatch(addPresetThink(templateTitle));
    setTemplateTitle("");
  };

  const handleChangeTemplateName = (value) => {
    setTemplateTitle(value);
  };

  const removePreset = () => {
    if (presetId < 1) {
      return;
    }

    dispatch(removePresetThunk(presetId));
    dispatch(resetAllFilters());
  };

  return (
    <div className="pr-2">
      <h5>Saved Presets</h5>
      <div className="input-group input-group-sm mb-1">
        <input
          onChange={(e) => handleChangeTemplateName(e.target.value)}
          value={templateTitle}
          type="text"
          className="form-control"
        />
        <div className="input-group-append">
          <button
            onClick={savePresetTemplate}
            className="btn btn-success"
            type="button"
          >
            Add
          </button>
        </div>
      </div>
      <div className="input-group input-group-sm mb-2">
        <select
          onChange={(e) => changePresets(e.target.value)}
          value={presetId}
          className="form-control"
        >
          <option key="0" value="0">
            Set or reset presets here
          </option>
          {savePresets.map((preset) => (
            <option key={preset.id} value={preset.id}>
              {preset.title}
            </option>
          ))}
        </select>
        <div className="input-group-append">
          <button onClick={removePreset} className="btn btn-danger" type="button">
            Del
          </button>
        </div>
      </div>
    </div>
  );
};
