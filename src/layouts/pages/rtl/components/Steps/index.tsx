// @mui material components
import Card from "@mui/material/Card";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATBadge from "components/ATBadge";

function Steps(): JSX.Element {
  return (
    <Card>
      <ATBox p={3}>
        <ATTypography variant="body2" color="text">
          خطوات
        </ATTypography>
        <ATBox mt={2} mb={1} lineHeight={0}>
          <ATTypography variant="h3" fontWeight="bold">
            11.4ك
          </ATTypography>
        </ATBox>
        <ATBadge variant="contained" color="success" badgeContent="+4.3%" container />
      </ATBox>
    </Card>
  );
}

export default Steps;
