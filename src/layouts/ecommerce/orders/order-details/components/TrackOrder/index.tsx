//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";

//  ALDR Tech Dashboard examples components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview(): JSX.Element {
  return (
    <>
      <ATTypography variant="h6" fontWeight="medium">
        Track order
      </ATTypography>
      <ATBox mt={2}>
        <TimelineItem
          color="secondary"
          icon="notifications"
          title="Order received"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          color="secondary"
          icon="inventory_2"
          title="Generate order id #1832412"
          dateTime="22 DEC 7:21 AM"
        />
        <TimelineItem
          color="secondary"
          icon="shopping_cart"
          title="Order transmited to courier"
          dateTime="22 DEC 8:10 AM"
        />
        <TimelineItem
          color="success"
          icon="done"
          title="Order delivered"
          dateTime="22 DEC 4:54 PM"
          lastItem
        />
      </ATBox>
    </>
  );
}

export default OrdersOverview;
