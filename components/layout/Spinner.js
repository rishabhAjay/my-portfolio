import { Grid } from "react-loader-spinner";
const Spinner = ({ color, size, style }) => {
  return (
    <div className={style}>
      <Grid
        visible={true}
        height={size}
        width={size}
        color={color}
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
};

export default Spinner;
