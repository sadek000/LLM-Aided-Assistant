// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";

//  ALDR Tech Dashboard examples components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview(): JSX.Element {
  return (
    <Card sx={{ height: "100%" }}>
      <ATBox pt={3} px={3}>
        <ATTypography variant="h6" fontWeight="medium">
          Orders overview
        </ATTypography>
        <ATBox mt={0} mb={2}>
          <ATTypography variant="button" color="text" fontWeight="regular">
            <ATTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </ATTypography>
            &nbsp;
            <ATTypography variant="button" color="text" fontWeight="medium">
              24%
            </ATTypography>{" "}
            this month
          </ATTypography>
        </ATBox>
      </ATBox>
      <ATBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="$2400, Design changes"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="New order #1832412"
          dateTime="21 DEC 11 PM"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="Server payments for April"
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="New card added for order #4395133"
          dateTime="20 DEC 2:20 AM"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="New card added for order #4395133"
          dateTime="18 DEC 4:54 AM"
          lastItem
        />
      </ATBox>
    </Card>
  );
}

export default OrdersOverview;
