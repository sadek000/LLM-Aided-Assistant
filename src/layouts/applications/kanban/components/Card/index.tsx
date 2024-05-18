import { ReactNode } from "react";

// @mui material components
import Icon from "@mui/material/Icon";
import { Theme } from "@mui/material/styles";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATBadge from "components/ATBadge";
import ATTypography from "components/ATTypography";
import ATAvatar from "components/ATAvatar";
import ATProgress from "components/ATProgress";

// Declaring props types for Card
interface Props {
  image?: string;
  badge: {
    color: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark" | "light";
    label: string;
  };
  content: ReactNode;
  progress?: number;
  attachedFiles?: string | number;
  members: string[];
}

function Card({ image, badge, content, progress, attachedFiles, members }: Props): JSX.Element {
  const renderMembers = members.map((member, key) => {
    const imageAlt = `image-${key}`;

    return (
      <ATAvatar
        key={imageAlt}
        src={member}
        alt={imageAlt}
        size="xs"
        sx={{
          border: ({ borders: { borderWidth }, palette: { white } }: Theme) =>
            `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",
          ml: -1,
          mr: 0,

          "&:hover, &:focus": {
            zIndex: "10",
          },
        }}
      />
    );
  });

  return (
    <>
      {image && <ATBox component="img" src={image} width="100%" borderRadius="lg" mb={1} />}
      <ATBadge size="xs" color={badge.color} badgeContent={badge.label} container />
      <ATBox mt={1} mb={2}>
        <ATTypography variant="body2" color="text">
          {content}
        </ATTypography>
        {progress > 0 && (
          <ATBox mt={0.25}>
            <ATProgress variant="gradient" value={progress} color={badge.color} />
          </ATBox>
        )}
      </ATBox>
      <ATBox display="flex" justifyContent="space-between" alignItems="center">
        <ATBox display="flex" alignItems="center" color="text">
          {attachedFiles && (
            <>
              <ATTypography variant="body2" color="text" sx={{ lineHeight: 0 }}>
                <Icon sx={{ fontWeight: "bold" }}>attach_file</Icon>
              </ATTypography>
              <ATTypography variant="button" fontWeight="regular" color="text">
                &nbsp;{attachedFiles}
              </ATTypography>
            </>
          )}
        </ATBox>
        <ATBox display="flex">{renderMembers}</ATBox>
      </ATBox>
    </>
  );
}

// Declaring default props for Card
Card.defaultProps = {
  image: "",
  progress: 0,
  attachedFiles: "",
};

export default Card;
