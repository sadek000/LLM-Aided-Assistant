// @mui material components
import Grid from "@mui/material/Grid";

//  ALDR Tech Dashboard React components
import ATBox from "components/ATBox";

//  ALDR Tech Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import TimelineList from "examples/Timeline/TimelineList";
import TimelineItem from "examples/Timeline/TimelineItem";

// Data
import timelineData from "layouts/pages/projects/timeline/data/timelineData";

function Timeline(): JSX.Element {
  const renderTimelineItems = timelineData.map(
    ({ color, icon, title, dateTime, description, lastItem }) => (
      <TimelineItem
        key={title + color}
        color={color}
        icon={icon}
        title={title}
        dateTime={dateTime}
        description={description}
        lastItem={lastItem}
      />
    )
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ATBox my={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <TimelineList title="Timeline with dotted line">{renderTimelineItems}</TimelineList>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TimelineList title="Timeline with dotted line" dark>
              {renderTimelineItems}
            </TimelineList>
          </Grid>
        </Grid>
      </ATBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Timeline;
