import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATInput from "components/ATInput";
import ATButton from "components/ATButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Basic(): JSX.Element {
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <ATBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <ATTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </ATTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <ATTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </ATTypography>
            </Grid>
            <Grid item xs={2}>
              <ATTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </ATTypography>
            </Grid>
            <Grid item xs={2}>
              <ATTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </ATTypography>
            </Grid>
          </Grid>
        </ATBox>
        <ATBox pt={4} pb={3} px={3}>
          <ATBox component="form" role="form">
            <ATBox mb={2}>
              <ATInput type="email" label="Email" fullWidth />
            </ATBox>
            <ATBox mb={2}>
              <ATInput type="password" label="Password" fullWidth />
            </ATBox>
            <ATBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <ATTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </ATTypography>
            </ATBox>
            <ATBox mt={4} mb={1}>
              <ATButton variant="gradient" color="info" fullWidth>
                sign in
              </ATButton>
            </ATBox>
            <ATBox mt={3} mb={1} textAlign="center">
              <ATTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <ATTypography
                  component={Link}
                  to="/authentication/sign-up/cover"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </ATTypography>
              </ATTypography>
            </ATBox>
          </ATBox>
        </ATBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
