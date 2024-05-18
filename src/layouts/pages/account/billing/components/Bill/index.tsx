// @mui material components
import Icon from "@mui/material/Icon";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATButton from "components/ATButton";

// ALDR Tech Dashboard context
import { useMaterialUIController } from "context";

// Declaring props types for Bill
interface Props {
  name: string;
  company: string;
  email: string;
  vat: string;
  noGutter?: boolean;
}

function Bill({ name, company, email, vat, noGutter }: Props): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <ATBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      bgColor={darkMode ? "transparent" : "grey-100"}
      borderRadius="lg"
      p={3}
      mb={noGutter ? 0 : 1}
      mt={2}
    >
      <ATBox width="100%" display="flex" flexDirection="column">
        <ATBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={2}
        >
          <ATTypography variant="button" fontWeight="medium" textTransform="capitalize">
            {name}
          </ATTypography>

          <ATBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <ATBox mr={1}>
              <ATButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;delete
              </ATButton>
            </ATBox>
            <ATButton variant="text" color={darkMode ? "white" : "dark"}>
              <Icon>edit</Icon>&nbsp;edit
            </ATButton>
          </ATBox>
        </ATBox>
        <ATBox mb={1} lineHeight={0}>
          <ATTypography variant="caption" color="text">
            Company Name:&nbsp;&nbsp;&nbsp;
            <ATTypography variant="caption" fontWeight="medium" textTransform="capitalize">
              {company}
            </ATTypography>
          </ATTypography>
        </ATBox>
        <ATBox mb={1} lineHeight={0}>
          <ATTypography variant="caption" color="text">
            Email Address:&nbsp;&nbsp;&nbsp;
            <ATTypography variant="caption" fontWeight="medium">
              {email}
            </ATTypography>
          </ATTypography>
        </ATBox>
        <ATTypography variant="caption" color="text">
          VAT Number:&nbsp;&nbsp;&nbsp;
          <ATTypography variant="caption" fontWeight="medium">
            {vat}
          </ATTypography>
        </ATTypography>
      </ATBox>
    </ATBox>
  );
}

// Declaring default props for Bill
Bill.defaultProps = {
  noGutter: false,
};

export default Bill;
