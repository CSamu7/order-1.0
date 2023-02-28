import styles from "./AddButton.module.css";

export default function () {
  return (
    <button className={styles.btnAdd}>
      <p className={styles.btnText}>+</p>
    </button>
  );
}
