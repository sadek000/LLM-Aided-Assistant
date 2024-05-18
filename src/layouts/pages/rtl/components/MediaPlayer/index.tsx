// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import { Theme } from "@mui/material/styles";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATButton from "components/ATButton";

// Images
import bgImage from "assets/images/bg-player.jpeg";

function MediaPlayer(): JSX.Element {
  const mediaPlayerButtonStyles = ({ functions: { pxToRem } }: Theme) => ({
    width: pxToRem(46),
    height: pxToRem(46),
    minWidth: pxToRem(46),
    minHeight: pxToRem(46),
    mr: 1,
  });

  return (
    <Card
      sx={({ functions: { linearGradient, rgba }, palette: { gradients } }) => ({
        backgroundImage: `${linearGradient(
          rgba(gradients.dark.main, 0.85),
          rgba(gradients.dark.state, 0.85)
        )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      })}
    >
      <ATBox p={3} position="relative" lineHeight={0}>
        <ATTypography variant="h5" color="white" fontWeight="medium">
          نوع من البلوز
        </ATTypography>
        <ATTypography variant="button" color="white">
          ديفتونز
        </ATTypography>
        <ATBox display="flex" mt={3} pt={1}>
          <ATBox display="flex" alignItems="center" justifyContent="center">
            <ATButton
              variant="outlined"
              size="large"
              circular
              iconOnly
              sx={mediaPlayerButtonStyles}
            >
              <Icon>skip_previous</Icon>
            </ATButton>
            <ATButton
              variant="outlined"
              size="large"
              circular
              iconOnly
              sx={mediaPlayerButtonStyles}
            >
              <Icon>play_arrow</Icon>
            </ATButton>
            <ATButton
              variant="outlined"
              size="large"
              circular
              iconOnly
              sx={mediaPlayerButtonStyles}
            >
              <Icon>skip_next</Icon>
            </ATButton>
          </ATBox>
        </ATBox>
      </ATBox>
    </Card>
  );
}

export default MediaPlayer;
