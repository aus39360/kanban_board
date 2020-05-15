import React, { Component } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Card from "@material-ui/core/Card";
import TextareaAutosize from 'react-textarea-autosize';

class Button extends Component {
    constructor(props){
        super(props);
        this.state = { formOpen: false }
    }

    openForm = () => {
        this.setState ({ formOpen: true })
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

        return (
            <div>
                <Card>
                    <TextareaAutosize
                        placeholder={placeholder}
                        autoFocus
                    />
                </Card>
            </div>
        )
    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.AddButton();
    }
}

export default Button