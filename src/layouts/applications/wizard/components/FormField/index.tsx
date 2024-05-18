//  ALDR Tech Dashboard components
import ATInput from "components/ATInput";

function FormField({ label, ...rest }: { label: string; [key: string]: any }): JSX.Element {
  return <ATInput variant="standard" label={label} fullWidth {...rest} />;
}

export default FormField;
