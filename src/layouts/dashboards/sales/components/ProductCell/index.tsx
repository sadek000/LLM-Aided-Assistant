//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATAvatar from "components/ATAvatar";

// Declaring props types for ProductCell
interface Props {
  image: string;
  name: string;
  orders: string | number;
}

function ProductCell({ image, name, orders }: Props): JSX.Element {
  return (
    <ATBox display="flex" alignItems="center" pr={2}>
      <ATBox mr={2}>
        <ATAvatar src={image} alt={name} />
      </ATBox>
      <ATBox display="flex" flexDirection="column">
        <ATTypography variant="button" fontWeight="medium">
          {name}
        </ATTypography>
        <ATTypography variant="button" fontWeight="regular" color="secondary">
          <ATTypography component="span" variant="button" fontWeight="regular" color="success">
            {orders}
          </ATTypography>{" "}
          orders
        </ATTypography>
      </ATBox>
    </ATBox>
  );
}

export default ProductCell;
