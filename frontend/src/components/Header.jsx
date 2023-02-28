import styles from "./Header.module.css";

export default function (props) {
  let { title } = props;

  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
    </header>
  );
}
