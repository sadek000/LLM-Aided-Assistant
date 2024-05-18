// @mui material components
import Card from "@mui/material/Card";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";

//  ALDR Tech Dashboard examples components
import DefaultItem from "examples/Items/DefaultItem";

function NextEvents(): JSX.Element {
  return (
    <Card sx={{ height: "100%" }}>
      <ATBox pt={2} px={2}>
        <ATTypography variant="h6" fontWeight="medium">
          Next events
        </ATTypography>
      </ATBox>
      <ATBox p={2}>
        <DefaultItem
          color="dark"
          icon="paid"
          title="Cyber Week"
          description="27 March 2020, at 12:30 PM"
        />
        <ATBox mt={3.5}>
          <DefaultItem
            color="dark"
            icon="notifications"
            title="Meeting with Marry"
            description="24 March 2020, at 10:00 PM"
          />
        </ATBox>
        <ATBox mt={3.5}>
          <DefaultItem
            color="dark"
            icon="menu_book"
            title="Book Deposit Hall"
            description="25 March 2021, at 9:30 AM"
          />
        </ATBox>
        <ATBox mt={3.5}>
          <DefaultItem
            color="dark"
            icon="local_shipping"
            title="Shipment Deal UK"
            description="25 March 2021, at 2:00 PM"
          />
        </ATBox>
        <ATBox mt={3.5}>
          <DefaultItem
            color="dark"
            icon="palette"
            title="Verify Dashboard Color Palette"
            description="26 March 2021, at 9:00 AM"
          />
        </ATBox>
      </ATBox>
    </Card>
  );
}

export default NextEvents;
