// @mui material components
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import { Theme } from "@mui/material/styles";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";

//  ALDR Tech Dashboard Base Styles
import typography from "assets/theme/base/typography";

function Footer({ light }: { light?: boolean }): JSX.Element {
  const { size } = typography;

  return (
    <ATBox position="absolute" width="100%" bottom={0} py={4}>
      <Container>
        <ATBox
          width="100%"
          display="flex"
          flexDirection={{ xs: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
          px={1.5}
        >
          <ATBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            color={light ? "white" : "text"}
            fontSize={size.sm}
          >
            &copy; {new Date().getFullYear()}, made with
            <ATBox fontSize={size.md} color={light ? "white" : "dark"} mb={-0.5} mx={0.25}>
              <Icon color="inherit" fontSize="inherit">
                favorite
              </Icon>
            </ATBox>
            by
            <Link href=" " target="_blank">
              <ATTypography variant="button" fontWeight="medium" color={light ? "white" : "dark"}>
                &nbsp;ALDR Tech&nbsp;
              </ATTypography>
            </Link>
            for a better web.
          </ATBox>
          <ATBox
            component="ul"
            sx={({ breakpoints }: Theme) => ({
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              listStyle: "none",
              mt: 3,
              mb: 0,
              p: 0,

              [breakpoints.up("lg")]: {
                mt: 0,
              },
            })}
          >
            <ATBox component="li" pr={2} lineHeight={1}>
              <Link href=" " target="_blank">
                <ATTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  ALDR Tech
                </ATTypography>
              </Link>
            </ATBox>
            <ATBox component="li" px={2} lineHeight={1}>
              <Link href=" presentation" target="_blank">
                <ATTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  About Us
                </ATTypography>
              </Link>
            </ATBox>
            <ATBox component="li" px={2} lineHeight={1}>
              <Link href=" blog" target="_blank">
                <ATTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  Blog
                </ATTypography>
              </Link>
            </ATBox>
            <ATBox component="li" pl={2} lineHeight={1}>
              <Link href=" license" target="_blank">
                <ATTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  License
                </ATTypography>
              </Link>
            </ATBox>
          </ATBox>
        </ATBox>
      </Container>
    </ATBox>
  );
}

// Declaring default props for Footer
Footer.defaultProps = {
  light: false,
};

export default Footer;
