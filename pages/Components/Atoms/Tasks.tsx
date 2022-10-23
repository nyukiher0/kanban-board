import { NextPage } from 'next';
import {
  DragDropContext,
  Droppable,
  resetServerContext,
} from 'react-beautiful-dnd';
import styles from './Atoms.module.css';
import Task from './Task';

const Tasks: NextPage = ({ taskList, setTaskList }) => {
  const handleDragEnd = (result) => {
    const remove = taskList.splice(result.source.index, 1);
    taskList.splice(result.destination.index, 0, remove[0]);
    setTaskList(taskList);
  };
  resetServerContext();
  return (
    <div className={styles.Tasks}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index: any) => {
                return (
                  <div key={task.id}>
                    <Task
                      index={index}
                      task={task}
                      taskList={taskList}
                      setTaskList={setTaskList}
                    />
                  </div>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tasks;
