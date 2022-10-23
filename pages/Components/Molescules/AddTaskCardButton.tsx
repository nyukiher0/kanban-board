import { NextPage } from 'next';
import { v4 as uuid } from 'uuid';
import styles from './Molescules.module.css';
import Button from 'react-bootstrap/Button';

const AddTaskCardButton: NextPage = ({ taskCardsList, setTaskCardsList }) => {
  const addTaskCard = () => {
    const taskCardId = uuid();
    setTaskCardsList([
      ...taskCardsList,
      { id: taskCardId, draggableId: `item${taskCardId}` },
    ]);
  };
  return (
    <div className={styles.AddTaskCardButton}>
      <Button
        variant="primary"
        className={styles.AddTaskCardButtonInput}
        onClick={addTaskCard}
      >
        +
      </Button>
    </div>
  );
};

export default AddTaskCardButton;
