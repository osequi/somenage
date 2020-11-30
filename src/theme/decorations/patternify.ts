export type TPatternifyPresetNames = "black-on-white";

export type TPatternify = {
  preset?: TPatternifyPresetNames;
  backgroundImage: string;
};

const blackOnWhite: TPatternify = {
  preset: "black-on-white",
  backgroundImage:
    "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAEElEQVQYlWNgGAV0B/+JwQC+3An30vwY1gAAAABJRU5ErkJggg==)",
};

const patternify: TPatternify[] = [blackOnWhite];

export default patternify;
