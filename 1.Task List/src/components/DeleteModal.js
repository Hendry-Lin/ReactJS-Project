import React from "react"
import {useSelector,useDispatch} from "react-redux"
import {closeconfmodal} from "../stores/actions/lists"
import {del} from "../stores/actions/lists"
import Button from "./Button";
import "../styles/Modal.css"

const DeleteModal = () => {
    const conf = useSelector(state => state.lists.isDel);
    const id = useSelector(state => state.lists.idDel);
    const dispatch = useDispatch();
    const delData = (id) => {
        dispatch(del(id));
        dispatch(closeconfmodal());
    };
    const closeData = () => {
        dispatch(closeconfmodal());
    };

    if (conf) {
        return (
            <div className="modal-container">
                <div className="modal-box-del">
                    <h3>Are You Sure?</h3>
                    <div className="button-group">
                        <Button
                            text="Yes"
                            variant="primary"
                            action={() => delData(id)}
                        />
                        <Button
                            text="Cancel"
                            variant="warning"
                            action={closeData}
                        />
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default DeleteModal;