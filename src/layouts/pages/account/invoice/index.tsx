// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import { Theme } from "@mui/material/styles";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATButton from "components/ATButton";

// Invoice page components
import BaseLayout from "layouts/pages/account/components/BaseLayout";

// Images
import logoCT from "assets/images/logo-ct.png";
import logoCTDark from "assets/images/logo-ct-dark.png";

// ALDR Tech Dashboard context
import { useMaterialUIController } from "context";

function Invoice(): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const borderBottom = {
    borderBottom: ({ borders: { borderWidth }, palette: { light } }: Theme) =>
      `${borderWidth[1]} solid ${light.main}`,
  };

  return (
    <BaseLayout stickyNavbar>
      <ATBox mt={{ xs: 4, md: 10 }} mb={{ xs: 4, md: 8 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8}>
            <Card>
              {/* Invoice header */}
              <ATBox p={3}>
                <Grid container justifyContent="space-between">
                  <Grid item xs={12} md={4}>
                    <ATBox
                      component="img"
                      src={darkMode ? logoCT : logoCTDark}
                      width="25%"
                      p={1}
                      mb={1}
                    />
                    <ATTypography variant="h6" fontWeight="medium">
                      St. Independence Embankment, 050105 Bucharest, Romania
                    </ATTypography>
                    <ATBox mt={1} mb={2}>
                      <ATTypography
                        display="block"
                        variant="body2"
                        color={darkMode ? "text" : "secondary"}
                      >
                        tel: +4 (074) 1090873
                      </ATTypography>
                    </ATBox>
                  </Grid>
                  <Grid item xs={12} md={7} lg={3}>
                    <ATBox width="100%" textAlign={{ xs: "left", md: "right" }} mt={6}>
                      <ATBox mt={1}>
                        <ATTypography variant="h6" fontWeight="medium">
                          Billed to: John Doe
                        </ATTypography>
                      </ATBox>
                      <ATBox mb={1}>
                        <ATTypography variant="body2" color={darkMode ? "text" : "secondary"}>
                          4006 Locust View Drive
                          <br />
                          San Francisco CA
                          <br />
                          California
                        </ATTypography>
                      </ATBox>
                    </ATBox>
                  </Grid>
                </Grid>
                <ATBox mt={{ xs: 5, md: 10 }}>
                  <Grid container justifyContent="space-between">
                    <Grid item xs={12} md={4}>
                      <ATTypography
                        variant="h6"
                        color={darkMode ? "text" : "secondary"}
                        fontWeight="regular"
                      >
                        Invoice no
                      </ATTypography>
                      <ATTypography variant="h5" fontWeight="medium">
                        #0453119
                      </ATTypography>
                    </Grid>
                    <Grid item xs={12} md={7} lg={5}>
                      <ATBox
                        width="100%"
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        alignItems={{ xs: "flex-start", md: "center" }}
                        textAlign={{ xs: "left", md: "right" }}
                        mt={{ xs: 3, md: 0 }}
                      >
                        <ATBox width="50%">
                          <ATTypography
                            variant="h6"
                            color={darkMode ? "text" : "secondary"}
                            fontWeight="regular"
                          >
                            Invoice date:
                          </ATTypography>
                        </ATBox>
                        <ATBox width="50%">
                          <ATTypography variant="h6" fontWeight="medium">
                            06/03/2019
                          </ATTypography>
                        </ATBox>
                      </ATBox>
                      <ATBox
                        width="100%"
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        alignItems={{ xs: "flex-start", md: "center" }}
                        textAlign={{ xs: "left", md: "right" }}
                      >
                        <ATBox width="50%">
                          <ATTypography
                            variant="h6"
                            color={darkMode ? "text" : "secondary"}
                            fontWeight="regular"
                          >
                            Due date:
                          </ATTypography>
                        </ATBox>
                        <ATBox width="50%">
                          <ATTypography variant="h6" fontWeight="medium">
                            11/03/2019
                          </ATTypography>
                        </ATBox>
                      </ATBox>
                    </Grid>
                  </Grid>
                </ATBox>
              </ATBox>

              {/* Invoice table */}
              <ATBox p={3}>
                <ATBox width="100%" overflow="auto">
                  <Table sx={{ minWidth: "32rem" }}>
                    <ATBox component="thead">
                      <TableRow>
                        <ATBox
                          component="th"
                          width={{ xs: "45%", md: "50%" }}
                          py={1.5}
                          px={1}
                          textAlign="left"
                          sx={borderBottom}
                        >
                          <ATTypography variant="h6" color="text" fontWeight="medium">
                            Item
                          </ATTypography>
                        </ATBox>
                        <ATBox
                          component="th"
                          py={1.5}
                          pl={3}
                          pr={1}
                          textAlign="left"
                          sx={borderBottom}
                        >
                          <ATTypography variant="h6" color="text" fontWeight="medium">
                            Qty
                          </ATTypography>
                        </ATBox>
                        <ATBox
                          component="th"
                          py={1.5}
                          pl={3}
                          pr={1}
                          textAlign="left"
                          sx={borderBottom}
                        >
                          <ATTypography variant="h6" color="text" fontWeight="medium">
                            Rate
                          </ATTypography>
                        </ATBox>
                        <ATBox
                          component="th"
                          py={1.5}
                          pl={3}
                          pr={1}
                          textAlign="left"
                          sx={borderBottom}
                        >
                          <ATTypography variant="h6" color="text" fontWeight="medium">
                            Amount
                          </ATTypography>
                        </ATBox>
                      </TableRow>
                    </ATBox>
                    <TableBody>
                      <TableRow>
                        <ATBox component="td" textAlign="left" p={1} sx={borderBottom}>
                          <ATTypography variant="body2" color="text" fontWeight="regular">
                            Premium Support
                          </ATTypography>
                        </ATBox>
                        <ATBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <ATTypography variant="body2" color="text" fontWeight="regular">
                            1
                          </ATTypography>
                        </ATBox>
                        <ATBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <ATTypography variant="body2" color="text" fontWeight="regular">
                            $ 9.00
                          </ATTypography>
                        </ATBox>
                        <ATBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <ATTypography variant="body2" color="text" fontWeight="regular">
                            $ 9.00
                          </ATTypography>
                        </ATBox>
                      </TableRow>
                      <TableRow>
                        <ATBox component="td" textAlign="left" p={1} sx={borderBottom}>
                          <ATTypography variant="body2" color="text" fontWeight="regular">
                            Material Dashboard 2 PRO
                          </ATTypography>
                        </ATBox>
                        <ATBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <ATTypography variant="body2" color="text" fontWeight="regular">
                            3
                          </ATTypography>
                        </ATBox>
                        <ATBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <ATTypography variant="body2" color="text" fontWeight="regular">
                            $ 100.00
                          </ATTypography>
                        </ATBox>
                        <ATBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <ATTypography variant="body2" color="text" fontWeight="regular">
                            $ 300.00
                          </ATTypography>
                        </ATBox>
                      </TableRow>
                      <TableRow>
                        <ATBox component="td" textAlign="left" p={1}>
                          <ATTypography variant="body2" color="text" fontWeight="regular">
                            Parts for service
                          </ATTypography>
                        </ATBox>
                        <ATBox component="td" textAlign="left" py={1} pr={1} pl={3}>
                          <ATTypography variant="body2" color="text" fontWeight="regular">
                            1
                          </ATTypography>
                        </ATBox>
                        <ATBox component="td" textAlign="left" py={1} pr={1} pl={3}>
                          <ATTypography variant="body2" color="text" fontWeight="regular">
                            $ 89.00
                          </ATTypography>
                        </ATBox>
                        <ATBox component="td" textAlign="left" py={1} pr={1} pl={3}>
                          <ATTypography variant="body2" color="text" fontWeight="regular">
                            $ 89.00
                          </ATTypography>
                        </ATBox>
                      </TableRow>
                      <TableRow>
                        <ATBox component="td" textAlign="left" p={1} sx={borderBottom} />
                        <ATBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        />
                        <ATBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <ATTypography variant="h5">Total</ATTypography>
                        </ATBox>
                        <ATBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <ATTypography variant="h5">$ 698</ATTypography>
                        </ATBox>
                      </TableRow>
                    </TableBody>
                  </Table>
                </ATBox>
              </ATBox>

              {/* Invoice footer */}
              <ATBox p={3} mt={7}>
                <Grid container>
                  <Grid item xs={12} lg={5}>
                    <ATTypography variant="h5" fontWeight="medium">
                      Thank you!
                    </ATTypography>
                    <ATBox mt={1} mb={2} lineHeight={0}>
                      <ATTypography variant="button" color={darkMode ? "text" : "secondary"}>
                        If you encounter any issues related to the invoice you can contact us at:
                      </ATTypography>
                    </ATBox>
                    <ATTypography
                      component="span"
                      variant="h6"
                      fontWeight="regular"
                      color={darkMode ? "text" : "secondary"}
                    >
                      email:{" "}
                      <ATTypography component="span" variant="h6" fontWeight="regular">
                        info@aldrtech.sy
                      </ATTypography>
                    </ATTypography>
                  </Grid>
                  <Grid item xs={12} lg={7}>
                    <ATBox
                      width="100%"
                      height={{ xs: "auto", md: "100%" }}
                      display="flex"
                      justifyContent={{ xs: "flex-start", md: "flex-end" }}
                      alignItems="flex-end"
                      mt={{ xs: 2, md: 0 }}
                    >
                      <ATButton variant="gradient" color="info" onClick={() => window.print()}>
                        print
                      </ATButton>
                    </ATBox>
                  </Grid>
                </Grid>
              </ATBox>
            </Card>
          </Grid>
        </Grid>
      </ATBox>
    </BaseLayout>
  );
}

export default Invoice;
