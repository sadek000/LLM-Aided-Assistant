import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATButton from "components/ATButton";

//  ALDR Tech Dashboard examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Wizard page components
import About from "layouts/applications/wizard/components/About";
import Account from "layouts/applications/wizard/components/Account";
import Address from "layouts/applications/wizard/components/Address";

function getSteps(): string[] {
  return ["About", "Account", "Address"];
}

function getStepContent(stepIndex: number): JSX.Element {
  switch (stepIndex) {
    case 0:
      return <About />;
    case 1:
      return <Account />;
    case 2:
      return <Address />;
    default:
      return null;
  }
}

function Wizard(): JSX.Element {
  const [activeStep, setActiveStep] = useState<number>(0);
  const steps = getSteps();
  const isLastStep: boolean = activeStep === steps.length - 1;

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ATBox pt={3} pb={8}>
        <Grid container justifyContent="center" sx={{ my: 4 }}>
          <Grid item xs={12} lg={8}>
            <ATBox mt={6} mb={8} textAlign="center">
              <ATBox mb={1}>
                <ATTypography variant="h3" fontWeight="bold">
                  Build Your Profile
                </ATTypography>
              </ATBox>
              <ATTypography variant="h5" fontWeight="regular" color="secondary">
                This information will let us know more about you.
              </ATTypography>
            </ATBox>
            <Card>
              <ATBox mt={-3} mx={2}>
                <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </ATBox>
              <ATBox p={2}>
                <ATBox>
                  {getStepContent(activeStep)}
                  <ATBox mt={3} width="100%" display="flex" justifyContent="space-between">
                    {activeStep === 0 ? (
                      <ATBox />
                    ) : (
                      <ATButton variant="outlined" color="dark" onClick={handleBack}>
                        back
                      </ATButton>
                    )}
                    <ATButton
                      variant="gradient"
                      color="dark"
                      onClick={!isLastStep ? handleNext : undefined}
                    >
                      {isLastStep ? "send" : "next"}
                    </ATButton>
                  </ATBox>
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

export default Wizard;
