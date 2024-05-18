import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";

function PlatformSettings(): JSX.Element {
  const [followsMe, setFollowsMe] = useState<boolean>(true);
  const [answersPost, setAnswersPost] = useState<boolean>(false);
  const [mentionsMe, setMentionsMe] = useState<boolean>(true);
  const [newLaunches, setNewLaunches] = useState<boolean>(false);
  const [productUpdate, setProductUpdate] = useState<boolean>(true);
  const [newsletter, setNewsletter] = useState<boolean>(false);

  return (
    <Card sx={{ boxShadow: "none" }}>
      <ATBox p={2}>
        <ATTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          platform settings
        </ATTypography>
      </ATBox>
      <ATBox pt={1} pb={2} px={2} lineHeight={1.25}>
        <ATTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          account
        </ATTypography>
        <ATBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <ATBox mt={0.5}>
            <Switch checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
          </ATBox>
          <ATBox width="80%" ml={0.5}>
            <ATTypography variant="button" fontWeight="regular" color="text">
              Email me when someone follows me
            </ATTypography>
          </ATBox>
        </ATBox>
        <ATBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <ATBox mt={0.5}>
            <Switch checked={answersPost} onChange={() => setAnswersPost(!answersPost)} />
          </ATBox>
          <ATBox width="80%" ml={0.5}>
            <ATTypography variant="button" fontWeight="regular" color="text">
              Email me when someone answers on my post
            </ATTypography>
          </ATBox>
        </ATBox>
        <ATBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <ATBox mt={0.5}>
            <Switch checked={mentionsMe} onChange={() => setMentionsMe(!mentionsMe)} />
          </ATBox>
          <ATBox width="80%" ml={0.5}>
            <ATTypography variant="button" fontWeight="regular" color="text">
              Email me when someone mentions me
            </ATTypography>
          </ATBox>
        </ATBox>
        <ATBox mt={3}>
          <ATTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
            application
          </ATTypography>
        </ATBox>
        <ATBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <ATBox mt={0.5}>
            <Switch checked={newLaunches} onChange={() => setNewLaunches(!newLaunches)} />
          </ATBox>
          <ATBox width="80%" ml={0.5}>
            <ATTypography variant="button" fontWeight="regular" color="text">
              New launches and projects
            </ATTypography>
          </ATBox>
        </ATBox>
        <ATBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <ATBox mt={0.5}>
            <Switch checked={productUpdate} onChange={() => setProductUpdate(!productUpdate)} />
          </ATBox>
          <ATBox width="80%" ml={0.5}>
            <ATTypography variant="button" fontWeight="regular" color="text">
              Monthly product updates
            </ATTypography>
          </ATBox>
        </ATBox>
        <ATBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <ATBox mt={0.5}>
            <Switch checked={newsletter} onChange={() => setNewsletter(!newsletter)} />
          </ATBox>
          <ATBox width="80%" ml={0.5}>
            <ATTypography variant="button" fontWeight="regular" color="text">
              Subscribe to newsletter
            </ATTypography>
          </ATBox>
        </ATBox>
      </ATBox>
    </Card>
  );
}

export default PlatformSettings;
