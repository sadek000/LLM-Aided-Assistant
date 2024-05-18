//  ALDR Tech Dashboard components
import ATTypography from "components/ATTypography";

// types
type Types = any;

const categoriesListData: Types = [
  {
    color: "dark",
    icon: "launch",
    name: "Devices",
    description: (
      <>
        250 in stock,{" "}
        <ATTypography variant="caption" color="text" fontWeight="medium">
          346+ sold
        </ATTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "book_online",
    name: "Tickets",
    description: (
      <>
        123 closed,{" "}
        <ATTypography variant="caption" color="text" fontWeight="medium">
          15 open
        </ATTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "priority_high",
    name: "Error logs",
    description: (
      <>
        1 is active,{" "}
        <ATTypography variant="caption" color="text" fontWeight="medium">
          40 closed
        </ATTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "insert_emoticon",
    name: "Happy users",
    description: (
      <ATTypography variant="caption" color="text" fontWeight="medium">
        + 430
      </ATTypography>
    ),
    route: "/",
  },
];

export default categoriesListData;
