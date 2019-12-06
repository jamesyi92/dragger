import React, { Component } from 'react';
import styled from 'styled-components';
import initialData from './data';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';

const DraggerContainer = styled.div`
	margin: 0 auto;
	max-width: 1140px;
`

const DraggerWrap = styled.div`
	display: grid;
	padding:30px;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-template-rows: 1fr;
	grid-gap: 30px;
`

class Dragger extends Component {
	state = initialData;

	onDragEnd = result => {

		const { destination, source, draggableId } = result;

		if (!destination) {
			return;
		}

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return
		}

		const start = this.state.columns[source.droppableId];
		const finish = this.state.columns[destination.droppableId];

		if(start === finish) {

			const newTaskIds = [...start.taskIds];
			newTaskIds.splice(source.index, 1);
			newTaskIds.splice(destination.index, 0, draggableId);

			const newColumn = {
				...start,
				taskIds: newTaskIds
			}

			const newState = {
				...this.state,
				columns: {
					...this.state.columns,
					[newColumn.id]: newColumn
				}
			}

			this.setState(newState);
			return;

		}

		const startTaskIds = [...start.taskIds];
		startTaskIds.splice(source.index, 1);
		const newStart = {
			...start,
			taskIds: startTaskIds,
		}

		const finishTaskIds = [...finish.taskIds];
		finishTaskIds.splice(destination.index, 0, draggableId);
		const newFinish = {
			...finish,
			taskIds: finishTaskIds,
		}

		const newState = {
			...this.state,
			columns: {
				...this.state.columns,
				[newStart.id]: newStart,
				[newFinish.id]: newFinish
			}
		}

		this.setState(newState);

	}

	render() {
		return(
			<DraggerContainer>
				<DraggerWrap>
					<DragDropContext
						onDragEnd={this.onDragEnd}
					>
						{
							this.state.columnOrder.map((columnId) => {
								const column = this.state.columns[columnId];
								const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
								return <Column key={column.id} column={column} tasks={tasks} />;
							})
						}
					</DragDropContext>
				</DraggerWrap>
			</DraggerContainer>
		)
	}
}

export default Dragger;

