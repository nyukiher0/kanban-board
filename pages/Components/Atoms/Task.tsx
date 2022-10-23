import { NextPage } from 'next';
import styles from './Atoms.module.css';
import { BsFillTrashFill } from 'react-icons/bs';
import { Draggable } from 'react-beautiful-dnd';

const Task: NextPage = ({ index, task, taskList, setTaskList }) => {
  const handleDelete = (id) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      }),
    );
  };

  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div
          className={styles.Task}
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className={styles.TaskText}>{task.text}</p>
          <button
            className={styles.TaskTrashButton}
            onClick={() => {
              handleDelete(task.id);
            }}
          >
            <BsFillTrashFill />
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
