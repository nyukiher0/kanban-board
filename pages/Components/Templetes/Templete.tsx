import { NextPage } from 'next';
import styles from './Templete.module.css';
import TaskCards from '../Organisms/TaskCards';
import { resetServerContext } from 'react-beautiful-dnd';
const Templete: NextPage = () => {
  return (
    <div className={styles.Templete}>
      <TaskCards />
    </div>
  );
};

export default Templete;
