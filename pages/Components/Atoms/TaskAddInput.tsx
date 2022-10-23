import { NextPage } from 'next';
import styles from './Atoms.module.css';
import { v4 as uuid } from 'uuid';

const TaskAddInput: NextPage = ({
  inputText,
  setInputText,
  taskList,
  setTaskList,
}) => {
  const handleSubmit = (e) => {
    const taskId = uuid();
    e.preventDefault();
    // On submit(when Enter entered), put inputText in TaskList.
    if (!inputText) {
      return;
    }
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `tasklist-${taskId}`,
        text: inputText,
      },
    ]);
    setInputText('');
  };
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div className={styles.TaskAddInput}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Put your Task"
          className={styles.TaskAddInputForm}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default TaskAddInput;
