import { useMemo } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";

//  ALDR Tech Dashboard examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import EventCalendar from "examples/Calendar";

// Calendar application components
import Header from "layouts/applications/calendar/components/Header";
import NextEvents from "layouts/applications/calendar/components/NextEvents";
import ProductivityChart from "layouts/applications/calendar/components/ProductivityChart";

// Data
import calendarEventsData from "layouts/applications/calendar/data/calendarEventsData";

function Calendar(): JSX.Element {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ATBox pt={3}>
        <ATBox display="flex" justifyContent="flex-end" mt={1} mb={4} mx={2}>
          <Header />
        </ATBox>
        <Grid container spacing={3}>
          <Grid item xs={12} xl={9} sx={{ height: "max-content" }}>
            {useMemo(
              () => (
                <EventCalendar
                  initialView="dayGridMonth"
                  initialDate="2021-08-10"
                  events={calendarEventsData}
                  selectable
                  editable
                />
              ),
              [calendarEventsData]
            )}
          </Grid>
          <Grid item xs={12} xl={3}>
            <ATBox mb={3}>
              <NextEvents />
            </ATBox>
            <ATBox mb={3}>
              <ProductivityChart />
            </ATBox>
          </Grid>
        </Grid>
      </ATBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Calendar;
