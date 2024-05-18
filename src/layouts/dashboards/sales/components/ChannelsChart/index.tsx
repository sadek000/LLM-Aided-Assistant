// @mui material components
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATButton from "components/ATButton";
import ATBadgeDot from "components/ATBadgeDot";
import PieChart from "examples/Charts/PieChart";

// Data
import channelChartData from "layouts/dashboards/sales/components/ChannelsChart/data";

//  ALDR Tech Dashboard contexts
import { useMaterialUIController } from "context";

function ChannelsChart(): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <Card sx={{ height: "100%" }}>
      <ATBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <ATTypography variant="h6">Channels</ATTypography>
        <Tooltip title="See traffic channels" placement="bottom" arrow>
          <ATButton variant="outlined" color="secondary" size="small" circular iconOnly>
            <Icon>priority_high</Icon>
          </ATButton>
        </Tooltip>
      </ATBox>
      <ATBox mt={3}>
        <Grid container alignItems="center">
          <Grid item xs={7}>
            <PieChart chart={channelChartData} height="12.5rem" />
          </Grid>
          <Grid item xs={5}>
            <ATBox pr={1}>
              <ATBox mb={1}>
                <ATBadgeDot color="info" size="sm" badgeContent="Facebook" />
              </ATBox>
              <ATBox mb={1}>
                <ATBadgeDot color="primary" size="sm" badgeContent="Direct" />
              </ATBox>
              <ATBox mb={1}>
                <ATBadgeDot color="dark" size="sm" badgeContent="Organic" />
              </ATBox>
              <ATBox mb={1}>
                <ATBadgeDot color="secondary" size="sm" badgeContent="Referral" />
              </ATBox>
            </ATBox>
          </Grid>
        </Grid>
      </ATBox>
      <ATBox
        pt={4}
        pb={2}
        px={2}
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        mt="auto"
      >
        <ATBox width={{ xs: "100%", sm: "60%" }} lineHeight={1}>
          <ATTypography variant="button" color="text" fontWeight="light">
            More than <strong>1,200,000</strong> sales are made using referral marketing, and{" "}
            <strong>700,000</strong> are from social media.
          </ATTypography>
        </ATBox>
        <ATBox width={{ xs: "100%", sm: "40%" }} textAlign="right" mt={{ xs: 2, sm: "auto" }}>
          <ATButton color={darkMode ? "white" : "light"}>read more</ATButton>
        </ATBox>
      </ATBox>
    </Card>
  );
}

export default ChannelsChart;
