export type TBorderPresetNames = "default";

export type TBorder = {
  preset?: TBorderPresetNames;
  borderStyle?: string;
  borderWidth?: string;
};

const defaultBorder: TBorder = {
  preset: "default",
  borderStyle: "solid",
  borderWidth: "1px",
};

const borders: TBorder[] = [defaultBorder];

export default borders;
