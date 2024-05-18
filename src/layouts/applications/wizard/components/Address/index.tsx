// @mui material components
import Grid from "@mui/material/Grid";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";

// Wizard application components
import FormField from "layouts/applications/wizard/components/FormField";

function Address(): JSX.Element {
  return (
    <ATBox>
      <ATBox width="80%" textAlign="center" mx="auto" my={4}>
        <ATBox mb={1}>
          <ATTypography variant="h5" fontWeight="regular">
            Are you living in a nice area?
          </ATTypography>
        </ATBox>
        <ATTypography variant="body2" color="text">
          One thing I love about the later sunsets is the chance to go for a walk through the
          neighborhood woods before dinner
        </ATTypography>
      </ATBox>
      <ATBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <FormField type="text" label="Street Name" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormField type="number" label="Street Number" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} md={7}>
            <FormField type="text" label="City" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} md={5}>
            <FormField type="text" label="Country" InputLabelProps={{ shrink: true }} />
          </Grid>
        </Grid>
      </ATBox>
    </ATBox>
  );
}

export default Address;
