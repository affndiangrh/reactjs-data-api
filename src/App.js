import { useEffect, useState } from 'react';
import './App.css';
import Select from 'react-select'

function App() {
  const [datas, setDatas] = useState([])
  const [userSelect, setUserSelect] = useState("")
  const [isShow, setIsShow] = useState(false)

const getBerries = async () => {
  const data = await fetch("https://pokeapi.co/api/v2/berry/")
  const value = await data.json()
  let result = value.results.map(data => {
    return {
      label: data.name,
      value: data.name
    }
  })
  setDatas(result.sort((a,b) => a.label.localeCompare(b.label)))
}

useEffect(() => {
  getBerries()
}, [])

const handlerSubmit = () => {
  setIsShow(state => !state)
}

const handleChange = (value) => {
  setUserSelect(value)
}

  return (
    <div className="App">
      <h1>{isShow ? userSelect : ""}</h1>
      <button onClick={() => handlerSubmit()} disabled={!userSelect}>{isShow ? "Hide Button" : "Show Values"}</button>
      <Select options={datas} onChange={(e) => handleChange(e.value)}></Select>
    </div>
  );
}

export default App;
