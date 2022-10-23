import { NextPage } from 'next';
import { useState } from 'react';
import styles from './Atoms.module.css';

const TaskCardTitle: NextPage = () => {
  const todayDate = new Date();
  const Days = ['日', '月', '火', '水', '木', '金', '土'];
  const [isClick, setIsClick] = useState<boolean>(false);
  const [inputCardTitle, setInputCardTitle] = useState<string>(
    `${todayDate.getFullYear()}年${
      todayDate.getMonth() + 1
    }月${todayDate.getDate()}日（${Days[todayDate.getDay()]}）`,
  );
  const handleClick = () => {
    setIsClick(true);
  };
  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };
  const handleBlur = () => {
    setIsClick(false);
  };
  return (
    <div className={styles.TaskCardTitle} onClick={handleClick}>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.TaskCardTitleInput}
            autoFocus
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputCardTitle}
            maxLength="15"
          />
        </form>
      ) : (
        <h3 className={styles.TaskCardTitleHeader}>{inputCardTitle}</h3>
      )}
    </div>
  );
};

export default TaskCardTitle;
