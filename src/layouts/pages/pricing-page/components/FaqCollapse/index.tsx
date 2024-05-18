import { ReactNode } from "react";

// @mui material components
import Icon from "@mui/material/Icon";
import Collapse from "@mui/material/Collapse";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";

//  ALDR Tech Dashboard components
import borders from "assets/theme/base/borders";

// Declaring props types for FaqCollapse
interface Props {
  title: string;
  open: boolean;
  children: ReactNode;
  [key: string]: any;
}

function FaqCollapse({ title, open, children, ...rest }: Props): JSX.Element {
  const { borderWidth, borderColor } = borders;

  return (
    <ATBox mb={2}>
      <ATBox
        {...rest}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        borderBottom={`${borderWidth[1]} solid ${borderColor}`}
        sx={{ cursor: "pointer" }}
      >
        <ATTypography variant="h5" color={open ? "dark" : "text"} sx={{ userSelect: "none" }}>
          {title}
        </ATTypography>
        <ATBox color={open ? "dark" : "text"}>
          <Icon sx={{ fontWeight: "bold" }} fontSize="small">
            {open ? "remove" : "add"}
          </Icon>
        </ATBox>
      </ATBox>
      <Collapse timeout={400} in={open}>
        <ATBox p={2} lineHeight={1}>
          <ATTypography variant="button" color="text" opacity={0.8} fontWeight="regular">
            {children}
          </ATTypography>
        </ATBox>
      </Collapse>
    </ATBox>
  );
}

export default FaqCollapse;
