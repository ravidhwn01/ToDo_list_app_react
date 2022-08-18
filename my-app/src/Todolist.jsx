import React from 'react'

 const  Todolist = (props)=> {
  
        
        return (
                <div className="todo_style" >
                <i className="fa fa-times" area-hidden = "true" onClick={()=>{
                        props.onSelect(props.id)
                }} ></i>
   
        <li style={{textDecoration:"none"}}>{props.text}</li>
                </div>
    
    
    )
};
export default Todolist;