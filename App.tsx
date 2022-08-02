import * as React from 'react';
import './style.css';

export default function App() {
  var [inProgress, setInProgress] = React.useState([
    'TASK 1',
    'TASK 2',
    'TASK 3',
  ]);
  var [development, setDevelopment] = React.useState([]);
  var [completed, setCompleted] = React.useState([]);

  let moveToDevelopment = (index) => {
    let task = inProgress[index];
    setDevelopment([...development, task]);
    setInProgress(inProgress.filter((taskValue) => taskValue != task));
  };

  let moveToProgress = (index) => {
    let task = development[index];
    setCompleted([...completed, task]);
    setDevelopment(development.filter((taskValue) => taskValue != task));
  };

  return (
    <div className="mainContainer">
      <div className="tab tab1">
        <p className="header">In Progress</p>
        {inProgress.map((task, index) => {
          return (
            <button
              className="btn"
              onClick={() => {
                moveToDevelopment(index);
              }}
            >
              {task}
            </button>
          );
        })}
      </div>
      <div className="tab tab2">
        <p className="header">Development</p>
        {development.map((task, index) => {
          return (
            <button
              className="btn"
              onClick={() => {
                moveToProgress(index);
              }}
            >
              {task}
            </button>
          );
        })}
      </div>
      <div className="tab tab3">
        <p className="header">Completed</p>
        {completed.map((task) => {
          return <button className="btn">{task}</button>;
        })}
      </div>
    </div>
  );
}
