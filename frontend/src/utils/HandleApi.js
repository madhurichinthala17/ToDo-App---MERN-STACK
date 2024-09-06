import axios from 'axios';

const baseUrl="https://todo-app-mern-stack-y6b4.onrender.com"

const getAllToDo=(setToDo) => {
     axios.get(baseUrl)
     .then(({data}) => {
        console.log('data --->',data);
        setToDo(data)
     })
}

const addToDo=(text,setText,setToDo) => {

    axios.post(`${baseUrl}/save`,{text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

const updateToDo=(toDoId,text,setText,setToDo,setIsUpdating) => {

    axios.post(`${baseUrl}/update`,{_id:toDoId,text}).then((data) => {
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

const deleteToDo=(_id,setToDo) => {

    console.log(_id)
    axios.delete(`${baseUrl}/delete/${_id}`).then((res) => {
        console.log("Delete api successfull")
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

export { addToDo, deleteToDo, getAllToDo, updateToDo };

