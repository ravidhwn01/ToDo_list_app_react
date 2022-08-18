import React, { useState } from "react";
import Todolist from "./Todolist";


const App = ()=>{
const [inputList, setInputList] = useState("");
const [Items, setItems] = useState([]);
const itemEvent =(event)=>{
setInputList(event.target.value)

}

const listOfItems= ()=>{
    setItems((oldItems)=>{
        return [...oldItems,inputList]
    })
setInputList("");
}
const deleteItem = (id)=>{
    console.log("deleted!")
    setItems((oldItems)=>{
        return oldItems.filter((arrElem, index)=>{
            return index!==id;
        })
    })
    
            }
return(

    <>
<div className="main_div">
    <div className="center_div">
        <br />
        <h1>TODO List</h1>
        <br />
        <input type="text"  placeholder="Add a  Item" onChange={itemEvent} value = {inputList}/>
        <button  onClick ={listOfItems} >+ </button>  
        <div  >
            {/* <li>{inputList}</li> */}
            {Items.map((itemval , index)=>{
             return (
           
           
              <Todolist 
              key = {index}
              id = {index}
              onSelect = {deleteItem}
              text = {itemval} />

            )

            })}
        </div>
    </div>
</div>


    </>

)
 }

export default App;