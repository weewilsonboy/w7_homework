import { useState, useEffect } from 'react'
import SingleFact from './components/SingleFact'
import AllFacts from './components/AllFacts'

function App() {
  const [catFacts, setCatFacts] = useState([])

  useEffect(()=>{
    !catFacts.length ?
    fetch("https://meowfacts.herokuapp.com/?count=5")
    .then((res)=>res.json())
    .then((data)=>setCatFacts(data.data))
    : console.log("loaded")

  })
  // for(let i = 0; i<catFacts.data.length;i++)
  //   {
  //     catFacts.data.length ? <SingleFact fact={catFacts.data[i]}/>:"test"
  //   }
  // <SingleFact fact={catFacts.data[0]}/>
  return (
    <>
      {catFacts.length ? <AllFacts facts={catFacts}/>:"test"}
    </>
  )
}

export default App
