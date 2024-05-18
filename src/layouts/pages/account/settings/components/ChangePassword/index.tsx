// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATButton from "components/ATButton";
import ATInput from "components/ATInput";

function ChangePassword(): JSX.Element {
  const passwordRequirements = [
    "One special characters",
    "Min 6 characters",
    "One number (2 are recommended)",
    "Change it often",
  ];

  const renderPasswordRequirements = passwordRequirements.map((item, key) => {
    const itemKey = `element-${key}`;

    return (
      <ATBox key={itemKey} component="li" color="text" fontSize="1.25rem" lineHeight={1}>
        <ATTypography variant="button" color="text" fontWeight="regular" verticalAlign="middle">
          {item}
        </ATTypography>
      </ATBox>
    );
  });

  return (
    <Card id="change-password">
      <ATBox p={3}>
        <ATTypography variant="h5">Change Password</ATTypography>
      </ATBox>
      <ATBox component="form" pb={3} px={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ATInput
              fullWidth
              label="Current Password"
              inputProps={{ type: "password", autoComplete: "" }}
            />
          </Grid>
          <Grid item xs={12}>
            <ATInput
              fullWidth
              label="New Password"
              inputProps={{ type: "password", autoComplete: "" }}
            />
          </Grid>
          <Grid item xs={12}>
            <ATInput
              fullWidth
              label="Confirm New Password"
              inputProps={{ type: "password", autoComplete: "" }}
            />
          </Grid>
        </Grid>
        <ATBox mt={6} mb={1}>
          <ATTypography variant="h5">Password requirements</ATTypography>
        </ATBox>
        <ATBox mb={1}>
          <ATTypography variant="body2" color="text">
            Please follow this guide for a strong password
          </ATTypography>
        </ATBox>
        <ATBox display="flex" justifyContent="space-between" alignItems="flex-end" flexWrap="wrap">
          <ATBox component="ul" m={0} pl={3.25} mb={{ xs: 8, sm: 0 }}>
            {renderPasswordRequirements}
          </ATBox>
          <ATBox ml="auto">
            <ATButton variant="gradient" color="dark" size="small">
              update password
            </ATButton>
          </ATBox>
        </ATBox>
      </ATBox>
    </Card>
  );
}

export default ChangePassword;
