export const add = (title) =>{
    return{
        type: "ADD",
        payload: title
    }
}
export const edit = (id,title) =>{
    return{
        type: "EDIT",
        payload: {
            id,
            title
        }
    }
}
export const update = (id, title) =>{
    return{
        type: "UPDATE",
        payload: {
            id,
            title
        }
    }
}
export const openmodal = (id,title) =>{
    return{
        type: "OPENMODAL",
        payload: {
            id,
            title
        }
    }
}
export const closemodal = () =>{
    return{
        type: "CLOSEMODAL"
    }
}
export const openconfmodal = (id) =>{
    return{
        type: "OPENCONFMODAL",
        payload: id
    }
}
export const closeconfmodal = () =>{
    return{
        type: "CLOSECONFMODAL"
    }
}
export const del = (id) =>{
    return{
        type: "DEL",
        payload: id
    }
}