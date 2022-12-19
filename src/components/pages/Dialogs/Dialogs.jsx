import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.Dialogs}>
            <div className={s.Dialogs__Items}>
                <div className={s.Dialog}>Катя</div>
                <div className={s.Dialog}>Маша</div>
                <div className={s.Dialog}>Федя</div>
                <div className={s.Dialog}>Виктор</div>
            </div>
            <div className={s.Messages__Items}>
                <div className={s.Message}>Ололол</div>
                <div className={s.Message}>Трололо</div>
                <div className={s.Message}>Привет</div>
                <div className={s.Message}>Как дела</div>
            </div>
        </div>
    )
}

export default Dialogs