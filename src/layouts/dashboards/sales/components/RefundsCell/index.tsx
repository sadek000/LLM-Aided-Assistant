// @mui material components
import Icon from "@mui/material/Icon";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";

// Declaring props types for RefundsCell
interface Props {
  value: string | number;
  icon: {
    color: "info" | "success" | "warning" | "error";
    name: string;
  };
}

function RefundsCell({ value, icon }: Props): JSX.Element {
  return (
    <ATBox display="flex" justifyContent="center" alignItems="center" px={2}>
      <ATTypography variant="button" fontWeight="regular" color="text">
        {value}
      </ATTypography>
      <ATBox color={icon.color} lineHeight={0}>
        <Icon sx={{ fontWeight: "bold" }} fontSize="small">
          {icon.name}
        </Icon>
      </ATBox>
    </ATBox>
  );
}

export default RefundsCell;
