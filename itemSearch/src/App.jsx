import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Search from './components/search/Search'

function App() {
  // const [show,setShow]=useState("")
  
  // const handleSearch=(event)=>{
  //   const {name,value}=event.target
  //   switch(name){
  //     case "Search":
  //       setShow(name)
  //       break;
  //     case "Api":
  //       setShow(name)
  //       break;
  //   }

  // }
  return (
    <>
      <Search></Search>
      {/* {show ==="Search" && <Search></Search>}
      
    <div>
      <button  name="Search" onClick={handleSearch}>local</button>
      <button name="Api" onClick={handleSearch}>Api</button>
    </div> */}

    </>
  )
}

export default App
