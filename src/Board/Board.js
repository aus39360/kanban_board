import React, { Component } from 'react'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import List from '../List'
import './Board.css'

import {  } from '../actions/actionTasks'


class Board extends Component {
  constructor(props){
      super(props);
      this.state = { }
  }

  render() {
    const { board } = this.props
    console.log(board)
    return(
      <div className='Board'>
        {board.map(list => <List key={list.id} title={list.title} cards={list.cards} />)}
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return  ({ board: state.board})
}

const mapDispatchToProps = (dispatch)=> bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Board)
