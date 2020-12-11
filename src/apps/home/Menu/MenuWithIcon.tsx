import React, { useContext } from "react";
import { cx } from "@emotion/css";

/**
 * Imports other types, components and hooks.
 */
import type { TMenu } from ".";
import { MenuDefault } from ".";
import { Grid } from "@components/layout";
import { MenuIconContext } from "@home/Template";
import { Button } from "@components/decorations";
import { useStyles } from "@hooks";

const container = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  ["& .Button"]: {
    marginTop: 0,
  },
};

/**
 * Displays the menu with icon.
 */
const MenuWithIcon = (props: TMenu) => {
  const { menuIconState, setMenuIconState } = useContext(MenuIconContext);
  const containerKlass = useStyles(container);

  return (
    <Grid columns={[2]} className={cx("Menu", containerKlass)}>
      <MenuDefault {...props} />
      <Button
        className={cx("Button")}
        state={menuIconState}
        updateState={setMenuIconState}
      >
        Close
      </Button>
    </Grid>
  );
};

export default MenuWithIcon;
