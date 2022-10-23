import { NextPage } from 'next';
import { useState } from 'react';
import TaskAddInput from '../Atoms/TaskAddInput';
import TaskCardTitle from '../Atoms/TaskCardTitle';
import TaskCardDeleteButton from '../Atoms/TaskCardDeleteButton';
import Tasks from '../Atoms/Tasks';
import styles from './Molescules.module.css';
import { Draggable } from 'react-beautiful-dnd';

type taskList = [
  {
    [id: string]: string;
    [draggableId: string]: string;
    [text: string]: string;
  },
];

const TaskCard: NextPage = ({
  taskCard,
  index,
  taskCardsList,
  setTaskCardsList,
}) => {
  const [inputText, setInputText] = useState<string>('');
  const [taskList, setTaskList] = useState<taskList>([]);
  // 上記TaskListのuseStateに対する型付け方法がまだ、わからない。おそらく現行方法は、初期化の時点で空配列を渡しているのでNG
  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className={styles.TaskCard}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className={styles.TitleAndDelete} {...provided.dragHandleProps}>
            <TaskCardTitle />
            <TaskCardDeleteButton
              taskCard={taskCard}
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <Tasks taskList={taskList} setTaskList={setTaskList} />
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
