import { ReactNode } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import Icon from "@mui/material/Icon";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";

// Declaring props types for the Breadcrumbs
interface Props {
  icon: ReactNode;
  title: string;
  route: string | string[];
  light?: boolean;
  [key: string]: any;
}

function Breadcrumbs({ icon, title, route, light }: Props): JSX.Element {
  const routes: string[] | any = route.slice(0, -1);

  return (
    <ATBox mr={{ xs: 0, xl: 8 }}>
      <MuiBreadcrumbs
        sx={{
          "& .MuiBreadcrumbs-separator": {
            color: ({ palette: { white, grey } }) => (light ? white.main : grey[600]),
          },
        }}
      >
        <Link to="/">
          <ATTypography
            component="span"
            variant="body2"
            color={light ? "white" : "dark"}
            opacity={light ? 0.8 : 0.5}
            sx={{ lineHeight: 0 }}
          >
            <Icon>{icon}</Icon>
          </ATTypography>
        </Link>
        {routes.map((el: string) => (
          <Link to={`/${el}`} key={el}>
            <ATTypography
              component="span"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
              color={light ? "white" : "dark"}
              opacity={light ? 0.8 : 0.5}
              sx={{ lineHeight: 0 }}
            >
              {el}
            </ATTypography>
          </Link>
        ))}
        <ATTypography
          variant="button"
          fontWeight="regular"
          textTransform="capitalize"
          color={light ? "white" : "dark"}
          sx={{ lineHeight: 0 }}
        >
          {title.replace("-", " ")}
        </ATTypography>
      </MuiBreadcrumbs>
      <ATTypography
        fontWeight="bold"
        textTransform="capitalize"
        variant="h6"
        color={light ? "white" : "dark"}
        noWrap
      >
        {title.replace("-", " ")}
      </ATTypography>
    </ATBox>
  );
}

// Declaring default props for Breadcrumbs
Breadcrumbs.defaultProps = {
  light: false,
};

export default Breadcrumbs;
