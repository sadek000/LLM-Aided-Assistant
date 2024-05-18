// @mui material components
import Card from "@mui/material/Card";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATButton from "components/ATButton";

// Billing page components
import Invoice from "layouts/pages/account/billing/components/Invoice";

function Invoices(): JSX.Element {
  return (
    <Card sx={{ height: "100%" }}>
      <ATBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <ATTypography variant="h6" fontWeight="medium">
          Invoices
        </ATTypography>
        <ATButton variant="outlined" color="info" size="small">
          view all
        </ATButton>
      </ATBox>
      <ATBox p={2}>
        <ATBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="March, 01, 2020" id="#MS-415646" price="$180" />
          <Invoice date="February, 10, 2021" id="#RV-126749" price="$250" />
          <Invoice date="April, 05, 2020" id="#QW-103578" price="$120" />
          <Invoice date="June, 25, 2019" id="#MS-415646" price="$180" />
          <Invoice date="March, 01, 2019" id="#AR-803481" price="$300" noGutter />
        </ATBox>
      </ATBox>
    </Card>
  );
}

export default Invoices;
