import { NextPage } from 'next';
import styles from './Atoms.module.css';
import CloseButton from 'react-bootstrap/CloseButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskCardDeleteButton: NextPage = ({
  taskCard,
  taskCardsList,
  setTaskCardsList,
}) => {
  const deleteTaskCard = (id) => {
    setTaskCardsList(
      taskCardsList.filter((card) => {
        return card.id !== id;
      }),
    );
  };
  return (
    <div className={styles.TaskCardDeleteButton}>
      <CloseButton
        onClick={() => {
          deleteTaskCard(taskCard.id);
        }}
      />
    </div>
  );
};

export default TaskCardDeleteButton;
