//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATButton from "components/ATButton";

function Header(): JSX.Element {
  return (
    <ATBox display="flex" justifyContent="space-between" alignItems="center">
      <ATBox>
        <ATBox mb={1}>
          <ATTypography variant="h6" fontWeight="medium">
            Order Details
          </ATTypography>
        </ATBox>
        <ATTypography component="p" variant="button" color="text">
          Order no. <b>241342</b> from
          <b>23.02.2021</b>
        </ATTypography>
        <ATTypography component="p" variant="button" fontWeight="regular" color="text">
          Code: <b>KF332</b>
        </ATTypography>
      </ATBox>
      <ATButton variant="gradient" color="dark">
        invoice
      </ATButton>
    </ATBox>
  );
}

export default Header;
