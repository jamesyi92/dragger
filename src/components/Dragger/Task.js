import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
	padding: 30px;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 15px 25px;
	background: #ffffff;
	&:not(:last-child) {
		margin-bottom: 30px;
	}
`

class Task extends Component {
	render() {
		return (
			<Draggable draggableId={this.props.task.id} index={this.props.index} >
				{(provided) => (
					<Container
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
					>
						{this.props.task.content}
					</Container>
				)}
			</Draggable>
		);
	}
}

export default Task;