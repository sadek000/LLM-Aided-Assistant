//  ALDR Tech Dashboard Base Styles
import typography from "assets/theme/base/typography";

//  ALDR Tech Dashboard Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;

// types
type Types = any;

const dialogTitle: Types = {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.xl,
    },
  },
};

export default dialogTitle;
