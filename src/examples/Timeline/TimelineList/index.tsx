import { ReactNode } from "react";

// @mui material components
import Card from "@mui/material/Card";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";

//  ALDR Tech Dashboard components
import { useMaterialUIController } from "context";

// Timeline context
import { TimelineProvider } from "examples/Timeline/context";

// Declaring props types for TimelineList
interface Props {
  title: string;
  dark?: boolean;
  children: ReactNode;
}

function TimelineList({ title, dark, children }: Props): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <TimelineProvider value={dark}>
      <Card>
        <ATBox
          bgColor={dark ? "dark" : "white"}
          variant="gradient"
          borderRadius="xl"
          sx={{ background: ({ palette: { background } }: any) => darkMode && background.card }}
        >
          <ATBox pt={3} px={3}>
            <ATTypography variant="h6" fontWeight="medium" color={dark ? "white" : "dark"}>
              {title}
            </ATTypography>
          </ATBox>
          <ATBox p={2}>{children}</ATBox>
        </ATBox>
      </Card>
    </TimelineProvider>
  );
}

// Declaring default props for TimelineList
TimelineList.defaultProps = {
  dark: false,
};

export default TimelineList;
