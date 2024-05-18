import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATButton from "components/ATButton";

//  ALDR Tech Dashboard examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexProjectCard from "examples/Cards/ProjectCards/ComplexProjectCard";

// Project page components
import Header from "layouts/pages/profile/components/Header";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import team5 from "assets/images/team-5.jpg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAsana from "assets/images/small-logos/logo-asana.svg";
import logoInvision from "assets/images/small-logos/logo-invision.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";

function AllProjects(): JSX.Element {
  // ComplexProjectCard dropdown menu state
  const [slackBotMenu, setSlackBotMenu] = useState(null);
  const [premiumSupportMenu, setPremiumSupportMenu] = useState(null);
  const [designToolsMenu, setDesignToolsMenu] = useState(null);
  const [lookingGreatMenu, setLookingGreatMenu] = useState(null);
  const [developerFirstMenu, setDeveloperFirstMenu] = useState(null);

  // TeamProfileCard dropdown menu handlers
  const openSlackBotMenu = (event: any) => setSlackBotMenu(event.currentTarget);
  const closeSlackBotMenu = () => setSlackBotMenu(null);
  const openPremiumSupportMenu = (event: any) => setPremiumSupportMenu(event.currentTarget);
  const closePremiumSupportMenu = () => setPremiumSupportMenu(null);
  const openDesignToolsMenu = (event: any) => setDesignToolsMenu(event.currentTarget);
  const closeDesignToolsMenu = () => setDesignToolsMenu(null);
  const openLookingGreatMenu = (event: any) => setLookingGreatMenu(event.currentTarget);
  const closeLookingGreatMenu = () => setLookingGreatMenu(null);
  const openDeveloperFirstMenu = (event: any) => setDeveloperFirstMenu(event.currentTarget);
  const closeDeveloperFirstMenu = () => setDeveloperFirstMenu(null);

  // Dropdown menu template for the ComplexProjectCard
  const renderMenu = (state: any, close: any) => (
    <Menu
      anchorEl={state}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(state)}
      onClose={close}
      keepMounted
    >
      <MenuItem onClick={close}>Action</MenuItem>
      <MenuItem onClick={close}>Another action</MenuItem>
      <MenuItem onClick={close}>Something else here</MenuItem>
    </Menu>
  );

  return (
    <DashboardLayout>
      <ATBox width="calc(100% - 48px)" position="absolute" top="1.75rem">
        <DashboardNavbar light absolute />
      </ATBox>
      <Header />
      <ATBox pb={3}>
        <Grid container alignItems="center">
          <Grid item xs={12} md={7}>
            <ATBox mb={1}>
              <ATTypography variant="h5">Some of Our Awesome Projects</ATTypography>
            </ATBox>
            <ATBox mb={2}>
              <ATTypography variant="body2" color="text">
                This is the paragraph where you can write more details about your projects. Keep you
                user engaged by providing meaningful information.
              </ATTypography>
            </ATBox>
          </Grid>
          <Grid item xs={12} md={5} sx={{ textAlign: "right" }}>
            <ATButton variant="gradient" color="info">
              <Icon>add</Icon>&nbsp; Add New
            </ATButton>
          </Grid>
        </Grid>
        <ATBox mt={5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <ATBox mb={1.5} mt={1.5}>
                <ComplexProjectCard
                  image={logoSlack}
                  title="slack bot"
                  description="If everything I did failed - which it doesn't, I think that it actually succeeds."
                  dateTime="02.03.22"
                  members={[team1, team2, team3, team4, team5]}
                  dropdown={{
                    action: openSlackBotMenu,
                    menu: renderMenu(slackBotMenu, closeSlackBotMenu),
                  }}
                />
              </ATBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ATBox mb={1.5} mt={1.5}>
                <ComplexProjectCard
                  image={logoSpotify}
                  title="premium support"
                  description="Pink is obviously a better color. Everyone’s born confident, and everything’s taken away from you."
                  dateTime="22.11.21"
                  members={[team1, team2, team3]}
                  dropdown={{
                    action: openPremiumSupportMenu,
                    menu: renderMenu(premiumSupportMenu, closePremiumSupportMenu),
                  }}
                />
              </ATBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ATBox mb={1.5} mt={1.5}>
                <ComplexProjectCard
                  image={logoXD}
                  title="design tools"
                  description="Constantly growing. We’re constantly making mistakes from which we learn and improve."
                  dateTime="06.03.20"
                  members={[team1, team2, team3, team4]}
                  dropdown={{
                    action: openDesignToolsMenu,
                    menu: renderMenu(designToolsMenu, closeDesignToolsMenu),
                  }}
                />
              </ATBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ATBox mb={1.5} mt={1.5}>
                <ComplexProjectCard
                  image={logoAsana}
                  title="looking great"
                  description="You have the opportunity to play this game of life you need to appreciate every moment."
                  dateTime="14.03.24"
                  members={[team1, team2, team3, team4, team5, team3]}
                  dropdown={{
                    action: openLookingGreatMenu,
                    menu: renderMenu(lookingGreatMenu, closeLookingGreatMenu),
                  }}
                />
              </ATBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ATBox mb={1.5} mt={1.5}>
                <ComplexProjectCard
                  image={logoInvision}
                  title="developer first"
                  description="For standing out. But the time is now to be okay to be the greatest you."
                  dateTime="16.01.22"
                  members={[team1, team2, team3, team4]}
                  dropdown={{
                    action: openDeveloperFirstMenu,
                    menu: renderMenu(developerFirstMenu, closeDeveloperFirstMenu),
                  }}
                />
              </ATBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ATBox mb={1.5} mt={1.5}>
                <ComplexProjectCard
                  image={logoAtlassian}
                  title="Product Development"
                  description="We strive to embrace and drive change in our industry. We are happy to work at such a project."
                  dateTime="16.01.22"
                  members={[team1, team2, team3, team4]}
                  dropdown={{
                    action: openDeveloperFirstMenu,
                    menu: renderMenu(developerFirstMenu, closeDeveloperFirstMenu),
                  }}
                />
              </ATBox>
            </Grid>
          </Grid>
        </ATBox>
      </ATBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AllProjects;
