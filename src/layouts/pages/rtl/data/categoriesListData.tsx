//  ALDR Tech Dashboard components
import ATTypography from "components/ATTypography";

// types
type Types = any;

const categoriesListData: Types = [
  {
    color: "dark",
    icon: "launch",
    name: "الأجهزة",
    description: (
      <>
        250 في المخزن,{" "}
        <ATTypography variant="caption" color="text" fontWeight="medium">
          346+ تم البيع
        </ATTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "book_online",
    name: "تذاكر",
    description: (
      <>
        123 مغلق,{" "}
        <ATTypography variant="caption" color="text" fontWeight="medium">
          15 افتح
        </ATTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "priority_high",
    name: "سجلات الخطأ",
    description: (
      <>
        1 is نشيط,{" "}
        <ATTypography variant="caption" color="text" fontWeight="medium">
          40 مغلق
        </ATTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "insert_emoticon",
    name: "المستخدمين السعداء",
    description: (
      <ATTypography variant="caption" color="text" fontWeight="medium">
        + 430
      </ATTypography>
    ),
    route: "/",
  },
];

export default categoriesListData;
