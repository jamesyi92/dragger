import React, { Component } from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Container = styled.div`
	padding: 30px;
	margin: 30px;
`
const Title = styled.h3`

`
const TaskList = styled.div`
	
`

export class Column extends Component {
	render() {
		return (
			<Container>
				<Title>Title Yo</Title>
				<Droppable droppableId={this.props.column.id} >
					{(provided) => (
						<TaskList
							ref={provided.innerRef}
							{...provided.droppableProps}
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