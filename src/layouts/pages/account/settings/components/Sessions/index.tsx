// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATBadge from "components/ATBadge";

function Sessions(): JSX.Element {
  const actionButtonStyles = {
    "& .material-icons-round": {
      transform: `translateX(0)`,
      transition: "all 200ms cubic-bezier(0.34,1.61,0.7,1.3)",
    },

    "&:hover .material-icons-round, &:focus .material-icons-round": {
      transform: `translateX(4px)`,
    },
  };

  return (
    <Card id="sessions">
      <ATBox p={3} lineHeight={1}>
        <ATBox mb={1}>
          <ATTypography variant="h5">Sessions</ATTypography>
        </ATBox>
        <ATTypography variant="button" color="text" fontWeight="regular">
          This is a list of devices that have logged into your account. Remove those that you do not
          recognize.
        </ATTypography>
      </ATBox>
      <ATBox pb={3} px={3} sx={{ overflow: "auto" }}>
        <ATBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={{ xs: "max-content", sm: "100%" }}
        >
          <ATBox display="flex" alignItems="center">
            <ATBox textAlign="center" color="text" px={{ xs: 0, md: 1.5 }} opacity={0.6}>
              <Icon>desktop_windows</Icon>
            </ATBox>
            <ATBox height="100%" ml={2} lineHeight={1} mr={2}>
              <ATTypography display="block" variant="button" fontWeight="regular" color="text">
                Bucharest 68.133.163.201
              </ATTypography>
              <ATTypography variant="caption" color="text">
                Your current session
              </ATTypography>
            </ATBox>
          </ATBox>
          <ATBox display="flex" alignItems="center">
            <ATBadge
              variant="contained"
              size="xs"
              badgeContent="active"
              color="success"
              container
            />
            <ATBox mx={2} lineHeight={1}>
              <ATTypography variant="button" color="secondary" fontWeight="regular">
                EU
              </ATTypography>
            </ATBox>
            <ATTypography
              component="a"
              href="#"
              variant="button"
              color="info"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              See more&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>arrow_forward</Icon>
            </ATTypography>
          </ATBox>
        </ATBox>
        <Divider />
        <ATBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={{ xs: "max-content", sm: "100%" }}
        >
          <ATBox display="flex" alignItems="center" mr={2}>
            <ATBox textAlign="center" color="text" px={{ xs: 0, md: 1.5 }} opacity={0.6}>
              <Icon>desktop_windows</Icon>
            </ATBox>
            <ATBox ml={2}>
              <ATTypography display="block" variant="body2" fontWeight="regular" color="text">
                Chrome on macOS
              </ATTypography>
            </ATBox>
          </ATBox>
          <ATBox display="flex" alignItems="center">
            <ATBox mx={2} lineHeight={1}>
              <ATTypography variant="button" color="secondary" fontWeight="regular">
                US
              </ATTypography>
            </ATBox>
            <ATTypography
              component="a"
              href="#"
              variant="button"
              color="info"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              See more&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>arrow_forward</Icon>
            </ATTypography>
          </ATBox>
        </ATBox>
        <Divider />
        <ATBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={{ xs: "max-content", sm: "100%" }}
        >
          <ATBox display="flex" alignItems="center" mr={2}>
            <ATBox textAlign="center" color="text" px={{ xs: 0, md: 1.5 }} opacity={0.6}>
              <Icon>phone_iphone</Icon>
            </ATBox>
            <ATBox ml={2}>
              <ATTypography display="block" variant="body2" fontWeight="regular" color="text">
                Safari on iPhone
              </ATTypography>
            </ATBox>
          </ATBox>
          <ATBox display="flex" alignItems="center">
            <ATBox mx={2} lineHeight={1}>
              <ATTypography variant="button" color="secondary" fontWeight="regular">
                US
              </ATTypography>
            </ATBox>
            <ATTypography
              component="a"
              href="#"
              variant="button"
              color="info"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              See more&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>arrow_forward</Icon>
            </ATTypography>
          </ATBox>
        </ATBox>
      </ATBox>
    </Card>
  );
}

export default Sessions;
