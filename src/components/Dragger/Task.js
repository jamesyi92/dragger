import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
	padding: 30px;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 15px 25px;
	border-radius: 6px;
	background-image: linear-gradient(${props => props.isDragging ? '120deg, #f093fb 0%, #f5576c 100%' : '#ffffff 0%, #ffffff 100%'});
	color: ${props => props.isDragging ? '#ffffff' : '#000000'};
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
