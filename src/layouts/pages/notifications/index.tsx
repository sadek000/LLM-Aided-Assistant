import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATAlert from "components/ATAlert";
import ATButton from "components/ATButton";
import ATSnackbar from "components/ATSnackbar";

//  ALDR Tech Dashboard examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Notifications(): JSX.Element {
  const [successSB, setSuccessSB] = useState<boolean>(false);
  const [infoSB, setInfoSB] = useState<boolean>(false);
  const [warningSB, setWarningSB] = useState<boolean>(false);
  const [errorSB, setErrorSB] = useState<boolean>(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const alertContent = (name: string) => (
    <ATTypography variant="body2" color="white">
      A simple {name} alert with{" "}
      <ATTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        an example link
      </ATTypography>
      . Give it a click if you like.
    </ATTypography>
  );

  const renderSuccessSB = (
    <ATSnackbar
      color="success"
      icon="check"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const renderInfoSB = (
    <ATSnackbar
      icon="notifications"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  const renderWarningSB = (
    <ATSnackbar
      color="warning"
      icon="star"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
  );

  const renderErrorSB = (
    <ATSnackbar
      color="error"
      icon="warning"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ATBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <ATBox p={2}>
                <ATTypography variant="h5">Alerts</ATTypography>
              </ATBox>
              <ATBox pt={2} px={2}>
                <ATAlert color="primary" dismissible>
                  {alertContent("primary")}
                </ATAlert>
                <ATAlert color="secondary" dismissible>
                  {alertContent("secondary")}
                </ATAlert>
                <ATAlert color="success" dismissible>
                  {alertContent("success")}
                </ATAlert>
                <ATAlert color="error" dismissible>
                  {alertContent("error")}
                </ATAlert>
                <ATAlert color="warning" dismissible>
                  {alertContent("warning")}
                </ATAlert>
                <ATAlert color="info" dismissible>
                  {alertContent("info")}
                </ATAlert>
                <ATAlert color="light" dismissible>
                  {alertContent("light")}
                </ATAlert>
                <ATAlert color="dark" dismissible>
                  {alertContent("dark")}
                </ATAlert>
              </ATBox>
            </Card>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Card>
              <ATBox p={2} lineHeight={0}>
                <ATTypography variant="h5">Notifications</ATTypography>
                <ATTypography variant="button" color="text" fontWeight="regular">
                  Notifications on this page use Toasts from Bootstrap. Read more details here.
                </ATTypography>
              </ATBox>
              <ATBox p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <ATButton variant="gradient" color="success" onClick={openSuccessSB} fullWidth>
                      success notification
                    </ATButton>
                    {renderSuccessSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <ATButton variant="gradient" color="info" onClick={openInfoSB} fullWidth>
                      info notification
                    </ATButton>
                    {renderInfoSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <ATButton variant="gradient" color="warning" onClick={openWarningSB} fullWidth>
                      warning notification
                    </ATButton>
                    {renderWarningSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <ATButton variant="gradient" color="error" onClick={openErrorSB} fullWidth>
                      error notification
                    </ATButton>
                    {renderErrorSB}
                  </Grid>
                </Grid>
              </ATBox>
            </Card>
          </Grid>
        </Grid>
      </ATBox>
    </DashboardLayout>
  );
}

export default Notifications;
