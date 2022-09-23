import React, {useState} from "react"
import styled from 'styled-components'


const Button = styled.button`
border: none;
background-color: white;
cursor: pointer;
`

export default function App(){
  const [input, setInput] = useState()
  const [list, setList] = useState([])

  // const handleClick = () => {
  //   if (input !== ""){
  //     setList([...list, input])
  //     setInput("")
  //   }
  // }


const handleClick = () =>{

  const BolsaInput ={
    value: input,
    id: Date.now(),

    // status: false,
  }

  setList( prevState => [...prevState, BolsaInput] )
  setInput("")
}



function DeleteTask(id){
  const ListaFiltrada = list.filter(item => item.id !== id)
  setList(ListaFiltrada)
}


  return(
    <div>
      <h1>Metas do dia:</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input onChange={(e) => {setInput(e.target.value)}} value={input} />
        <button onClick={() => {handleClick()}}>+</button>
      </form>
      <ul>{list.map(item => (
        <li>
        {item.value}  <Button onClick={() =>{DeleteTask(item.id)}}>🗑️</Button>
        </li>
      ))}</ul>
    </div>
  )
}