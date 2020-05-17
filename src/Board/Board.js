import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'

import List from '../List'
import TrelloButton from '../TrelloButton'
import './Board.css'
import {  sort } from '../actions'


class Board extends Component {
  constructor(props){
      super(props);
      this.state = { }
  }
  onDragEnd = (result) => {
    const { destination, source, draggableId} = result

    if(!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    )
  }

  render() {
    const { board } = this.props
    return(
      <DragDropContext onDragEnd={this.onDragEnd}>
              <div className='Board'>
                {board.map(list => <List listId={list.id} key={list.id} title={list.title} cards={list.cards} />)}
                <TrelloButton list />
              </div>
      </DragDropContext>
    )
  }
}
const mapStateToProps = (state)=>{
  return  ({ board: state.board})
}

export default connect(mapStateToProps)(Board)
