import type { TPreset, TState } from "@theme";
import { theme } from "@theme";
import { isNil } from "lodash";

const usePreset = (type?: string, name?: string, state?: TState) => {
  const presets = theme?.decorations;

  const preset = presets.find((item) => {
    const { preset: itemPreset } = item;
    const { type: presetType, name: presetName } = itemPreset;
    return type === presetType && name === presetName;
  });

  const styles = preset?.styles;

  const stylesForState =
    styles && styles.filter((style) => style.state === state);

  const styles2 = state ? stylesForState : styles;

  return (
    styles2 &&
    styles2.map((style) => {
      //// NOTE: for some reason `state` gets *not* confused and all works fine.
      const { state, presets, css } = style;

      const presetsObject =
        presets &&
        presets.reduce((storedValue, preset) => {
          const { type, name } = preset;
          const value = usePreset(type, name, state);
          const valueFiltered =
            value && value.filter((item) => item.state === state).pop();
          return { ...storedValue, ...valueFiltered };
        }, {});

      return { state: state, ...presetsObject, ...css };
    })
  );
};

export default usePreset;
