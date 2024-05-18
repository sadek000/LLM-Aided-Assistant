//  ALDR Tech Dashboard components
import ATInput from "components/ATInput";

// Declaring props types for FormField
interface Props {
  label?: string;
  [key: string]: any;
}

function FormField({ label, ...rest }: Props): JSX.Element {
  return (
    <ATInput
      variant="standard"
      label={label}
      fullWidth
      InputLabelProps={{ shrink: true }}
      {...rest}
    />
  );
}

// Declaring default props for FormField
FormField.defaultProps = {
  label: " ",
};

export default FormField;
