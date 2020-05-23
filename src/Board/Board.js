import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import List from '../List'
import TrelloButton from '../TrelloButton'
import classNames from './Board.scss'
import {  sort } from '../actions'


class Board extends Component {
  constructor(props){
      super(props);
      this.state = { }
  }
  onDragEnd = (result) => {
    const { destination, source, draggableId, type} = result

    if(!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    )
  }

  render() {
    const { board } = this.props
    return(
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId='all-lists' direction='horizontal' type='list'>
          {(provided, snapshot) => (
              <div 
                className={classNames.Board}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                  {board.map((list, index) => <List listId={list.id} key={list.id} title={list.title} cards={list.cards} index={index} />)}
                  {provided.placeholder}
                  <TrelloButton list />
              </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}
const mapStateToProps = (state)=>{
  return  ({ board: state.board})
}

export default connect(mapStateToProps)(Board)
