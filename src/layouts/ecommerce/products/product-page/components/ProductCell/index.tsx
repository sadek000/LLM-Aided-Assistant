//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATAvatar from "components/ATAvatar";

// Declaring props types for ProductCell
interface Props {
  image: string;
  name: string;
}

function ProductCell({ image, name }: Props): JSX.Element {
  return (
    <ATBox display="flex" alignItems="center" pr={2}>
      <ATBox mr={2}>
        <ATAvatar src={image} alt={name} />
      </ATBox>
      <ATTypography variant="button" fontWeight="medium">
        {name}
      </ATTypography>
    </ATBox>
  );
}

export default ProductCell;
