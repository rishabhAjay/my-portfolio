import HashLoader from "react-spinners/HashLoader";
import CssBaseline from "@mui/material/CssBaseline";
import styles from "../../styles/Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <CssBaseline />
      <HashLoader color={"#f72a1b"} size={140} />
    </div>
  );
};

export default Spinner;
