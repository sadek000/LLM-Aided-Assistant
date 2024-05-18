import { useMemo } from "react";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATDropzone from "components/ATDropzone";

function Media(): JSX.Element {
  return (
    <ATBox>
      <ATTypography variant="h5">Media</ATTypography>
      <ATBox mt={3}>
        <ATBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
          <ATTypography component="label" variant="button" fontWeight="regular" color="text">
            Product Image
          </ATTypography>
        </ATBox>
        {useMemo(
          () => (
            <ATDropzone options={{ addRemoveLinks: true }} />
          ),
          []
        )}
      </ATBox>
    </ATBox>
  );
}

export default Media;
