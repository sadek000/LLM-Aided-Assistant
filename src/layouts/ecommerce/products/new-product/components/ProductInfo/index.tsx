import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATEditor from "components/ATEditor";
import ATInput from "components/ATInput";

// NewProduct page components
import FormField from "layouts/ecommerce/products/new-product/components/FormField";

function ProductInfo(): JSX.Element {
  return (
    <ATBox>
      <ATTypography variant="h5">Product Information</ATTypography>
      <ATBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="Name" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="Weight" />
          </Grid>
        </Grid>
      </ATBox>
      <ATBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <ATBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <ATTypography component="label" variant="button" fontWeight="regular" color="text">
                Description&nbsp;&nbsp;
                <ATTypography variant="caption" color="text">
                  (optional)
                </ATTypography>
              </ATTypography>
            </ATBox>
            <ATEditor />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ATBox mb={3}>
              <ATBox mb={2} display="inline-block">
                <ATTypography
                  component="label"
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  textTransform="capitalize"
                >
                  Category
                </ATTypography>
              </ATBox>
              <Autocomplete
                defaultValue="Clothing"
                options={["Clothing", "Electronics", "Furniture", "Others", "Real Estate"]}
                renderInput={(params) => <ATInput {...params} variant="standard" />}
              />
            </ATBox>
            <ATBox mb={2} display="inline-block">
              <ATTypography
                component="label"
                variant="button"
                fontWeight="regular"
                color="text"
                textTransform="capitalize"
              >
                Size
              </ATTypography>
            </ATBox>
            <Autocomplete
              defaultValue="Medium"
              options={["Extra Large", "Extra Small", "Large", "Medium", "Small"]}
              renderInput={(params) => <ATInput {...params} variant="standard" />}
            />
          </Grid>
        </Grid>
      </ATBox>
    </ATBox>
  );
}

export default ProductInfo;
