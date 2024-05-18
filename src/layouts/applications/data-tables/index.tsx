// @mui material components
import Card from "@mui/material/Card";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";

//  ALDR Tech Dashboard examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import dataTableData from "layouts/applications/data-tables/data/dataTableData";

function DataTables(): JSX.Element {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ATBox pt={6} pb={3}>
        <ATBox mb={3}>
          <Card>
            <ATBox p={3} lineHeight={1}>
              <ATTypography variant="h5" fontWeight="medium">
                Datatable Simple
              </ATTypography>
              <ATTypography variant="button" color="text">
                A lightweight, extendable, dependency-free javascript HTML table plugin.
              </ATTypography>
            </ATBox>
            <DataTable table={dataTableData} />
          </Card>
        </ATBox>
        <Card>
          <ATBox p={3} lineHeight={1}>
            <ATTypography variant="h5" fontWeight="medium">
              Datatable Search
            </ATTypography>
            <ATTypography variant="button" color="text">
              A lightweight, extendable, dependency-free javascript HTML table plugin.
            </ATTypography>
          </ATBox>
          <DataTable table={dataTableData} canSearch />
        </Card>
      </ATBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DataTables;
