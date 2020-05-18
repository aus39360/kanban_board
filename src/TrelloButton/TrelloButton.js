import React, { Component } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Card from "@material-ui/core/Card";
import TextareaAutosize from 'react-textarea-autosize';
import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close';
import {connect} from 'react-redux'

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
        const buttonTextOpassity = list ? 1 : 0.5;
        const buttonTextColor = list ? 'white' : 'inherit';
        const buttonTextBackground = list ? 'rgba(0,0,0,.15)' : 'inherit'

        return(
            <div
                onClick={this.openForm}
                style={{ 
                    display: 'flex', 
                    alignItems:'center', 
                    cursor: 'pointer',
                    height: '30px',
                    opacity: buttonTextOpassity, 
                    color:buttonTextColor, 
                    backgroundColor: buttonTextBackground 
                }}>
                <AddIcon></AddIcon>
                <p>{buttonText}</p>
            </div>
        )
    }
    
    renderForm = () => {
        const { list } = this.props

        const placeholder = list ? 'Введите название колонки' : 'Введите название карточки'

        const   buttonTitle = list ? 'Добавить колонку' : 'Добавить карточку'

        return (
            <div>
                <Card
                    style={{
                        minHeight: 85,
                        minWidth: 272,
                        padding: '6px 8px 2px'
                    }}
                >
                    <TextareaAutosize
                        placeholder={placeholder}
                        autoFocus
                        onBlur={this.closeForm}
                        onChange={this.handleChange}
                        style={{
                            resize: 'none',
                            width: '100%',
                            outline: 'none',
                            border: 'none'
                        }}
                    />
                </Card>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Button 
                        onMouseDown={ list ? this.handleAddList : this.handleAddCard}
                        variant="contained" 
                        style={{color: 'white', backgroundColor: '#2ecc71'}}>
                        {buttonTitle}
                    </Button>
                    <CloseIcon style={{cursor: 'pointer', fontSize: 36 }}> </CloseIcon>
                </div>
            </div>
        )
    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.AddButton();
    }
}

export default connect() (TrelloButton)