// @mui material components
import Card from "@mui/material/Card";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATInput from "components/ATInput";
import ATButton from "components/ATButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-reset-cover.jpeg";

function Cover(): JSX.Element {
  return (
    <CoverLayout coverHeight="50vh" image={bgImage}>
      <Card>
        <ATBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <ATTypography variant="h3" fontWeight="medium" color="white" mt={1}>
            Reset Password
          </ATTypography>
          <ATTypography display="block" variant="button" color="white" my={1}>
            You will receive an e-mail in maximum 60 seconds
          </ATTypography>
        </ATBox>
        <ATBox pt={4} pb={3} px={3}>
          <ATBox component="form" role="form">
            <ATBox mb={4}>
              <ATInput type="email" label="Email" variant="standard" fullWidth />
            </ATBox>
            <ATBox mt={6} mb={1}>
              <ATButton variant="gradient" color="info" fullWidth>
                reset
              </ATButton>
            </ATBox>
          </ATBox>
        </ATBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
