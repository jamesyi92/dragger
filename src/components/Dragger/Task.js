import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
	padding: 30px;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 15px 25px;
	background: ${props => props.isDragging ? 'pink' : '#ffffff'};
	&:not(:last-child) {
		margin-bottom: 30px;
	}
`

class Task extends Component {
	render() {
		return (
			<Draggable draggableId={this.props.task.id} index={this.props.index} >
				{(provided, snapshot) => (
					<Container
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
						isDragging={snapshot.isDragging}
					>
						{this.props.task.content}
					</Container>
				)}
			</Draggable>
		);
	}
}

export default Task;