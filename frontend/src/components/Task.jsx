import styles from "./Task.module.css";

export default function (props) {
  let { title, description, type } = props;

  return (
    <article className={styles.task}>
      <div className={styles.taskHeader}>
        <h2 className={styles.taskTitle}>{title}</h2>
        <div className={styles.taskDivType}>
          <img
            src="./src/assets/img/personal-type.png"
            alt=""
            className={styles.taskImg}
          />
          <p className={styles.taskType}>{type}</p>
        </div>
      </div>
      <p className={styles.taskDescription}>{description}</p>
    </article>
  );
}
