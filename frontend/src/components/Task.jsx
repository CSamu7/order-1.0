import { useState } from "react";
import styles from "./Task.module.css";

export default function (props) {
  const [isShowMore, setIsShowMore] = useState(false);
  let { title, description, type } = props;

  const handleShowMore = () => setIsShowMore(!isShowMore);

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

      {isShowMore && <p className={styles.taskDescription}>{description}</p>}
      <button onClick={handleShowMore}>
        Mostrar {isShowMore ? "menos" : "mas"}
      </button>
    </article>
  );
}
