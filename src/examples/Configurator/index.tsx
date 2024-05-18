import { useState, useEffect } from "react";

// @mui material components
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import { Theme } from "@mui/material/styles";

// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATButton from "components/ATButton";

// Custom styles for the Configurator
import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";

// ALDR Tech Dashboard context
import {
  useMaterialUIController,
  setTransparentSidenav,
  setWhiteSidenav,
  setMiniSidenav,
  setFixedNavbar,
  setSidenavColor,
  setDarkMode,
} from "context";

function Configurator(): JSX.Element {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, fixedNavbar, sidenavColor, transparentSidenav, whiteSidenav, darkMode } =
    controller;
  const [disabled, setDisabled] = useState<boolean>(false);
  const sidenavColors: (
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "light"
    | "dark"
  )[] = ["primary", "dark", "info", "success", "warning", "error"];

  // Use the useEffect hook to change the button state for the sidenav type based on window size.
  useEffect(() => {
    // A function that sets the disabled state of the buttons for the sidenav type.
    function handleDisabled() {
      return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
    }

    // The event listener that's calling the handleDisabled function when resizing the window.
    window.addEventListener("resize", handleDisabled);

    // Call the handleDisabled function to set the state with the initial value.
    handleDisabled();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleDisabled);
  }, []);

  const handleTransparentSidenav = () => {
    setTransparentSidenav(dispatch, true);
    setWhiteSidenav(dispatch, false);
  };
  const handleWhiteSidenav = () => {
    setWhiteSidenav(dispatch, true);
    setTransparentSidenav(dispatch, false);
  };
  const handleDarkSidenav = () => {
    setWhiteSidenav(dispatch, false);
    setTransparentSidenav(dispatch, false);
  };
  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleFixedNavbar = () => setFixedNavbar(dispatch, !fixedNavbar);
  const handleDarkMode = () => setDarkMode(dispatch, !darkMode);

  // sidenav type buttons styles
  const sidenavTypeButtonsStyles = ({
    functions: { pxToRem },
    palette: { white, dark, background },
    borders: { borderWidth },
  }: Theme | any) => ({
    height: pxToRem(39),
    background: darkMode ? background.sidenav : white.main,
    color: darkMode ? white.main : dark.main,
    border: `${borderWidth[1]} solid ${darkMode ? white.main : dark.main}`,

    "&:hover, &:focus, &:focus:not(:hover)": {
      background: darkMode ? background.sidenav : white.main,
      color: darkMode ? white.main : dark.main,
      border: `${borderWidth[1]} solid ${darkMode ? white.main : dark.main}`,
    },
  });

  // sidenav type active button styles
  const sidenavTypeActiveButtonStyles = ({
    functions: { pxToRem, linearGradient },
    palette: { white, gradients, background },
  }: Theme | any) => ({
    height: pxToRem(39),
    background: darkMode ? white.main : linearGradient(gradients.dark.main, gradients.dark.state),
    color: darkMode ? background.sidenav : white.main,

    "&:hover, &:focus, &:focus:not(:hover)": {
      background: darkMode ? white.main : linearGradient(gradients.dark.main, gradients.dark.state),
      color: darkMode ? background.sidenav : white.main,
    },
  });

  return (
    <ConfiguratorRoot variant="permanent" ownerState={{}}>
      <ATBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={4}
        pb={0.5}
        px={3}
      >
        <ATBox>
          <ATTypography variant="h5">Material UI Configurator</ATTypography>
          <ATTypography variant="body2" color="text">
            See our dashboard options.
          </ATTypography>
        </ATBox>

        <Icon
          sx={({ typography: { size }, palette: { dark, white } }) => ({
            fontSize: `${size.lg} !important`,
            color: darkMode ? white.main : dark.main,
            stroke: "currentColor",
            strokeWidth: "2px",
            cursor: "pointer",
            transform: "translateY(5px)",
          })}
          onClick={() => console.log()}
        >
          close
        </Icon>
      </ATBox>

      <Divider />

      <ATBox pt={0.5} pb={3} px={3}>
        <ATBox>
          <ATTypography variant="h6">Sidenav Colors</ATTypography>

          <ATBox mb={0.5}>
            {sidenavColors.map((color) => (
              <IconButton
                key={color}
                sx={({
                  borders: { borderWidth },
                  palette: { white, dark, background },
                  transitions,
                }: Theme | any) => ({
                  width: "24px",
                  height: "24px",
                  padding: 0,
                  border: `${borderWidth[1]} solid ${darkMode ? background.sidenav : white.main}`,
                  borderColor: () => {
                    let borderColorValue = sidenavColor === color && dark.main;

                    if (darkMode && sidenavColor === color) {
                      borderColorValue = white.main;
                    }

                    return borderColorValue;
                  },
                  transition: transitions.create("border-color", {
                    easing: transitions.easing.sharp,
                    duration: transitions.duration.shorter,
                  }),
                  backgroundImage: ({ functions: { linearGradient }, palette: { gradients } }) =>
                    linearGradient(gradients[color].main, gradients[color].state),

                  "&:not(:last-child)": {
                    mr: 1,
                  },

                  "&:hover, &:focus, &:active": {
                    borderColor: darkMode ? white.main : dark.main,
                  },
                })}
                onClick={() => setSidenavColor(dispatch, color)}
              />
            ))}
          </ATBox>
        </ATBox>

        <ATBox mt={3} lineHeight={1}>
          <ATTypography variant="h6">Sidenav Type</ATTypography>
          <ATTypography variant="button" color="text">
            Choose between different sidenav types.
          </ATTypography>

          <ATBox
            sx={{
              display: "flex",
              mt: 2,
              mr: 1,
            }}
          >
            <ATButton
              color="dark"
              variant="gradient"
              onClick={handleDarkSidenav}
              disabled={disabled}
              fullWidth
              sx={
                !transparentSidenav && !whiteSidenav
                  ? sidenavTypeActiveButtonStyles
                  : sidenavTypeButtonsStyles
              }
            >
              Dark
            </ATButton>
            <ATBox sx={{ mx: 1, width: "8rem", minWidth: "8rem" }}>
              <ATButton
                color="dark"
                variant="gradient"
                onClick={handleTransparentSidenav}
                disabled={disabled}
                fullWidth
                sx={
                  transparentSidenav && !whiteSidenav
                    ? sidenavTypeActiveButtonStyles
                    : sidenavTypeButtonsStyles
                }
              >
                Transparent
              </ATButton>
            </ATBox>
            <ATButton
              color="dark"
              variant="gradient"
              onClick={handleWhiteSidenav}
              disabled={disabled}
              fullWidth
              sx={
                whiteSidenav && !transparentSidenav
                  ? sidenavTypeActiveButtonStyles
                  : sidenavTypeButtonsStyles
              }
            >
              White
            </ATButton>
          </ATBox>
        </ATBox>
        <ATBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={3}
          lineHeight={1}
        >
          <ATTypography variant="h6">Navbar Fixed</ATTypography>

          <Switch checked={fixedNavbar} onChange={handleFixedNavbar} />
        </ATBox>
        <Divider />
        <ATBox display="flex" justifyContent="space-between" alignItems="center" lineHeight={1}>
          <ATTypography variant="h6">Sidenav Mini</ATTypography>

          <Switch checked={miniSidenav} onChange={handleMiniSidenav} />
        </ATBox>
        <Divider />
        <ATBox display="flex" justifyContent="space-between" alignItems="center" lineHeight={1}>
          <ATTypography variant="h6">Light / Dark</ATTypography>

          <Switch checked={darkMode} onChange={handleDarkMode} />
        </ATBox>
        <Divider />
        <ATBox mt={3} mb={2}>
          <ATButton
            component={Link}
            href=" http://"
            target="_blank"
            rel="noreferrer"
            color={darkMode ? "light" : "dark"}
            variant="outlined"
            fullWidth
          >
            view documentation
          </ATButton>
        </ATBox>
        <ATBox display="flex" justifyContent="center">
          <a
            className="github-button"
            href="http://"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star"
          >
            Star
          </a>
        </ATBox>
        <ATBox mt={2} textAlign="center">
          <ATBox mb={0.5}>
            <ATTypography variant="h6">Thank you for sharing!</ATTypography>
          </ATBox>

          <ATBox display="flex" justifyContent="center">
            <ATBox mr={1.5}>
              <ATButton
                component={Link}
                href="http://"
                target="_blank"
                rel="noreferrer"
                color="dark"
              >
                <TwitterIcon />
                &nbsp; Tweet
              </ATButton>
            </ATBox>
            <ATButton
              component={Link}
              href="http://s"
              target="_blank"
              rel="noreferrer"
              color="dark"
            >
              <FacebookIcon />
              &nbsp; Share
            </ATButton>
          </ATBox>
        </ATBox>
      </ATBox>
    </ConfiguratorRoot>
  );
}

export default Configurator;
