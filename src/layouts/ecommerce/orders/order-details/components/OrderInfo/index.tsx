// @mui material components
import Grid from "@mui/material/Grid";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATButton from "components/ATButton";
import ATAvatar from "components/ATAvatar";
import ATBadge from "components/ATBadge";

// Images
import orderImage from "assets/images/product-12.jpg";

function OrderInfo(): JSX.Element {
  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} md={6}>
        <ATBox display="flex" alignItems="center">
          <ATBox mr={2}>
            <ATAvatar size="xxl" src={orderImage} alt="Gold Glasses" />
          </ATBox>
          <ATBox lineHeight={1}>
            <ATTypography variant="h6" fontWeight="medium">
              Gold Glasses
            </ATTypography>
            <ATBox mb={2}>
              <ATTypography variant="button" color="text">
                Order was delivered 2 days ago.
              </ATTypography>
            </ATBox>
            <ATBadge
              variant="gradient"
              color="success"
              size="xs"
              badgeContent="delivered"
              container
            />
          </ATBox>
        </ATBox>
      </Grid>
      <Grid item xs={12} md={6} sx={{ textAlign: "right" }}>
        <ATButton variant="gradient" color="dark" size="small">
          contact us
        </ATButton>
        <ATBox mt={0.5}>
          <ATTypography variant="button" color="text">
            Do you like the product? Leave us a review{" "}
            <ATTypography component="a" href="#" variant="button" color="text" fontWeight="regular">
              here
            </ATTypography>
            .
          </ATTypography>
        </ATBox>
      </Grid>
    </Grid>
  );
}

export default OrderInfo;
