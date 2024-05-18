// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";

//  ALDR Tech Dashboard examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// OrderDetails page components
import Header from "layouts/ecommerce/orders/order-details/components/Header";
import OrderInfo from "layouts/ecommerce/orders/order-details/components/OrderInfo";
import TrackOrder from "layouts/ecommerce/orders/order-details/components/TrackOrder";
import PaymentDetails from "layouts/ecommerce/orders/order-details/components/PaymentDetails";
import BillingInformation from "layouts/ecommerce/orders/order-details/components/BillingInformation";
import OrderSummary from "layouts/ecommerce/orders/order-details/components/OrderSummary";

function OrderDetails(): JSX.Element {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ATBox my={6}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <ATBox pt={2} px={2}>
                <Header />
              </ATBox>
              <Divider />
              <ATBox pt={1} pb={3} px={2}>
                <ATBox mb={3}>
                  <OrderInfo />
                </ATBox>
                <Divider />
                <ATBox mt={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={3}>
                      <TrackOrder />
                    </Grid>
                    <Grid item xs={12} md={6} lg={5}>
                      <PaymentDetails />
                      <ATBox mt={3}>
                        <BillingInformation />
                      </ATBox>
                    </Grid>
                    <Grid item xs={12} lg={3} sx={{ ml: "auto" }}>
                      <OrderSummary />
                    </Grid>
                  </Grid>
                </ATBox>
              </ATBox>
            </Card>
          </Grid>
        </Grid>
      </ATBox>
      <Footer />
    </DashboardLayout>
  );
}

export default OrderDetails;
