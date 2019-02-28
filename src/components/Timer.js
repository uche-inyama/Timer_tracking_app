import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export class Timer extends React.Component {

	handleTrashClick = () => {
		this.props.onTrashClick(this.props.id);
	};
  render() {
    //const elapsedString = helpers.renderElapsedString(this.props.elapsed);
    return (
      <div className='centered_card'>
        <div className='content'>
          <div className='header'>
            {this.props.title}
          </div>
          <div className='meta'>
            {this.props.project}
          </div>
          <div className='description'>
            <h2>
              
            </h2>
          </div>
          <div className='extra_content'>
	            <span 
	           	 onClick ={this.props.onEditClick}
	             className='edit_icon'>
	            <FontAwesomeIcon icon="edit" />
	            </span>
	            <span 
	            onClick={this.handleTrashClick}
	            className='trash_icon'>
	              <FontAwesomeIcon icon="trash"/> 
	            </span>
          </div>
        </div>
        <div className='start_button'>
        <div className="align">Start</div> 
        </div>
      </div>
    );
  }
}