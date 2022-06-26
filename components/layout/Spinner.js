import HashLoader from "react-spinners/HashLoader";
import styles from "../../styles/Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <HashLoader color={"#f72a1b"} size={140} />
    </div>
  );
};

export default Spinner;
