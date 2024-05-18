// @mui material components
import Icon from "@mui/material/Icon";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";

// Declaring props types for Invoice
interface Props {
  date: string;
  id: string;
  price: string;
  noGutter?: boolean;
}

function Invoice({ date, id, price, noGutter }: Props): JSX.Element {
  return (
    <ATBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={1}
      pr={1}
      mb={noGutter ? 0 : 1}
    >
      <ATBox lineHeight={1.125}>
        <ATTypography display="block" variant="button" fontWeight="medium">
          {date}
        </ATTypography>
        <ATTypography variant="caption" fontWeight="regular" color="text">
          {id}
        </ATTypography>
      </ATBox>
      <ATBox display="flex" alignItems="center">
        <ATTypography variant="button" fontWeight="regular" color="text">
          {price}
        </ATTypography>
        <ATBox display="flex" alignItems="center" lineHeight={1} ml={3} sx={{ cursor: "pointer" }}>
          <Icon fontSize="small">picture_as_pdf</Icon>
          <ATTypography variant="button" fontWeight="bold">
            &nbsp;PDF
          </ATTypography>
        </ATBox>
      </ATBox>
    </ATBox>
  );
}

// Declaring default props for Invoice
Invoice.defaultProps = {
  noGutter: false,
};

export default Invoice;
