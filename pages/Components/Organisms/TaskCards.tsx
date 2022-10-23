import { NextPage } from 'next';
import { useState } from 'react';
import styles from './Organisms.module.css';
import TaskCard from '../Molescules/TaskCard';
import AddTaskCardButton from '../Molescules/AddTaskCardButton';
import {
  DragDropContext,
  Droppable,
  resetServerContext,
} from 'react-beautiful-dnd';

const TaskCards: NextPage = () => {
  const [taskCardsList, setTaskCardsList] = useState([
    { id: '0', draggableId: 'item0' },
  ]);
  resetServerContext();
  const handleDragEnd = (result) => {
    const remove = taskCardsList.splice(result.source.index, 1);
    taskCardsList.splice(result.destination.index, 0, remove[0]);
    setTaskCardsList(taskCardsList);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            className={styles.TaskCards}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {taskCardsList.map((taskCard, index: any) => (
              <TaskCard
                key={taskCard.id}
                index={index}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCard}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskCards;
