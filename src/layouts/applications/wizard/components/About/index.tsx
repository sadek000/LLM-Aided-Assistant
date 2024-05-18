// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATAvatar from "components/ATAvatar";
import ATButton from "components/ATButton";

// Wizard application components
import FormField from "layouts/applications/wizard/components/FormField";

// Images
import team2 from "assets/images/team-2.jpg";

function About(): JSX.Element {
  return (
    <ATBox>
      <ATBox width="82%" textAlign="center" mx="auto" my={4}>
        <ATBox mb={1}>
          <ATTypography variant="h5" fontWeight="regular">
            Let&apos;s start with the basic information
          </ATTypography>
        </ATBox>
        <ATTypography variant="body2" color="text">
          Let us know your name and email address. Use an address you don&apos;t mind other users
          contacting you at
        </ATTypography>
      </ATBox>
      <ATBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} container justifyContent="center">
            <ATBox position="relative" height="max-content" mx="auto">
              <ATAvatar src={team2} alt="profile picture" size="xxl" variant="rounded" />
              <ATBox alt="spotify logo" position="absolute" right={0} bottom={0} mr={-1} mb={-1}>
                <Tooltip title="Edit" placement="top">
                  <ATButton variant="gradient" color="info" size="small" iconOnly>
                    <Icon>edit</Icon>
                  </ATButton>
                </Tooltip>
              </ATBox>
            </ATBox>
          </Grid>
          <Grid item xs={12} sm={8}>
            <ATBox mb={2}>
              <FormField type="text" label="First Name" />
            </ATBox>
            <ATBox mb={2}>
              <FormField type="text" label="Last Name" />
            </ATBox>
            <ATBox>
              <FormField type="email" label="Email Address" />
            </ATBox>
          </Grid>
        </Grid>
      </ATBox>
    </ATBox>
  );
}

export default About;
