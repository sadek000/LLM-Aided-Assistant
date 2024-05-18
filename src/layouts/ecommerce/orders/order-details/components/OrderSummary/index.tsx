//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";

function OrderSummary(): JSX.Element {
  return (
    <>
      <ATBox mb={2}>
        <ATTypography variant="h6" fontWeight="medium">
          Order Summary
        </ATTypography>
      </ATBox>
      <ATBox display="flex" justifyContent="space-between" mb={0.5}>
        <ATTypography variant="button" fontWeight="regular" color="text">
          Product Price:
        </ATTypography>
        <ATBox ml={1}>
          <ATTypography variant="body2" fontWeight="medium">
            $90
          </ATTypography>
        </ATBox>
      </ATBox>
      <ATBox display="flex" justifyContent="space-between" mb={0.5}>
        <ATTypography variant="button" fontWeight="regular" color="text">
          Delivery:
        </ATTypography>
        <ATBox ml={1}>
          <ATTypography variant="body2" fontWeight="medium">
            $14
          </ATTypography>
        </ATBox>
      </ATBox>
      <ATBox display="flex" justifyContent="space-between" mb={0.5}>
        <ATTypography variant="button" fontWeight="regular" color="text">
          Taxes:
        </ATTypography>
        <ATBox ml={1}>
          <ATTypography variant="body2" fontWeight="medium">
            $1.95
          </ATTypography>
        </ATBox>
      </ATBox>
      <ATBox display="flex" justifyContent="space-between" mt={3}>
        <ATTypography variant="body1" fontWeight="light" color="text">
          Total:
        </ATTypography>
        <ATBox ml={1}>
          <ATTypography variant="body1" fontWeight="medium">
            $1.95
          </ATTypography>
        </ATBox>
      </ATBox>
    </>
  );
}

export default OrderSummary;
