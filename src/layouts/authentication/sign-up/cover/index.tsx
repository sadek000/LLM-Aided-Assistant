// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATInput from "components/ATInput";
import ATButton from "components/ATButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function Cover(): JSX.Element {
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
            Join us today
          </ATTypography>
          <ATTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </ATTypography>
        </ATBox>
        <ATBox pt={4} pb={3} px={3}>
          <ATBox component="form" role="form">
            <ATBox mb={2}>
              <ATInput type="text" label="Name" variant="standard" fullWidth />
            </ATBox>
            <ATBox mb={2}>
              <ATInput type="email" label="Email" variant="standard" fullWidth />
            </ATBox>
            <ATBox mb={2}>
              <ATInput type="password" label="Password" variant="standard" fullWidth />
            </ATBox>
            <ATBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <ATTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </ATTypography>
              <ATTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </ATTypography>
            </ATBox>
            <ATBox mt={4} mb={1}>
              <ATButton variant="gradient" color="info" fullWidth>
                sign in
              </ATButton>
            </ATBox>
            <ATBox mt={3} mb={1} textAlign="center">
              <ATTypography variant="button" color="text">
                Already have an account?{" "}
                <ATTypography
                  component={Link}
                  to="/authentication/sign-in/cover"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
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
