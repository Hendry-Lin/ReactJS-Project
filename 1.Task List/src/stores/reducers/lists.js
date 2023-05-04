const initialState = {
    todos:[
        {
            id: 1,
            title: "Reading a Book"
        },
        {
            id: 2,
            title: "Workout Training"
        }
    ],
    editData:{
        id:"",
        title:""
    },
    isEdit:false,
    idDel: "",
    isDel :false
}

//reducers
const listReducer = (state = initialState, action) => {
    const {type,payload} = action
    switch(type){
        case "ADD": 
            const idNew = Math.max(...state.todos.map(t => t.id))
            const newItem = {
                id: idNew + 1,
                title: payload
            }
            return{
                ...state,
                todos: [...state.todos,newItem]
            }
        case "EDIT": 
            return{
                ...state,
                editData: payload
            }
        case "OPENMODAL":
            return{
                ...state,
                isEdit: true,
                editData: payload
            }
        case "CLOSEMODAL":
            return{
                ...state,
                isEdit: false,
                editData:{
                    id:"",
                    title:""
                }
            }
        case "UPDATE": {
                const { id, title } = state.editData;
                const updatedTodos = state.todos.map(todo => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            title: title
                        };
                    }
                    return todo;
                });
                return {
                    ...state,
                    todos: updatedTodos,
                    isEdit: false,
                    editData: {
                        id: "",
                        title: ""
                    }
                };
            }
        case "OPENCONFMODAL":
            return{
                ...state,
                isDel: true,
                idDel: payload
            }
        case "CLOSECONFMODAL":
            return{
                ...state,
                isDel: false,
                idDel:""
            }
        case "DEL": 
            return{
                ...state,
                todos: state.todos.filter(item => item.id !== payload),
                idDel:""
            }
        default:
            return state
    }
}

export default listReducer