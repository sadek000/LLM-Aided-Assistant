/* eslint-disable no-unused-vars */
import { ReactNode } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";

//  ALDR Tech Dashboard examples components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// ALDR Tech Dashboard page layout routes
import pageRoutes from "page.routes";

// Images
import bgImage from "assets/images/bg-pricing.jpg";

// Declaring props types for Header
interface Props {
  tabValue: number;
  tabHandler: (...arg: any) => void;
  children: ReactNode;
}

function Header({ tabValue, tabHandler, children }: Props): JSX.Element {
  return (
    <>
      <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "",
          label: "buy now",
          color: "light",
        }}
        transparent
        light
      />
      <ATBox
        position="relative"
        minHeight="50vh"
        height="50vh"
        borderRadius="xl"
        m={2}
        pt={2}
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { black } }) =>
            `${linearGradient(rgba(black.main, 0.25), rgba(black.main, 0.25))}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ position: "relative", py: 22, textAlign: "center" }}
        >
          <Grid item xs={11} lg={5}>
            <ATBox mb={1}>
              <ATTypography variant="h2" color="white" fontWeight="bold">
                Pick the best plan for you
              </ATTypography>
            </ATBox>
            <ATBox mb={2}>
              <ATTypography variant="body2" color="white" fontWeight="light">
                You have Free Unlimited Updates and Premium Support on each package.
              </ATTypography>
            </ATBox>
          </Grid>
        </Grid>
      </ATBox>
      <Grid container sx={{ px: 6, my: 8 }}>
        <Grid item xs={12}>
          <Card sx={{ mt: -16 }}>
            <ATBox minWidth={{ xs: "22rem", md: "25rem" }} mx="auto" mt={6}>
              <AppBar position="static">
                <Tabs value={tabValue} onChange={tabHandler}>
                  <Tab
                    id="monthly"
                    label={
                      <ATBox py={0.5} px={2} color="inherit">
                        Monthly
                      </ATBox>
                    }
                  />
                  <Tab
                    id="annual"
                    label={
                      <ATBox py={0.5} px={2} color="inherit">
                        Annual
                      </ATBox>
                    }
                  />
                </Tabs>
              </AppBar>
            </ATBox>
            {children}
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
