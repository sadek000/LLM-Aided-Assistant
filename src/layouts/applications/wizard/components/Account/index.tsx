import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Theme } from "@mui/material/styles";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATButton from "components/ATButton";

function Account(): JSX.Element {
  const [design, setDesign] = useState(false);
  const [code, setCode] = useState(false);
  const [develop, setDevelop] = useState(false);

  const handleSetDesign = () => setDesign(!design);
  const handleSetCode = () => setCode(!code);
  const handleSetDevelop = () => setDevelop(!develop);

  const customButtonStyles = ({
    functions: { pxToRem, rgba },
    borders: { borderWidth },
    palette: { transparent, info },
    typography: { size },
  }: Theme) => ({
    width: pxToRem(164),
    height: pxToRem(130),
    borderWidth: borderWidth[2],
    mb: 1,
    ml: 0.5,

    "&.MuiButton-contained, &.MuiButton-contained:hover": {
      boxShadow: "none",
      border: `${borderWidth[2]} solid ${transparent.main}`,
    },

    "&:hover": {
      backgroundColor: `${transparent.main} !important`,
      border: `${borderWidth[2]} solid ${info.main} !important`,
      color: rgba(info.main, 0.75),
    },

    "& .material-icons-round": {
      fontSize: `${size["3xl"]} !important`,
    },
  });

  return (
    <ATBox>
      <ATBox width="80%" textAlign="center" mx="auto" my={4}>
        <ATBox mb={1}>
          <ATTypography variant="h5" fontWeight="regular">
            What are you doing? (checkboxes)
          </ATTypography>
        </ATBox>
        <ATTypography variant="body2" color="text">
          Give us more details about you. What do you enjoy doing in your spare time?
        </ATTypography>
      </ATBox>
      <ATBox mt={2}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={3}>
            <ATBox textAlign="center">
              <ATButton
                color="info"
                variant={design ? "contained" : "outlined"}
                onClick={handleSetDesign}
                sx={customButtonStyles}
              >
                <Icon sx={{ color: design ? "white" : "inherit" }}>brush</Icon>
              </ATButton>
              <ATTypography variant="h6" sx={{ mt: 1 }}>
                Design
              </ATTypography>
            </ATBox>
          </Grid>
          <Grid item xs={12} sm={3}>
            <ATBox textAlign="center">
              <ATButton
                color="info"
                variant={code ? "contained" : "outlined"}
                onClick={handleSetCode}
                sx={customButtonStyles}
              >
                <Icon sx={{ color: design ? "white" : "inherit" }}>integration_instructions</Icon>
              </ATButton>
              <ATTypography variant="h6" sx={{ mt: 1 }}>
                Code
              </ATTypography>
            </ATBox>
          </Grid>
          <Grid item xs={12} sm={3}>
            <ATBox textAlign="center">
              <ATButton
                color="info"
                variant={develop ? "contained" : "outlined"}
                onClick={handleSetDevelop}
                sx={customButtonStyles}
              >
                <Icon sx={{ color: design ? "white" : "inherit" }}>developer_mode</Icon>
              </ATButton>
              <ATTypography variant="h6" sx={{ mt: 1 }}>
                Develop
              </ATTypography>
            </ATBox>
          </Grid>
        </Grid>
      </ATBox>
    </ATBox>
  );
}

export default Account;
