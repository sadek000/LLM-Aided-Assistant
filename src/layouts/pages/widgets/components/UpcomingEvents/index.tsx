// @mui material components
import Card from "@mui/material/Card";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";

//  ALDR Tech Dashboard examples components
import DefaultItem from "examples/Items/DefaultItem";

function UpcomingEvents(): JSX.Element {
  return (
    <Card sx={{ height: "100%" }}>
      <ATBox pt={2} px={2} lineHeight={1}>
        <ATTypography variant="h6" fontWeight="medium">
          Upcoming events
        </ATTypography>
        <ATTypography variant="button" color="text" fontWeight="regular">
          Joined
        </ATTypography>
      </ATBox>
      <ATBox p={2}>
        <DefaultItem
          color="dark"
          icon="savings"
          title="Cyber Week"
          description="27 March 2020, at 12:30 PM"
        />
        <ATBox mt={2.5}>
          <DefaultItem
            color="dark"
            icon="notifications_active"
            title="Meeting with Marry"
            description="24 March 2020, at 10:00 PM"
          />
        </ATBox>
        <ATBox mt={2.5}>
          <DefaultItem
            color="dark"
            icon="task"
            title="Tasks planification"
            description="24 March 2020, at 12:30 AM"
          />
        </ATBox>
      </ATBox>
    </Card>
  );
}

export default UpcomingEvents;
