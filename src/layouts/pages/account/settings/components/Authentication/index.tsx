// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATButton from "components/ATButton";
import ATBadge from "components/ATBadge";

function Authentication(): JSX.Element {
  return (
    <Card id="2fa" sx={{ overflow: "visible" }}>
      <ATBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <ATTypography variant="h5">Two-factor authentication</ATTypography>
        <ATBadge variant="contained" color="success" badgeContent="enabled" container />
      </ATBox>
      <ATBox p={3}>
        <ATBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <ATTypography variant="body2" color="text">
            Security keys
          </ATTypography>
          <ATBox
            display="flex"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <ATBox mx={{ xs: 0, sm: 2 }} mb={{ xs: 1, sm: 0 }}>
              <ATTypography variant="button" color="text" fontWeight="regular">
                No Security keys
              </ATTypography>
            </ATBox>
            <ATButton variant="outlined" color="dark" size="small">
              add
            </ATButton>
          </ATBox>
        </ATBox>
        <Divider />
        <ATBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <ATTypography variant="body2" color="text">
            SMS number
          </ATTypography>
          <ATBox
            display="flex"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <ATBox mx={{ xs: 0, sm: 2 }} mb={{ xs: 1, sm: 0 }}>
              <ATTypography variant="button" color="text" fontWeight="regular">
                +3012374423
              </ATTypography>
            </ATBox>
            <ATButton variant="outlined" color="dark" size="small">
              edit
            </ATButton>
          </ATBox>
        </ATBox>
        <Divider />
        <ATBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <ATTypography variant="body2" color="text">
            Authenticator app
          </ATTypography>
          <ATBox
            display="flex"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <ATBox mx={{ xs: 0, sm: 2 }} mb={{ xs: 1, sm: 0 }}>
              <ATTypography variant="button" color="text" fontWeight="regular">
                Not Configured
              </ATTypography>
            </ATBox>
            <ATButton variant="outlined" color="dark" size="small">
              set up
            </ATButton>
          </ATBox>
        </ATBox>
      </ATBox>
    </Card>
  );
}

export default Authentication;
