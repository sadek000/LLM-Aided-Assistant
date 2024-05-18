import { ReactNode } from "react";

// @mui material components
import Icon from "@mui/material/Icon";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATButton from "components/ATButton";

// Declaring props types for Transaction
interface Props {
  color: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";
  icon: ReactNode;
  name: string;
  description: string;
  value: string;
}

function Transaction({ color, icon, name, description, value }: Props): JSX.Element {
  return (
    <ATBox key={name} component="li" py={1} pr={2} mb={1}>
      <ATBox display="flex" justifyContent="space-between" alignItems="center">
        <ATBox display="flex" alignItems="center">
          <ATBox mr={2}>
            <ATButton variant="outlined" color={color} iconOnly circular>
              <Icon sx={{ fontWeight: "bold" }}>{icon}</Icon>
            </ATButton>
          </ATBox>
          <ATBox display="flex" flexDirection="column">
            <ATTypography variant="button" fontWeight="medium" gutterBottom>
              {name}
            </ATTypography>
            <ATTypography variant="caption" color="text" fontWeight="regular">
              {description}
            </ATTypography>
          </ATBox>
        </ATBox>
        <ATTypography variant="button" color={color} fontWeight="medium" textGradient>
          {value}
        </ATTypography>
      </ATBox>
    </ATBox>
  );
}

export default Transaction;
