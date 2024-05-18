// @mui material components
import Card from "@mui/material/Card";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATButton from "components/ATButton";

// Images
import productImage from "assets/images/products/product-11.jpg";

function ProductImage(): JSX.Element {
  return (
    <Card
      sx={{
        "&:hover .card-header": {
          transform: "translate3d(0, -50px, 0)",
        },
      }}
    >
      <ATBox
        position="relative"
        borderRadius="lg"
        mt={-3}
        mx={2}
        className="card-header"
        sx={{ transition: "transform 300ms cubic-bezier(0.34, 1.61, 0.7, 1)" }}
      >
        <ATBox
          component="img"
          src={productImage}
          alt="Product Image"
          borderRadius="lg"
          shadow="sm"
          width="100%"
          height="100%"
          position="relative"
          zIndex={10}
          mb={2}
        />
      </ATBox>
      <ATBox textAlign="center" pt={2} pb={3} px={3}>
        <ATBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={-11}
          position="relative"
          zIndex={1}
        >
          <ATBox mr={1}>
            <ATButton variant="gradient" color="info" size="small">
              edit
            </ATButton>
          </ATBox>
          <ATButton variant="outlined" color="dark" size="small">
            remove
          </ATButton>
        </ATBox>
        <ATTypography variant="h5" fontWeight="regular" sx={{ mt: 4 }}>
          Product Image
        </ATTypography>
        <ATTypography variant="body2" color="text" sx={{ mt: 1.5, mb: 1 }}>
          The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to
          &#8220;Naviglio&#8221; where you can enjoy the main night life in Barcelona.
        </ATTypography>
      </ATBox>
    </Card>
  );
}

export default ProductImage;
