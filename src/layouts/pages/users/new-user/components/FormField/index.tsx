// formik components
import { ErrorMessage, Field } from "formik";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATInput from "components/ATInput";

// Declaring props types for FormField
interface Props {
  label: string;
  name: string;
  [key: string]: any;
}

function FormField({ label, name, ...rest }: Props): JSX.Element {
  return (
    <ATBox mb={1.5}>
      <Field {...rest} name={name} as={ATInput} variant="standard" label={label} fullWidth />
      <ATBox mt={0.75}>
        <ATTypography component="div" variant="caption" color="error" fontWeight="regular">
          {(<ErrorMessage name={name} />) as any}
        </ATTypography>
      </ATBox>
    </ATBox>
  );
}

export default FormField;
