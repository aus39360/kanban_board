import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import List from '../List'
import TrelloButton from '../TrelloButton'
import './Board.css'



class Board extends Component {
  constructor(props){
      super(props);
      this.state = { }
  }

  render() {
    const { board } = this.props
    return(
      <div className='Board'>
        {board.map(list => <List listId={list.id} key={list.id} title={list.title} cards={list.cards} />)}
        <TrelloButton list />
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return  ({ board: state.board})
}

const mapDispatchToProps = (dispatch)=> bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Board)
