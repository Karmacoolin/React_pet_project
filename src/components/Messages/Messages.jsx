import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utilits/validators/validators';
import { Textarea } from '../common/Form/Form';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Messages.module.css';

const maxLength20 = maxLengthCreator(20);

const Messages = (props) => {
    let addNewMessage = (values) => {
        props.addMess(values.newMessText);
    }

    let state = props.messagesPage;
    let DialogElements = state.dialogData.map(el => <DialogItem name={el.name} id={el.id} />);
    let MessagesElements = state.messageData.map(m => <Message message={m.message} likesCount={m.likesCount} />);



    return (
        <div className={s.dialogs}>
            <div className={s.ditems}>
                {DialogElements}
            </div>

            <div >{MessagesElements}
                <MessageReduxForm onSubmit={addNewMessage} /> </div>

        </div>
    )
}

const MessagesForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field component={Textarea} name='newMessText' placeholder='Enter your message' 
            validate={[required,maxLength20]}>

            </Field>
            <div>
                <button >Send</button>
            </div>
        </form>

    )
}

const MessageReduxForm = reduxForm({
    form: 'Message'
})(MessagesForm)
export default Messages;