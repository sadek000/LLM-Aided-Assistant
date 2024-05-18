// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATInput from "components/ATInput";

// NewProduct page components
import FormField from "layouts/ecommerce/products/edit-product/components/FormField";

function Pricing(): JSX.Element {
  return (
    <Card sx={{ overflow: "visible" }}>
      <ATBox p={3}>
        <ATTypography variant="h5" fontWeight="bold">
          Pricing
        </ATTypography>
        <ATBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <FormField type="number" label="Price" defaultValue="99.00" />
            </Grid>
            <Grid item xs={12} sm={4} sx={{ mt: 2 }}>
              <Autocomplete
                defaultValue="USD"
                options={["BTC", "CNY", "EUR", "GBP", "INR", "USD"]}
                renderInput={(params) => <ATInput {...params} variant="standard" />}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <FormField type="text" label="SKU" defaultValue="71283476591" />
            </Grid>
          </Grid>
        </ATBox>
        <ATBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ATBox my={2} display="inline-block">
                <ATTypography component="label" variant="button" fontWeight="regular" color="text">
                  Tags
                </ATTypography>
              </ATBox>
              <Autocomplete
                multiple
                defaultValue={["In Stock", "Out of Stock"]}
                options={["Black Friday", "Expired", "Out of Stock", "In Stock", "Sale"]}
                renderInput={(params) => <ATInput {...params} variant="standard" />}
              />
            </Grid>
          </Grid>
        </ATBox>
      </ATBox>
    </Card>
  );
}

export default Pricing;
