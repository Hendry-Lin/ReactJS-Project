import React from "react"
import Button from "./Button"
import {useSelector,useDispatch} from "react-redux"
import {closemodal} from "../stores/actions/lists"
import {edit} from "../stores/actions/lists"
import {update} from "../stores/actions/lists"
import "../styles/Modal.css"

const EditModal = () => {
    const isedit = useSelector(state => state.lists.isEdit);
    const data = useSelector(state => state.lists.editData);
    const dispatch = useDispatch();
    const close = () => {
        dispatch(closemodal())
    }
    const handleChange = (e) => {
        const updatedTitle = e.target.value;
        dispatch(edit(data.id, updatedTitle));
    };
    const submit = () =>{
        dispatch(update(data.id, data.title))
    }
    if(isedit) {
        return(
            <div className="modal-container">
                <div className="modal-box">
                    <h3>Edit Task</h3>
                    <div className="input">
                        <input type="text" value={data.title} onChange={handleChange} />
                    </div>
                    <div className="button-group">
                        <Button text="OK" variant="primary" action={submit}/>
                        <Button text="Cancel" variant="warning" action={close}/>
                    </div>
                </div>
            </div>
        )
    }else{
        return null
    }
}

export default EditModal;