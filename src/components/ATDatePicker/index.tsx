// react-flatpickr components
import Flatpickr from "react-flatpickr";

// react-flatpickr styles
import "flatpickr/dist/flatpickr.css";

//  ALDR Tech Dashboard components
import ATInput from "components/ATInput";

// types
interface Props {
  input?: {
    [key: string]: any;
  };
  [key: string]: any;
}

function ATDatePicker({ input, ...rest }: Props): JSX.Element {
  return (
    <Flatpickr
      {...rest}
      render={({ defaultValue }: any, ref: any) => (
        <ATInput {...input} defaultValue={defaultValue} inputRef={ref} />
      )}
    />
  );
}

ATDatePicker.defaultProps = {
  input: {},
};

export default ATDatePicker;
