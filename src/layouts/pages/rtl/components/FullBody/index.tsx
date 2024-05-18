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
          جسم كامل
        </ATTypography>
        <ATBadge variant="contained" color="info" badgeContent="معتدل" container />
      </ATBox>
      <ATBox pb={3} px={3}>
        <ATTypography variant="body2" color="text">
          ما يهم هو الأشخاص الذين أوقدوه. والناس الذين يشبهونهم مستاءون منه.
        </ATTypography>
      </ATBox>
    </Card>
  );
}

export default FullBody;
