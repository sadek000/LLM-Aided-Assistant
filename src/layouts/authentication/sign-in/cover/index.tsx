import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATInput from "components/ATInput";
import ATButton from "components/ATButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-in-cover.jpeg";

function Cover(): JSX.Element {
  const [rememberMe, setRememberMe] = useState<boolean>(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <ATBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <ATTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </ATTypography>
          <ATTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to Sign In
          </ATTypography>
        </ATBox>
        <ATBox pt={4} pb={3} px={3}>
          <ATBox component="form" role="form">
            <ATBox mb={2}>
              <ATInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
                placeholder="john@example.com"
                InputLabelProps={{ shrink: true }}
              />
            </ATBox>
            <ATBox mb={2}>
              <ATInput
                type="password"
                label="Password"
                variant="standard"
                fullWidth
                placeholder="************"
                InputLabelProps={{ shrink: true }}
              />
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
    </CoverLayout>
  );
}

export default Cover;
