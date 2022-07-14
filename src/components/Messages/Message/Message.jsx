import s from './../Messages.module.css';


const Message = (props) => {
    
    return (
        <div className={s.message}>
            <div>{props.message}</div>
         
         <div>like:{props.likesCount}</div>
         
         </div>
         
    )
}

export default Message;