//  ALDR Tech Dashboard components
import ATInput from "components/ATInput";
import ATBox from "components/ATBox";

// Declaring props types for FormField
interface Props {
  label: string;
  [key: string]: any;
}

function FormField({ label, ...rest }: Props): JSX.Element {
  return (
    <ATBox mb={2}>
      <ATInput {...rest} variant="standard" label={label} fullWidth />
    </ATBox>
  );
}

export default FormField;
