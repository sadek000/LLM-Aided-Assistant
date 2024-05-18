import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Autocomplete from "@mui/material/Autocomplete";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATEditor from "components/ATEditor";
import ATInput from "components/ATInput";

// NewProduct page components
import FormField from "layouts/ecommerce/products/edit-product/components/FormField";

function ProductInfo(): JSX.Element {
  return (
    <Card>
      <ATBox p={3}>
        <ATTypography variant="h5">Product Information</ATTypography>
        <ATBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormField type="text" label="Name" defaultValue="Minimal Bar Stool" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField type="number" label="Weight" defaultValue={2} />
            </Grid>
          </Grid>
        </ATBox>
        <ATBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <FormField type="text" label="Collection" defaultValue="Summer" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormField type="text" label="Price" defaultValue="$90" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormField type="number" label="Quantity" defaultValue={50} />
            </Grid>
          </Grid>
        </ATBox>
        <ATBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <ATBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <ATTypography component="label" variant="button" fontWeight="regular" color="text">
                  Description&nbsp;&nbsp;
                  <ATTypography variant="caption" fontWeight="regular" color="text">
                    (optional)
                  </ATTypography>
                </ATTypography>
              </ATBox>
              <ATEditor />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ATBox mb={3}>
                <ATBox mb={1.625} display="inline-block">
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
              <ATBox mb={1.625} display="inline-block">
                <ATTypography
                  component="label"
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  textTransform="capitalize"
                >
                  Color
                </ATTypography>
              </ATBox>
              <Autocomplete
                defaultValue="Black"
                options={["Black", "Blue", "Green", "Orange", "White"]}
                renderInput={(params) => <ATInput {...params} variant="standard" />}
              />
            </Grid>
          </Grid>
        </ATBox>
      </ATBox>
    </Card>
  );
}

export default ProductInfo;
