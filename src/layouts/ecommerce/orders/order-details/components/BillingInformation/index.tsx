//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";

// ALDR Tech Dashboard context
import { useMaterialUIController } from "context";

function BillingInformation(): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <>
      <ATTypography variant="h6" fontWeight="medium">
        Billing Information
      </ATTypography>
      <ATBox
        component="li"
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        bgColor={darkMode ? "transparent" : "grey-100"}
        borderRadius="lg"
        p={3}
        mt={2}
      >
        <ATBox width="100%" display="flex" flexDirection="column" lineHeight={1}>
          <ATBox mb={2}>
            <ATTypography variant="button" fontWeight="medium" textTransform="capitalize">
              Oliver Liam
            </ATTypography>
          </ATBox>
          <ATBox mb={1} lineHeight={0}>
            <ATTypography variant="caption" fontWeight="regular" color="text">
              Company Name:&nbsp;&nbsp;&nbsp;
              <ATTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                Viking Burrito
              </ATTypography>
            </ATTypography>
          </ATBox>
          <ATBox mb={1} lineHeight={0}>
            <ATTypography variant="caption" fontWeight="regular" color="text">
              Email Address:&nbsp;&nbsp;&nbsp;
              <ATTypography variant="caption" fontWeight="medium">
                oliver@burrito.com
              </ATTypography>
            </ATTypography>
          </ATBox>
          <ATTypography variant="caption" fontWeight="regular" color="text">
            VAT Number:&nbsp;&nbsp;&nbsp;
            <ATTypography variant="caption" fontWeight="medium">
              FRB1235476
            </ATTypography>
          </ATTypography>
        </ATBox>
      </ATBox>
    </>
  );
}

export default BillingInformation;
