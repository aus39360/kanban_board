import React, { Component } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Card from "@material-ui/core/Card";
import TextareaAutosize from 'react-textarea-autosize';
import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close';
import {connect} from 'react-redux'

import './TrelloButton.scss'
import { addList, addCard} from '../actions'


class TrelloButton extends Component {
    constructor(props){
        super(props);
        this.state = { formOpen: false, text: '' }
    }

    openForm = () => {
        this.setState ({ formOpen: true })
    }
    closeForm = (e) => {
        this.setState ({ formOpen: false })
    }
    handleChange = (e) => {
        this.setState ({ text: e.target.value })
    }

    handleAddList = () => {
        const {dispatch} = this.props;
        const { text } = this.state;
        
        if(text) {
            dispatch(addList(text));
        }
        return;
    }
    handleAddCard = () => {
        const {dispatch, listId} = this.props;
        const { text } = this.state;
        
        if(text) {
            dispatch(addCard( listId,text));
        }
        return;
    }

    AddButton = () => {
        const { list } = this.props

        const buttonText = list ? "Добавить еще одну колонку" : "Добавить еще одну карточку";

        return(
            <button
                onClick={this.openForm}
                className='add-button'
            >
                <AddIcon></AddIcon>
                <p>{buttonText}</p>
            </button>
        )
    }
    
    renderForm = () => {
        const { list } = this.props

        const placeholder = list ? 'Введите название колонки' : 'Введите название карточки'

        const   buttonTitle = list ? 'Добавить колонку' : 'Добавить карточку'

        return (
            <div className='container'>
                <Card className='container__card'>
                    <TextareaAutosize
                        placeholder={placeholder}
                        autoFocus
                        onBlur={this.closeForm}
                        onChange={this.handleChange}
                        style={{
                            resize: 'none',
                            width: '100%',
                            outline: 'none',
                            border: 'none',
                            overflow: 'hidden',
                            fontSize: 16
                        }}
                    />
                </Card>
                <div className='container-btn'>
                    <Button 
                        onMouseDown={ list ? this.handleAddList : this.handleAddCard}
                        variant="contained" 
                        style={{color: 'white', backgroundColor: '#2ecc71', fontWeight: 'bold'}}
                    >
                        {buttonTitle}
                    </Button>
                    <CloseIcon className='icon' onClick={this.closeForm}> </CloseIcon>
                </div>
            </div>
        )
    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.AddButton();
    }
}

export default connect() (TrelloButton)