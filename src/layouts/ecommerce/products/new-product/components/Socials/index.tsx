// @mui material components
import Grid from "@mui/material/Grid";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";

// NewProduct page components
import FormField from "layouts/ecommerce/products/new-product/components/FormField";

function Socials(): JSX.Element {
  return (
    <ATBox>
      <ATTypography variant="h5" fontWeight="bold">
        Socials
      </ATTypography>
      <ATBox mt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormField type="text" label="Shoppify Handle" />
          </Grid>
          <Grid item xs={12}>
            <FormField type="text" label="Facebook Account" />
          </Grid>
          <Grid item xs={12}>
            <FormField type="text" label="Instagram Account" />
          </Grid>
        </Grid>
      </ATBox>
    </ATBox>
  );
}

export default Socials;
