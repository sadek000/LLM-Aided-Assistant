// @mui material components
import Card from "@mui/material/Card";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATBadge from "components/ATBadge";

function FullBody(): JSX.Element {
  return (
    <Card sx={{ height: "100%" }}>
      <ATBox display="flex" justifyContent="space-between" alignItems="center" pt={3} mb={2} px={3}>
        <ATTypography variant="body2" color="text">
          Full Body
        </ATTypography>
        <ATBadge variant="contained" color="info" badgeContent="moderate" container />
      </ATBox>
      <ATBox pb={3} px={3}>
        <ATTypography variant="body2" color="text">
          What matters is the people who are sparked by it. And the people who are liked.
        </ATTypography>
      </ATBox>
    </Card>
  );
}

export default FullBody;
