/**
 * Defines the styles for all the text elements.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element
 */
const Elements = {
  label: "Elements",

  ["& li"]: {
    marginLeft: `var(--lem)`,
  },

  ["& blockquote"]: {
    display: "inline-block !important",
    border: "4px dashed",
    marginLeft: `calc(var(--lem) * 3)`,
    padding: `var(--lem)`,
    maxWidth: `calc(100% - var(--lem) * 3)`,
  },

  ["& dd"]: {},
  ["& div"]: {},
  ["& dl"]: {},
  ["& dt"]: {},
  ["& figcaption"]: {},
  ["& figure"]: {},

  ["& hr"]: {
    display: "block",
    fontSize: "100%",

    ["& + hr"]: {
      marginTop: `var(--lem)`,
    },
  },

  ["& main"]: {},

  ["& p"]: {},
  ["& code"]: {
    /**
     * This is both for code blocks with `pres` and inline with ticks like `HTML`
     */
    fontWeight: 300,
  },
  ["& pre"]: {
    display: "inline flow-root list-item",
    overflowX: "auto",
    maxWidth: "100%",

    ["& code"]: {
      display: "inline flow-root list-item",
      overflow: "auto",
      maxWidth: "90vw",
    },
  },

  ["& a "]: {},
  ["& abbr"]: {},
  ["& b"]: {},
  ["& bdi"]: {},
  ["& bdo"]: {},
  ["& br"]: {},
  ["& cite"]: {},
  ["& data"]: {},
  ["& dfn"]: {},
  ["& em"]: {},
  ["& i"]: {},
  ["& kbd"]: {},
  ["& mark"]: {},
  ["& q"]: {},
  ["& rb"]: {},
  ["& rp"]: {},
  ["& rt"]: {},
  ["& rtc"]: {},
  ["& ruby"]: {},
  ["& s"]: {},
  ["& samp"]: {},
  ["& small"]: {},
  ["& span"]: {},
  ["& strong"]: {},
  ["& sub"]: {},
  ["& sup"]: {},
  ["& time"]: {},
  ["& u"]: {},
  ["& var"]: {},
  ["& wbr"]: {},
  ["& area"]: {},
  ["& audio"]: {},
  ["& img"]: {
    maxWidth: "100%",
  },
  ["& map"]: {},
  ["& track"]: {},
  ["& video"]: {},
  ["& del"]: {},
  ["& ins"]: {},
  ["& caption"]: {},
  ["& col"]: {},
  ["& colgroup"]: {},
  ["& table"]: {},
  ["& tbody"]: {},
  ["& td"]: {},
  ["& tfoot"]: {},
  ["& th"]: {},
  ["& thead"]: {},
  ["& tr"]: {},
  ["& button"]: {},
  ["& datalist"]: {},
  ["& fieldset"]: {},
  ["& form"]: {},
  ["& input"]: {},
  ["& label"]: {},
  ["& legend"]: {},
  ["& meter"]: {},
  ["& optgroup"]: {},
  ["& option"]: {},
  ["& output"]: {},
  ["& progress"]: {},
  ["& select"]: {},
  ["& textarea"]: {},
  ["& details"]: {},
  ["& dialog"]: {},
  ["& menu"]: {},
  ["& summary"]: {},
};

export default Elements;
