import HashLoader from "react-spinners/HashLoader";
import styles from "../../styles/Spinner.module.css";

const Spinner = ({ color, size, style }) => {
  return (
    <div className={style}>
      <HashLoader color={color} size={size} />
    </div>
  );
};

export default Spinner;
