import React from 'react';
import Task from '../../small/Task/Task';
import taskStore from '../../../stores/TaskStore';
import styles from './Tasks.module.css';
import { observer } from 'mobx-react-lite';
import ButtonContainer from '../../small/ButtonContainer/ButtonContainer';

const Tasks: React.FC = observer(() => {
  const clickHandler = () => {};

  const buttonContainerData = {
    clickHandler,
    label: 'Go To TaskManager',
  };

  return (
    <section className={styles.taskList}>
      <h6 className={styles.h6}>Upcoming Tasks</h6>
      {taskStore.tasks.map((task) => (
        <Task key={task.id} taskData={task} />
      ))}
      <ButtonContainer buttonContainerData={buttonContainerData} />
    </section>
  );
});

export default Tasks;
