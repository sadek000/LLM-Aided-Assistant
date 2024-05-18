// @mui material components
import Grid from "@mui/material/Grid";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";

function Footer(): JSX.Element {
  return (
    <ATBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <ATBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
            <ATBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <ATTypography
                component="a"
                href="#"
                variant="body2"
                fontWeight="regular"
                color="secondary"
              >
                Company
              </ATTypography>
            </ATBox>
            <ATBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <ATTypography
                component="a"
                href="#"
                variant="body2"
                fontWeight="regular"
                color="secondary"
              >
                About Us
              </ATTypography>
            </ATBox>
            <ATBox mr={{ xs: 0, lg: 3, xl: 6 }}>
              <ATTypography
                component="a"
                href="#"
                variant="body2"
                fontWeight="regular"
                color="secondary"
              >
                Team
              </ATTypography>
            </ATBox>
            <ATBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <ATTypography
                component="a"
                href="#"
                variant="body2"
                fontWeight="regular"
                color="secondary"
              >
                Product
              </ATTypography>
            </ATBox>
            <ATBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <ATTypography
                component="a"
                href="#"
                variant="body2"
                fontWeight="regular"
                color="secondary"
              >
                Blog
              </ATTypography>
            </ATBox>
            <ATBox>
              <ATTypography
                component="a"
                href="#"
                variant="body2"
                fontWeight="regular"
                color="secondary"
              >
                Pricing
              </ATTypography>
            </ATBox>
          </ATBox>
        </Grid>
        <Grid item xs={12} lg={8}>
          <ATBox display="flex" justifyContent="center" mt={1} mb={3}>
            <ATBox mr={3} color="secondary">
              <FacebookIcon fontSize="small" />
            </ATBox>
            <ATBox mr={3} color="secondary">
              <TwitterIcon fontSize="small" />
            </ATBox>
            <ATBox mr={3} color="secondary">
              <InstagramIcon fontSize="small" />
            </ATBox>
            <ATBox mr={3} color="secondary">
              <PinterestIcon fontSize="small" />
            </ATBox>
            <ATBox color="secondary">
              <LinkedInIcon fontSize="small" />
            </ATBox>
          </ATBox>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <ATTypography variant="body2" color="secondary">
            Copyright &copy; 2023 By ALDR Tech.
          </ATTypography>
        </Grid>
      </Grid>
    </ATBox>
  );
}

export default Footer;
