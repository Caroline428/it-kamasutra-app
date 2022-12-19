import s from './Dialogs.module.css'
import DialogItem from "./DialogItem";
import Message from "./Message";

const Dialogs = (props) => {
    return (
        <div className={s.Dialogs}>
            <div className={s.Dialogs__Items}>
                <DialogItem title="Катя" id="1"/>
                <DialogItem title="Кат" id="2"/>
                <DialogItem title="Кая" id="3"/>
                <DialogItem title="Ктя" id="4"/>
            </div>
            <div className={s.Messages__Items}>
                <Message message="ssssssss"/>
                <Message message="ssssfgrssss"/>
                <Message message="sssshhtssss"/>
                <Message message="ssssghthssss"/>
            </div>
        </div>
    )
}

export default Dialogs