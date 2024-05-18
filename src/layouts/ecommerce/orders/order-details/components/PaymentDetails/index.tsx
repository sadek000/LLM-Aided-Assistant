// @mui material components
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATButton from "components/ATButton";

//  ALDR Tech Dashboard Base Styles
import borders from "assets/theme/base/borders";

// Images
import masterCardLogo from "assets/images/logos/mastercard.png";

function PaymentDetails(): JSX.Element {
  const { borderWidth, borderColor } = borders;

  return (
    <>
      <ATTypography variant="h6" fontWeight="medium">
        Payment details
      </ATTypography>
      <ATBox
        border={`${borderWidth[1]} solid ${borderColor}`}
        borderRadius="lg"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={3}
        mt={2}
      >
        <ATBox component="img" src={masterCardLogo} alt="master card" width="10%" mr={2} />
        <ATTypography variant="h6" fontWeight="medium">
          ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;7852
        </ATTypography>
        <ATBox ml="auto" lineHeight={0}>
          <Tooltip title="We do not store card details" placement="bottom">
            <ATButton variant="outlined" color="secondary" size="small" iconOnly circular>
              <Icon sx={{ cursor: "pointer" }}>priority_high</Icon>
            </ATButton>
          </Tooltip>
        </ATBox>
      </ATBox>
    </>
  );
}

export default PaymentDetails;
