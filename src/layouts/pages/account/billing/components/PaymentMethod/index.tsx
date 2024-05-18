// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATButton from "components/ATButton";

// Images
import masterCardLogo from "assets/images/logos/mastercard.png";
import visaLogo from "assets/images/logos/visa.png";

// ALDR Tech Dashboard context
import { useMaterialUIController } from "context";

function PaymentMethod(): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <Card id="delete-account">
      <ATBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <ATTypography variant="h6" fontWeight="medium">
          Payment Method
        </ATTypography>
        <ATButton variant="gradient" color="dark">
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;add new card
        </ATButton>
      </ATBox>
      <ATBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ATBox
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              }}
            >
              <ATBox component="img" src={masterCardLogo} alt="master card" width="10%" mr={2} />
              <ATTypography variant="h6" fontWeight="medium">
                ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;7852
              </ATTypography>
              <ATBox ml="auto" lineHeight={0} color={darkMode ? "white" : "dark"}>
                <Tooltip title="Edit Card" placement="top">
                  <Icon sx={{ cursor: "pointer" }} fontSize="small">
                    edit
                  </Icon>
                </Tooltip>
              </ATBox>
            </ATBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <ATBox
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              }}
            >
              <ATBox component="img" src={visaLogo} alt="master card" width="10%" mr={2} />
              <ATTypography variant="h6" fontWeight="medium">
                ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;5248
              </ATTypography>
              <ATBox ml="auto" lineHeight={0} color={darkMode ? "white" : "dark"}>
                <Tooltip title="Edit Card" placement="top">
                  <Icon sx={{ cursor: "pointer" }} fontSize="small">
                    edit
                  </Icon>
                </Tooltip>
              </ATBox>
            </ATBox>
          </Grid>
        </Grid>
      </ATBox>
    </Card>
  );
}

export default PaymentMethod;
