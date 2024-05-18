import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATAvatar from "components/ATAvatar";
import ATInput from "components/ATInput";
import ATButton from "components/ATButton";

// Images
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoAsana from "assets/images/small-logos/logo-asana.svg";

//  ALDR Tech Dashboard components
import { useMaterialUIController } from "context";

function Accounts(): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const [slack2FA, setSlack2FA] = useState<boolean>(true);
  const [spotify2FA, setSpotify2FA] = useState<boolean>(true);
  const [atlassian2FA, setAtlassian2FA] = useState<boolean>(true);
  const [asana2FA, setAsana2FA] = useState<boolean>(false);

  const handleSetSlack2FA = () => setSlack2FA(!slack2FA);
  const handleSetSpotify2FA = () => setSpotify2FA(!spotify2FA);
  const handleSetAtlassian2FA = () => setAtlassian2FA(!atlassian2FA);
  const handleSetAsana2FA = () => setAsana2FA(!asana2FA);

  return (
    <Card id="accounts">
      <ATBox p={3} lineHeight={1}>
        <ATBox mb={1}>
          <ATTypography variant="h5">Accounts</ATTypography>
        </ATBox>
        <ATTypography variant="button" color="text">
          Here you can setup and manage your integration settings.
        </ATTypography>
      </ATBox>
      <ATBox pt={2} pb={3} px={3}>
        <ATBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <ATBox display="flex" alignItems="center">
            <ATAvatar src={logoSlack} alt="Slack logo" variant="rounded" />
            <ATBox ml={2}>
              <ATTypography variant="h5" fontWeight="medium">
                Slack
              </ATTypography>
              <ATBox display="flex" alignItems="flex-end">
                <ATTypography variant="button" color="text">
                  Show less
                </ATTypography>
                <ATTypography variant="button" color="text" sx={{ lineHeight: 0 }}>
                  <Icon fontSize="small">expand_less</Icon>
                </ATTypography>
              </ATBox>
            </ATBox>
          </ATBox>
          <ATBox
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <ATBox lineHeight={0} mx={2}>
              <ATTypography variant="button" color="text">
                {slack2FA ? "Enabled" : "Disabled"}
              </ATTypography>
            </ATBox>
            <ATBox mr={1}>
              <Switch checked={slack2FA} onChange={handleSetSlack2FA} />
            </ATBox>
          </ATBox>
        </ATBox>
        <ATBox ml={2} pl={6} pt={2} lineHeight={1}>
          <ATTypography variant="button" color="text">
            You haven&apos;t added your Slack yet or you aren&apos;t authorized. Please add our
            Slack Bot to your account by clicking on here. When you&apos;ve added the bot, send your
            verification code that you have received.
          </ATTypography>
          <ATBox
            bgColor={darkMode ? "grey-900" : "grey-100"}
            borderRadius="lg"
            display="flex"
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
            my={3}
            py={1}
            pl={{ xs: 1, sm: 2 }}
            pr={1}
          >
            <ATTypography variant="button" fontWeight="medium" color="text">
              Verification Code
            </ATTypography>
            <ATBox width={{ xs: "100%", sm: "25%", md: "15%" }} mt={{ xs: 1, sm: 0 }}>
              <Tooltip title="Copy" placement="top">
                <ATInput size="small" value="1172913" />
              </Tooltip>
            </ATBox>
          </ATBox>
          <ATBox
            bgColor={darkMode ? "grey-900" : "grey-100"}
            borderRadius="lg"
            display="flex"
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
            my={3}
            py={1}
            pl={{ xs: 1, sm: 2 }}
            pr={1}
          >
            <ATTypography variant="button" fontWeight="medium" color="text">
              Connected account
            </ATTypography>
            <ATBox
              display="flex"
              alignItems={{ xs: "flex-start", sm: "center" }}
              flexDirection={{ xs: "column", sm: "row" }}
            >
              <ATBox mr={2} mb={{ xs: 1, sm: 0 }} lineHeight={0}>
                <ATTypography variant="button" fontWeight="medium">
                  info@aldrtech.sy
                </ATTypography>
              </ATBox>
              <ATButton variant="gradient" color="dark" size="small">
                delete
              </ATButton>
            </ATBox>
          </ATBox>
        </ATBox>
        <Divider />
        <ATBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <ATBox display="flex" alignItems="center">
            <ATAvatar src={logoSpotify} alt="Slack logo" variant="rounded" />
            <ATBox ml={2} lineHeight={0}>
              <ATTypography variant="h5" fontWeight="medium">
                Spotify
              </ATTypography>
              <ATTypography variant="button" color="text">
                Music
              </ATTypography>
            </ATBox>
          </ATBox>
          <ATBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <ATBox lineHeight={0} mx={2}>
              <ATTypography variant="button" color="text">
                {spotify2FA ? "Enabled" : "Disabled"}
              </ATTypography>
            </ATBox>
            <ATBox mr={1}>
              <Switch checked={spotify2FA} onChange={handleSetSpotify2FA} />
            </ATBox>
          </ATBox>
        </ATBox>
        <Divider />
        <ATBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <ATBox display="flex" alignItems="center">
            <ATAvatar src={logoAtlassian} alt="Slack logo" variant="rounded" />
            <ATBox ml={2} lineHeight={0}>
              <ATTypography variant="h5" fontWeight="medium">
                Atlassian
              </ATTypography>
              <ATTypography variant="button" color="text">
                Payment vendor
              </ATTypography>
            </ATBox>
          </ATBox>
          <ATBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <ATBox lineHeight={0} mx={2}>
              <ATTypography variant="button" color="text">
                {atlassian2FA ? "Enabled" : "Disabled"}
              </ATTypography>
            </ATBox>
            <ATBox mr={1}>
              <Switch checked={atlassian2FA} onChange={handleSetAtlassian2FA} />
            </ATBox>
          </ATBox>
        </ATBox>
        <Divider />
        <ATBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <ATBox display="flex" alignItems="center">
            <ATAvatar src={logoAsana} alt="Slack logo" variant="rounded" />
            <ATBox ml={2} lineHeight={0}>
              <ATTypography variant="h5" fontWeight="medium">
                Asana
              </ATTypography>
              <ATTypography variant="button" color="text">
                Organize your team
              </ATTypography>
            </ATBox>
          </ATBox>
          <ATBox
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <ATBox lineHeight={0} mx={2}>
              <ATTypography variant="button" color="text">
                {asana2FA ? "Enabled" : "Disabled"}
              </ATTypography>
            </ATBox>
            <ATBox mr={1}>
              <Switch checked={asana2FA} onChange={handleSetAsana2FA} />
            </ATBox>
          </ATBox>
        </ATBox>
      </ATBox>
    </Card>
  );
}

export default Accounts;
