import './App.css';
import Header from './MyComponents/Header'; // Default export
import { Todos } from './MyComponents/Todos'; // Named export
import { Footer } from './MyComponents/Footer'; // Named export
import React, { useState, useEffect } from 'react';
import { AddTodo } from './MyComponents/AddTodo';


function App() {
  let intiTodo;
  if (localStorage.getItem("todos")) {
    intiTodo = JSON.parse(localStorage.getItem("todos"));
  } else {
    intiTodo = [];
  }

  const [todos, setTodos] = useState(intiTodo);

  const onDelete = (todo) => {
    console.log("Deleting todo:", todo);
    setTodos(todos.filter((e) => e !== todo));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, dese) => {
    console.log("Adding todo:", title, dese);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      dese: dese
    };

    setTodos([...todos, myTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, myTodo]));
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
    
        <Header title='MyTodosList' searchBar={false} />
       
            
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
         



        <Footer />
     
    </>
  );
}

export default App;
