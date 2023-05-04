import React, {useState} from "react"
import { useDispatch } from 'react-redux';
import {add} from "../stores/actions/lists"
import Button from "./Button";
import "../styles/FormInput.css"

const FormInput = () => {
    const [text,setText] = useState("")
    const dispatch = useDispatch()
    const change = e =>{
        setText(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault();
        if (text !== "") {
            dispatch(add(text));
        }
        setText("");
    };
    return(
        <form style={formInput} onSubmit={submit}>
            <input 
                style={input}
                type="text" 
                onChange={change}
                value={text}
                placeholder="Add Task"
            />
            <Button text="Add" variant="primary" action={submit} />
        </form>
    )
}

export default FormInput;

const formInput = {
    background: "#FFF",
    color: "#FFF",
    display:"flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}
const input = {
    width: "70%",
    border: "none"
}