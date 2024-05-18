// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";

// EditProduct page components
import FormField from "layouts/ecommerce/products/edit-product/components/FormField";

function Socials(): JSX.Element {
  return (
    <Card>
      <ATBox p={3}>
        <ATTypography variant="h5" fontWeight="bold">
          Socials
        </ATTypography>
        <ATBox mt={1}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormField type="text" label="Shoppify Handle" defaultValue="@soft" />
            </Grid>
            <Grid item xs={12}>
              <FormField type="text" label="Facebook Account" defaultValue="https://..." />
            </Grid>
            <Grid item xs={12}>
              <FormField type="text" label="Instagram Account" defaultValue="https://..." />
            </Grid>
          </Grid>
        </ATBox>
      </ATBox>
    </Card>
  );
}

export default Socials;
