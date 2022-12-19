import s from "./Dialogs.module.css";
import NavLink from "../../CoreComponents/NavLink";

const DialogItem = ({title, id}) => {
    return (
        <div className={s.Dialog}>
            <NavLink to={"/dialogs/" + id} title={title}/>
        </div>
    )
}

export default DialogItem
