import { useRef, useState, useMemo, useEffect } from "react";

// react-chartjs-2 components
import { Line } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";

// Chart configurations
import configs from "layouts/applications/calendar/components/ProductivityChart/configs";

//  ALDR Tech Dashboard Base Styles
import typography from "assets/theme/base/typography";

function ProductivityChart(): JSX.Element {
  const { size } = typography;
  const chartRef = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [chart, setChart] = useState([]);
  const { data, options }: any = chart;

  const handleOpenMenu = ({ currentTarget }: { currentTarget: HTMLSpanElement }) =>
    setOpenMenu(currentTarget);
  const handleCloseMenu = () => setOpenMenu(null);

  useEffect(() => setChart(configs()), []);

  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      keepMounted
    >
      <MenuItem onClick={handleCloseMenu}>Action</MenuItem>
      <MenuItem onClick={handleCloseMenu}>Anoter action</MenuItem>
      <MenuItem onClick={handleCloseMenu}>Something else here</MenuItem>
    </Menu>
  );

  return (
    <Card sx={{ overflow: "hidden" }}>
      <ATBox bgColor="dark" variant="gradient">
        <ATBox p={2}>
          <ATBox display="flex" justifyContent="space-between">
            <ATBox>
              <ATTypography variant="h6" fontWeight="medium" color="white">
                Productivity
              </ATTypography>
              <ATBox display="flex" alignItems="center">
                <ATBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                  <Icon sx={{ fontWeight: "bold" }}>arrow_upward</Icon>
                </ATBox>
                <ATTypography variant="button" color="white" fontWeight="medium">
                  4% more{" "}
                  <ATTypography variant="button" color="white">
                    in 2021
                  </ATTypography>
                </ATTypography>
              </ATBox>
            </ATBox>
            <ATTypography color="white" onClick={handleOpenMenu}>
              <Icon sx={{ cursor: "pointer" }}>more_horiz</Icon>
            </ATTypography>
            {renderMenu()}
          </ATBox>
        </ATBox>
        {useMemo(
          () => (
            <ATBox ref={chartRef} sx={{ height: "6.25rem" }}>
              <Line data={data} options={options} />
            </ATBox>
          ),
          [chart]
        )}
      </ATBox>
    </Card>
  );
}

export default ProductivityChart;
