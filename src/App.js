import React from 'react';
import './App.css';
import Groups2Icon from '@mui/icons-material/Groups2';
import BusinessIcon from '@mui/icons-material/Business';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import MotivationIcon from '@mui/icons-material/Mood';
import TaskIcon from '@mui/icons-material/Task';
import VentureCapitalIcon from '@mui/icons-material/AttachMoney';
import DeadlineIcon from '@mui/icons-material/Schedule';

// Reusable ListItem component
const ListItem = ({ label, Icon }) => {
  return (
    <li>
      <button className="list-button">
        {Icon && <Icon />} {label}
      </button>
    </li>
  );
};

// List component for each unordered list
const List = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item, index) => (
        <ListItem key={index} label={item.label} Icon={item.icon} />
      ))}
    </ul>
  );
};

const App = () => {
  // Data for the lists with labels and icons
  const businessItems = [
    { label: 'INNOVATIONS', icon: Groups2Icon },
    { label: 'BUSINESS PLAN', icon: BusinessIcon },
    { label: 'BUSINESS MODEL', icon: ModelTrainingIcon },
    { label: 'COWORKING', icon: WorkspacesIcon },
  ];

  const motivationItems = [
    { label: 'MOTIVATION', icon: MotivationIcon },
    { label: 'DEADLINE', icon: DeadlineIcon },
    { label: 'TASKS', icon: TaskIcon },
    { label: 'VENTURE CAPITAL', icon: VentureCapitalIcon },
  ];

  return (
    <div className="App">
      <div className="content-container">
        <div>
          <List items={businessItems} />
        </div>
        <div className="colorful-circle">
          <h2>Hello Cybertz!</h2>
        </div>
        <div>
          <List items={motivationItems} />
        </div>
      </div>
    </div>
  );
};

export default App;


