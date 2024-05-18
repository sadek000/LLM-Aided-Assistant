// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Autocomplete from "@mui/material/Autocomplete";

//  ALDR Tech Dashboard components
import ATBox from "components/ATBox";
import ATTypography from "components/ATTypography";
import ATButton from "components/ATButton";
import ATBadge from "components/ATBadge";
import ATInput from "components/ATInput";

function ProductInfo(): JSX.Element {
  return (
    <ATBox>
      <ATBox mb={1}>
        <ATTypography variant="h3" fontWeight="bold">
          Minimal Bar Stool
        </ATTypography>
      </ATBox>
      <ATTypography variant="h4" color="text">
        <Icon>star</Icon>
        <Icon>star</Icon>
        <Icon>star</Icon>
        <Icon>star</Icon>
        <Icon>star_half</Icon>
      </ATTypography>
      <ATBox mt={1}>
        <ATTypography variant="h6" fontWeight="medium">
          Price
        </ATTypography>
      </ATBox>
      <ATBox mb={1}>
        <ATTypography variant="h5" fontWeight="medium">
          $1,419
        </ATTypography>
      </ATBox>
      <ATBadge variant="contained" color="success" badgeContent="in stock" container />
      <ATBox mt={3} mb={1} ml={0.5}>
        <ATTypography variant="button" fontWeight="regular" color="text">
          Description
        </ATTypography>
      </ATBox>
      <ATBox component="ul" m={0} pl={4} mb={2}>
        <ATBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <ATTypography variant="body2" color="text" fontWeight="regular" verticalAlign="middle">
            The most beautiful curves of this swivel stool adds an elegant touch to any environment
          </ATTypography>
        </ATBox>
        <ATBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <ATTypography variant="body2" color="text" fontWeight="regular" verticalAlign="middle">
            Memory swivel seat returns to original seat position
          </ATTypography>
        </ATBox>
        <ATBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <ATTypography variant="body2" color="text" fontWeight="regular" verticalAlign="middle">
            Comfortable integrated layered chair seat cushion design
          </ATTypography>
        </ATBox>
        <ATBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <ATTypography variant="body2" color="text" fontWeight="regular" verticalAlign="middle">
            Fully assembled! No assembly required
          </ATTypography>
        </ATBox>
      </ATBox>
      <ATBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            <ATBox mb={1.5} lineHeight={0} display="inline-block">
              <ATTypography component="label" variant="button" color="text" fontWeight="regular">
                Frame Material
              </ATTypography>
            </ATBox>
            <Autocomplete
              defaultValue="Steel"
              options={["Aluminium", "Carbon", "Steel", "Wood"]}
              renderInput={(params) => <ATInput {...params} variant="standard" />}
            />
          </Grid>
          <Grid item xs={12} lg={5}>
            <ATBox mb={1.5} lineHeight={0} display="inline-block">
              <ATTypography component="label" variant="button" color="text" fontWeight="regular">
                Color
              </ATTypography>
            </ATBox>
            <Autocomplete
              defaultValue="White"
              options={["Black", "Blue", "Grey", "Pink", "Red", "White"]}
              renderInput={(params) => <ATInput {...params} variant="standard" />}
            />
          </Grid>
          <Grid item xs={12} lg={2}>
            <ATBox mb={1.5} lineHeight={0} display="inline-block">
              <ATTypography component="label" variant="button" color="text" fontWeight="regular">
                Quantity
              </ATTypography>
            </ATBox>
            <ATInput inputProps={{ type: "number" }} defaultValue={1} variant="standard" />
          </Grid>
        </Grid>
      </ATBox>
      <ATBox mt={3}>
        <Grid item xs={12} lg={5} container>
          <ATButton variant="gradient" color="info" fullWidth>
            add to cart
          </ATButton>
        </Grid>
      </ATBox>
    </ATBox>
  );
}

export default ProductInfo;
