import React from 'react';
import { TimerForm } from './TimerForm';

export class ToggleableTimerForm extends React.Component{
	
	state = {
		 isOpen: false
	 };

	handleFormOpen = () => {
		this.setState({ isOpen: true });
	};

	handleFormSubmit =(timer) => {
		this.props.onFormSubmit(timer);
		this.setState({ isOpen: false });
	};
	handleFormClose = ()  =>{
		this.setState({ isOpen: false});
	};
	render(){
		if (this.state.isOpen){
			return (
				<TimerForm 
					onFormSubmit={this.handleFormSubmit}
					onFormClose={this.handleFormClose}
				/>
			);
		}else {
			return (
				<div className='basic_content'>
					<button
					onClick={this.handleFormOpen}
					className='button_icon'>
						<i className='plus icon'/>
					</button>
				</div>
			);
		}
	}
}