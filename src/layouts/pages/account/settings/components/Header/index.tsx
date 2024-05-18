import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATAvatar from "components/ATAvatar";

// Images
import burceMars from "assets/images/bruce-mars.jpg";

function Header(): JSX.Element {
  const [visible, setVisible] = useState<boolean>(true);

  const handleSetVisible = () => setVisible(!visible);

  return (
    <Card id="profile">
      <ATBox p={2}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <ATAvatar src={burceMars} alt="profile-image" size="xl" shadow="sm" />
          </Grid>
          <Grid item>
            <ATBox height="100%" mt={0.5} lineHeight={1}>
              <ATTypography variant="h5" fontWeight="medium">
                Alex Thompson
              </ATTypography>
              <ATTypography variant="button" color="text" fontWeight="medium">
                CEO / Co-Founder
              </ATTypography>
            </ATBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3} sx={{ ml: "auto" }}>
            <ATBox
              display="flex"
              justifyContent={{ md: "flex-end" }}
              alignItems="center"
              lineHeight={1}
            >
              <ATTypography variant="caption" fontWeight="regular">
                Switch to {visible ? "invisible" : "visible"}
              </ATTypography>
              <ATBox ml={1}>
                <Switch checked={visible} onChange={handleSetVisible} />
              </ATBox>
            </ATBox>
          </Grid>
        </Grid>
      </ATBox>
    </Card>
  );
}

export default Header;
