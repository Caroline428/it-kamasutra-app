import s from "./Dialogs.module.css";

const Message = ({message}) => {
    return (
        <div className={s.Message}>{message}</div>
    )
}

export default Message