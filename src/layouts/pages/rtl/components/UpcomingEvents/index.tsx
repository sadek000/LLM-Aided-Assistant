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
          الأحداث القادمة
        </ATTypography>
        <ATTypography variant="button" color="text" fontWeight="regular">
          انضم
        </ATTypography>
      </ATBox>
      <ATBox p={2}>
        <DefaultItem
          color="dark"
          icon="savings"
          title="أسبوع الإنترنت"
          description="01 يونيو 2021, ي 12:30 PM"
        />
        <ATBox mt={2.5}>
          <DefaultItem
            color="dark"
            icon="notifications_active"
            title="لقاء مع ماري"
            description="24 مايو 2021, ي 10:00 PM"
          />
        </ATBox>
        <ATBox mt={2.5}>
          <DefaultItem
            color="dark"
            icon="task"
            title="تخطيط المهمة"
            description="25 مايو 2021, ي 10:00 PM"
          />
        </ATBox>
      </ATBox>
    </Card>
  );
}

export default UpcomingEvents;
