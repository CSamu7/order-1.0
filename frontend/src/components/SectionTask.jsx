import Task from "./Task";
import Button from "./AddButton";
import styles from "./SectionTask.module.css";

export default function (props) {
  let { title } = props;

  return (
    <section className={styles.sectionTask}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTaskTitle}>{title}</h2>
        <Button></Button>
      </header>

      <Task
        title="Estudiar algoritmos"
        description="Leer una hora el libro de Algorithms Illuminated"
        type="Personal"
      ></Task>
      <Task
        title="Estudiar algoritmos"
        description="Leer una hora el libro de Algorithms Illuminated"
        type="Personal"
      ></Task>
    </section>
  );
}
