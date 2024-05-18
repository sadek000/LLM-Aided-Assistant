import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATInput from "components/ATInput";
import ATButton from "components/ATButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Image
import bgImage from "assets/images/illustrations/illustration-reset.jpg";

function Illustration(): JSX.Element {
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your email and password to sign in"
      illustration={bgImage}
    >
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
          <ATButton variant="gradient" color="info" size="large" fullWidth>
            sign in
          </ATButton>
        </ATBox>
        <ATBox mt={3} textAlign="center">
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
    </IllustrationLayout>
  );
}

export default Illustration;
