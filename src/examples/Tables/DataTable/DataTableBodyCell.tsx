import { ReactNode } from "react";

// @mui material components
import { Theme } from "@mui/material/styles";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";

// Declaring prop types for DataTableBodyCell
interface Props {
  children: ReactNode;
  noBorder?: boolean;
  align?: "left" | "right" | "center";
}

function DataTableBodyCell({ noBorder, align, children }: Props): JSX.Element {
  return (
    <ATBox
      component="td"
      textAlign={align}
      py={1.5}
      px={3}
      sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }: Theme) => ({
        fontSize: size.sm,
        borderBottom: noBorder ? "none" : `${borderWidth[1]} solid ${light.main}`,
      })}
    >
      <ATBox
        display="inline-block"
        width="max-content"
        color="text"
        sx={{ verticalAlign: "middle" }}
      >
        {children}
      </ATBox>
    </ATBox>
  );
}

// Declaring default props for DataTableBodyCell
DataTableBodyCell.defaultProps = {
  noBorder: false,
  align: "left",
};

export default DataTableBodyCell;
