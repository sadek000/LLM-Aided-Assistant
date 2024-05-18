// @mui material components
import Card from "@mui/material/Card";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATButton from "components/ATButton";

function DeleteAccount(): JSX.Element {
  return (
    <Card id="delete-account">
      <ATBox
        pr={3}
        display="flex"
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <ATBox p={3} lineHeight={1}>
          <ATBox mb={1}>
            <ATTypography variant="h5">Delete Account</ATTypography>
          </ATBox>
          <ATTypography variant="button" color="text">
            Once you delete your account, there is no going back. Please be certain.
          </ATTypography>
        </ATBox>
        <ATBox display="flex" flexDirection={{ xs: "column", sm: "row" }}>
          <ATButton variant="outlined" color="secondary">
            deactivate
          </ATButton>
          <ATBox ml={{ xs: 0, sm: 1 }} mt={{ xs: 1, sm: 0 }}>
            <ATButton variant="gradient" color="error" sx={{ height: "100%" }}>
              delete account
            </ATButton>
          </ATBox>
        </ATBox>
      </ATBox>
    </Card>
  );
}

export default DeleteAccount;
