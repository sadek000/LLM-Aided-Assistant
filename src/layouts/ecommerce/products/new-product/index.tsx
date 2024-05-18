import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Card from "@mui/material/Card";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATButton from "components/ATButton";
import ATTypography from "components/ATTypography";

//  ALDR Tech Dashboard examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// NewProduct page components
import ProductInfo from "layouts/ecommerce/products/new-product/components/ProductInfo";
import Media from "layouts/ecommerce/products/new-product/components/Media";
import Socials from "layouts/ecommerce/products/new-product/components/Socials";
import Pricing from "layouts/ecommerce/products/new-product/components/Pricing";

function getSteps(): string[] {
  return ["1. Product Info", "2. Media", "3. Social", "4. Pricing"];
}

function getStepContent(stepIndex: number): JSX.Element {
  switch (stepIndex) {
    case 0:
      return <ProductInfo />;
    case 1:
      return <Media />;
    case 2:
      return <Socials />;
    case 3:
      return <Pricing />;
    default:
      return null;
  }
}

function NewProduct(): JSX.Element {
  const [activeStep, setActiveStep] = useState<number>(0);
  const steps = getSteps();
  const isLastStep: boolean = activeStep === steps.length - 1;

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ATBox mt={5} mb={9}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <ATBox mt={6} mb={8} textAlign="center">
              <ATBox mb={1}>
                <ATTypography variant="h3" fontWeight="bold">
                  Add New Product
                </ATTypography>
              </ATBox>
              <ATTypography variant="h5" fontWeight="regular" color="secondary">
                This information will describe more about the product.
              </ATTypography>
            </ATBox>
            <Card>
              <ATBox mt={-3} mb={3} mx={2}>
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
                      <ATButton variant="gradient" color="light" onClick={handleBack}>
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

export default NewProduct;
