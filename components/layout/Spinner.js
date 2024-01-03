import { Grid } from "react-loader-spinner";
const Spinner = ({ color, size, style }) => {
  return (
    <div className={style}>
      <Grid height={size} width={size} color={color} />
    </div>
  );
};

export default Spinner;
