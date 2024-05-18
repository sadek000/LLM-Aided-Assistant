// @mui material components
import Card from "@mui/material/Card";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";

// Billing page components
import Bill from "layouts/pages/account/billing/components/Bill";

function BillingInformation(): JSX.Element {
  return (
    <Card id="delete-account">
      <ATBox pt={3} px={2}>
        <ATTypography variant="h6" fontWeight="medium">
          Billing Information
        </ATTypography>
      </ATBox>
      <ATBox pt={1} pb={2} px={2}>
        <ATBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="oliver liam"
            company="viking burrito"
            email="oliver@burrito.com"
            vat="FRB1235476"
          />
          <Bill
            name="lucas harper"
            company="stone tech zone"
            email="lucas@stone-tech.com"
            vat="FRB1235476"
          />
          <Bill
            name="ethan james"
            company="fiber notion"
            email="ethan@fiber.com"
            vat="FRB1235476"
            noGutter
          />
        </ATBox>
      </ATBox>
    </Card>
  );
}

export default BillingInformation;
