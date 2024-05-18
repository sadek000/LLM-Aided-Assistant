// @mui material components
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import { Theme } from "@mui/material/styles";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATAvatar from "components/ATAvatar";
import ATButton from "components/ATButton";

// Image
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import team5 from "assets/images/team-5.jpg";

function Header(): JSX.Element {
  const avatarStyles: { [key: string]: any } = {
    border: ({ borders: { borderWidth }, palette: { white } }: Theme) =>
      `${borderWidth[2]} solid ${white.main}`,
    cursor: "pointer",
    position: "relative",
    ml: -1.5,

    "&:hover, &:focus": {
      zIndex: "10",
    },
  };

  return (
    <ATBox display="flex" alignItems="center">
      <ATBox mt={0.5} pr={1}>
        <ATBox mb={1} ml={-1.25} lineHeight={0}>
          <ATTypography variant="caption" color="secondary">
            Team members:
          </ATTypography>
        </ATBox>
        <ATBox display="flex">
          <ATAvatar src={team1} alt="team-1" size="sm" sx={avatarStyles} />
          <ATAvatar src={team2} alt="team-1" size="sm" sx={avatarStyles} />
          <ATAvatar src={team3} alt="team-1" size="sm" sx={avatarStyles} />
          <ATAvatar src={team4} alt="team-1" size="sm" sx={avatarStyles} />
          <ATAvatar src={team5} alt="team-1" size="sm" sx={avatarStyles} />
        </ATBox>
      </ATBox>
      <ATBox height="75%" alignSelf="flex-end">
        <Divider orientation="vertical" />
      </ATBox>
      <ATBox pl={1}>
        <ATButton variant="gradient" color="info" iconOnly>
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
        </ATButton>
      </ATBox>
    </ATBox>
  );
}

export default Header;
