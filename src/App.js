import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";

function App() {

  const onDelete =(todo)=>{
    console.log("i am onDelete of todo",todo)
  }
  let todos = [
    {
      sno: 1,
      title: "Buy groceries",
      desc: "Go to the store and buy all the things"
    },

    {
      sno: 2,
      title: "Buy Fruit",
      desc: "Go to the store and buy all the things2"
    },

    {
      sno: 3,
      title: "Buy electronic",
      desc: "Go to the store and buy all the things3"
    }
  ]
  return (
    <>

   <Header title1="My Todos List" title= "Todo List" searchBar={false}/>
   <Todos todos= {todos} onDelete={onDelete}/>
   <Footer/>
 </>
  );
}
export default App;