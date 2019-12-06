import React, { Component } from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`
const Title = styled.h3`

`
const TaskList = styled.div`
	flex-grow: 1;
	padding: 30px;
	transition: all .2s ease-in-out;
	background-color: ${props => props.isDraggingOver ? 'tomato' : '#f2f2f2'};
`

export class Column extends Component {
	render() {
		return (
			<Container>
				<Title>{this.props.column.title}</Title>
				<Droppable droppableId={this.props.column.id} >
					{(provided, snapshot) => (
						<TaskList
							ref={provided.innerRef}
							{...provided.droppableProps}
							isDraggingOver={snapshot.isDraggingOver}
						>
							{ this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />) }
							{ provided.placeholder }
						</TaskList>
					)}
				</Droppable>
			</Container>
		);
	}
}


export default Column;