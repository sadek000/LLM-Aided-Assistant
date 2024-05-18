// @mui material components
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Switch from "@mui/material/Switch";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";

// Setting pages components
import TableCell from "layouts/pages/account/settings/components/TableCell";

function Notifications(): JSX.Element {
  return (
    <Card id="notifications">
      <ATBox p={3} lineHeight={1}>
        <ATBox mb={1}>
          <ATTypography variant="h5">Notifications</ATTypography>
        </ATBox>
        <ATTypography variant="button" color="text">
          Choose how you receive notifications. These notification settings apply to the things
          you’re watching.
        </ATTypography>
      </ATBox>
      <ATBox pb={3} px={3}>
        <ATBox minWidth="auto" sx={{ overflow: "scroll" }}>
          <Table sx={{ minWidth: "36rem" }}>
            <ATBox component="thead">
              <TableRow>
                <TableCell width="100%" padding={[1.5, 3, 1.5, 0.5]}>
                  Activity
                </TableCell>
                <TableCell align="center" padding={[1.5, 6, 1.5, 6]}>
                  Email
                </TableCell>
                <TableCell align="center" padding={[1.5, 6, 1.5, 6]}>
                  Push
                </TableCell>
                <TableCell align="center" padding={[1.5, 6, 1.5, 6]}>
                  SMS
                </TableCell>
              </TableRow>
            </ATBox>
            <TableBody>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]}>
                  <ATBox lineHeight={1.4}>
                    <ATTypography display="block" variant="button" fontWeight="regular">
                      Mentions
                    </ATTypography>
                    <ATTypography variant="caption" color="text" fontWeight="regular">
                      Notify when another user mentions you in a comment
                    </ATTypography>
                  </ATBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]}>
                  <ATBox lineHeight={1.4}>
                    <ATTypography display="block" variant="button" fontWeight="regular">
                      Comments
                    </ATTypography>
                    <ATTypography variant="caption" color="text" fontWeight="regular">
                      Notify when another user comments your item.
                    </ATTypography>
                  </ATBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]}>
                  <ATBox lineHeight={1.4}>
                    <ATTypography display="block" variant="button" fontWeight="regular">
                      Follows
                    </ATTypography>
                    <ATTypography variant="caption" color="text" fontWeight="regular">
                      Notify when another user follows you.
                    </ATTypography>
                  </ATBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]} noBorder>
                  <ATTypography display="block" variant="button" color="text">
                    Log in from a new device
                  </ATTypography>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ATBox>
      </ATBox>
    </Card>
  );
}

export default Notifications;
