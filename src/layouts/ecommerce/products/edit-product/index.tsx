// @mui material components
import Grid from "@mui/material/Grid";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATButton from "components/ATButton";

//  ALDR Tech Dashboard examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// EditProduct page components
import ProductImage from "layouts/ecommerce/products/edit-product/components/ProductImage";
import ProductInfo from "layouts/ecommerce/products/edit-product/components/ProductInfo";
import Socials from "layouts/ecommerce/products/edit-product/components/Socials";
import Pricing from "layouts/ecommerce/products/edit-product/components/Pricing";

function EditProduct(): JSX.Element {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ATBox my={3}>
        <ATBox mb={6}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={6}>
              <ATTypography variant="h4" fontWeight="medium">
                Make the changes below
              </ATTypography>
              <ATBox mt={1} mb={2}>
                <ATTypography variant="body2" color="text">
                  We’re constantly trying to express ourselves and actualize our dreams. If you have
                  the opportunity to play.
                </ATTypography>
              </ATBox>
            </Grid>
            <Grid item xs={12} lg={6}>
              <ATBox display="flex" justifyContent="flex-end">
                <ATButton variant="gradient" color="info">
                  save
                </ATButton>
              </ATBox>
            </Grid>
          </Grid>
        </ATBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <ProductImage />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductInfo />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Socials />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Pricing />
          </Grid>
        </Grid>
      </ATBox>
      <Footer />
    </DashboardLayout>
  );
}

export default EditProduct;
