import Header from './Header'
import React, {useState} from "react";

function App() {
    const [text, setText] = useState("")
    const [characterCount, setCharacterCount] = useState(0)
    const handleClick = async () => {
        const response = await fetch("http://localhost:8000/count", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({text})
        })
        const data = await response.json();
        setCharacterCount(data.variable)

    }
  return (
      <>
        <Header />
        {/*<input type="text" />*/}
        {/*<textarea placeholder = "type!"></textarea>*/}
          <textarea
              onChange = {e=> setText(e.target.value)}
              ></textarea>
          <button
              onClick={handleClick}
          >Count Characters</button>
          <p>Number of characters: {characterCount}</p>


      </>

  )
}


export default App;

