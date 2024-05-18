// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";

//  ALDR Tech Dashboard examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// ProductPage page components
import ProductImages from "layouts/ecommerce/products/product-page/components/ProductImages";
import ProductInfo from "layouts/ecommerce/products/product-page/components/ProductInfo";

// Data
import dataTableData from "layouts/ecommerce/products/product-page/data/dataTableData";

function ProductPage(): JSX.Element {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ATBox py={3}>
        <Card sx={{ overflow: "visible" }}>
          <ATBox p={3}>
            <ATBox mb={3}>
              <ATTypography variant="h5" fontWeight="medium">
                Product Details
              </ATTypography>
            </ATBox>

            <Grid container spacing={3}>
              <Grid item xs={12} lg={6} xl={5}>
                <ProductImages />
              </Grid>
              <Grid item xs={12} lg={5} sx={{ mx: "auto" }}>
                <ProductInfo />
              </Grid>
            </Grid>

            <ATBox mt={8} mb={2}>
              <ATBox mb={1} ml={2}>
                <ATTypography variant="h5" fontWeight="medium">
                  Other Products
                </ATTypography>
              </ATBox>
              <DataTable
                table={dataTableData}
                entriesPerPage={false}
                showTotalEntries={false}
                isSorted={false}
              />
            </ATBox>
          </ATBox>
        </Card>
      </ATBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ProductPage;
