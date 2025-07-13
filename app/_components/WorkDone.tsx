import styles from "./WorkDone.module.css";
interface Props {
  count: number;
  label: string;
}
function WorkDone({ count, label }: Props) {
  return (
    <div className={styles.WorkDoneContainer}>
      <div>
        <span>+</span>
      </div>
      <div>
        <p>{count}</p>
        
        <p>{label}</p>
      </div>
    </div>
  );
}

export default WorkDone;
