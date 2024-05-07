import React, { useState } from 'react';


export const AddTodo = ({addTodo}) => {

    const [title,setTitle] =  useState("");
    const[dese,setDese] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!title || !dese){
            alert("Title or Description cannot be blank");
        }else{
        addTodo(title,dese);
        // console.log("submitting");
        setTitle("");
        setDese("");
        }
    }
    return (
          

        
        <div className='container my-3'>
            <h3>Add a todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)
                    } className="form-control" id="title" aria-describedby="emailHelp" />

                </div>

                <div className="mb-3">
                    <label htmlFor="dese" className="form-label">Todo Description</label>
                    <input type="text" value ={dese} onChange={(e)=>setDese(e.target.value)
                    } className="form-control" id="dese" />

                </div>
                <button type="submit" className="btn btn-sm btn-success btn-primary">Add Todo</button>
            </form>
        </div>
    )
}
