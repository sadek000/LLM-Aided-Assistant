import { ReactNode } from "react";

//  ALDR Tech Dashboard components
import ATTypography from "components/ATTypography";

function DefaultCell({ children }: { children: ReactNode }): JSX.Element {
  return (
    <ATTypography variant="button" color="secondary">
      {children}
    </ATTypography>
  );
}

export default DefaultCell;
