import React from 'react';
import {EditableTimerList} from './EditableTimerList';
import {ToggleableTimerForm} from './ToggleableTimerForm';
import uuid from 'uuid';

class TimerDashboard extends React.Component {
	state = {
		timers: [
			{
				title: 'practice squat',
				project: 'Gym Chores',
				id: uuid.v4(),
				elapsed: 5456099,
				runningSince: Date.now(),
			},

			{
				title: 'Bake squash',
				project: 'Kitchen Chores',
				id: uuid.v4(),
				elapsed: 1273998,
				runningSince: null,
			}
		]
	}

	handleCreateFormSubmit =(timer)=> {
		this.createTimer(timer);
	};

	handleEditFormSubmit = (attrs) => {
  	this.updateTimer(attrs);
  };

  createTimer = (timer) => {
		const t = this.newTimer(timer);
		this.setState({
			timers: this.state.timers.concat(t),
		});
	};

	handleTrashClick = (timerId) => {
		this.deleteTimer(timerId);
	};

	deleteTimer = (timerId) =>{
		this.setState({
			timers: this.state.timers.filter(t => t.id !== timerId),
		});
	};

	updateTimer = (attrs) => {
		this.setState({
			timers: this.state.timers.map((timer) => {
				if(timer.id === attrs.id){
					return Object.assign({}, timer, {
						title: attrs.title,
						project: attrs.project,
					});
				}else {
					return timer;
				}
			}),
		});
	};

	newTimer = (attrs = {}) => {
	    const timer = {
	      title: attrs.title || 'Timer',
	      project: attrs.project || 'Project',
	      id: uuid.v4(), // eslint-disable-line no-undef
	      elapsed: 0,
    };

    return timer;
  }
  
	render(){
		return (
			<div className='column_grid'>
				<div className='column'>
					<EditableTimerList 
						timers={this.state.timers}
						onFormSubmit={this.handleEditFormSubmit}
						onTrashClick ={this.handleTrashClick}

						/>

					<ToggleableTimerForm 
						onFormSubmit={this.handleCreateFormSubmit}
					/>
				</div>
			</div>
		);
	}
}

export default  TimerDashboard;