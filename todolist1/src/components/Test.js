import React, { useState } from 'react'

const Test = () => {
    const [task,settask] = useState("")
    const [todo, settodo] = useState([])
    const [ischecked, setischecked] = useState(false)
    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(task)
        settodo([...todo,{task}])
        settask(" ")
    }
    let rendertask = <h2>task is not add yet</h2>

    const handlecheckboxchange =() =>{
        setischecked(!ischecked);
    }
    const deletehandler = (index)=>{
        let task1 = [...todo];
        task1.splice(index,1);
        settodo(task1)
    }

    if(todo.length >0 ){
        rendertask = todo.map((t,index) =>{
            return(
                <li key={index}>{t.task}
                <form action="">
                    <input type="checkbox" name="" id="chbox" checked={ischecked}  onChange={handlecheckboxchange}/>
                    <label htmlFor="chbox">completed</label>
                    {ischecked && (
                        <button onClick={deletehandler}>Delete</button>
                    )}
                    </form></li>
            )
        })
    }
  return (
    <>
    <div>
      <form action=""onSubmit={submitHandler} >
        <div><input type="text" name="" id="" 
       value={task}  onChange={(e)=>{
            settask(e.target.value)
        }}/></div>
        <div><input type="submit" value="Add" /></div>
      </form>
    </div>
    <div>
        <ul>
            {rendertask}
        </ul>
    </div>
    </>
  )
}

export default Test
