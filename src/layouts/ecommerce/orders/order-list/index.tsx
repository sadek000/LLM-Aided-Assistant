import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATButton from "components/ATButton";

//  ALDR Tech Dashboard examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import dataTableData from "layouts/ecommerce/orders/order-list/data/dataTableData";

function OrderList(): JSX.Element {
  const [menu, setMenu] = useState(null);

  const openMenu = (event: any) => setMenu(event.currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      anchorEl={menu}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={Boolean(menu)}
      onClose={closeMenu}
      keepMounted
    >
      <MenuItem onClick={closeMenu}>Status: Paid</MenuItem>
      <MenuItem onClick={closeMenu}>Status: Refunded</MenuItem>
      <MenuItem onClick={closeMenu}>Status: Canceled</MenuItem>
      <Divider sx={{ margin: "0.5rem 0" }} />
      <MenuItem onClick={closeMenu}>
        <ATTypography variant="button" color="error" fontWeight="regular">
          Remove Filter
        </ATTypography>
      </MenuItem>
    </Menu>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ATBox my={3}>
        <ATBox display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
          <ATButton variant="gradient" color="info">
            new order
          </ATButton>
          <ATBox display="flex">
            <ATButton variant={menu ? "contained" : "outlined"} color="dark" onClick={openMenu}>
              filters&nbsp;
              <Icon>keyboard_arrow_down</Icon>
            </ATButton>
            {renderMenu}
            <ATBox ml={1}>
              <ATButton variant="outlined" color="dark">
                <Icon>description</Icon>
                &nbsp;export csv
              </ATButton>
            </ATBox>
          </ATBox>
        </ATBox>
        <Card>
          <DataTable table={dataTableData} entriesPerPage={false} canSearch />
        </Card>
      </ATBox>
      <Footer />
    </DashboardLayout>
  );
}

export default OrderList;
