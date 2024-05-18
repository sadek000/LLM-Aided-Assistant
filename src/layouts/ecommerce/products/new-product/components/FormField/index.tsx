//  ALDR Tech Dashboard components
import ATInput from "components/ATInput";

// Declaring props types for FormField
interface Props {
  label: string;
  [key: string]: any;
}

function FormField({ label, ...rest }: Props): JSX.Element {
  return <ATInput {...rest} label={label} variant="standard" fullWidth />;
}

export default FormField;
