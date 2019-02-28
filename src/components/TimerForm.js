import React from 'react';

export class TimerForm extends React.Component {

	state = {
		title: this.props.title || '',
		project: this.props.project || '',
	};

	handleTitleChange = (e) =>{
		this.setState({ title: e.target.value });
	};

	handleProjectChange =(e)=>{
		this.setState({ project: e.target.value });
	};

	handleSubmit = () => {
		this.props.onFormSubmit({
			id: this.props.id,
			title: this.state.title,
			project: this.state.project,
		});
	};

  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <div className='centered_card'>
        <div className='content'>
          <div className='form'>
            <div className='field'>
              <label>Title</label>
              <input type='text' 
              value={this.state.title}
              onChange={this.handleTitleChange} />
            </div>
            <div className='field'>
              <label>Project</label>
              <input 
	              type='text' 
	              onChange={this.handleProjectChange} 
              />
            </div>
            <div className='two_bottom'>
              <button className='blue_button'
              onClick={this.handleSubmit}
              >
                {submitText}
              </button>
              <button className='red_button'
              onClick={this.props.onFormClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}