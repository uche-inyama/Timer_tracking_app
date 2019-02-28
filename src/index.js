import React from 'react';
import ReactDOM from 'react-dom';
import  TimersDashboard from './components/TimersDashboard';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './app.css';

library.add(faTrash, faEdit);




ReactDOM.render(<TimersDashboard/>, document.getElementById('root'));