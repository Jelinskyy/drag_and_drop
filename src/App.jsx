import './styles/App.css';
import Container from "./components/Container"
import { useEffect, useState } from 'react';

function App() {
  const [boxes, setBoxes] = useState(() => seedBoxes(5)) //array of all boxes
  const [hold, setHold] = useState("")
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    });
  }, [])

  // creating randomly colored boxes to seed array
  function seedBoxes(count){
    let boxesArray = [] // creating empty array
    for(let i=0; i<count; i++)
    {
      // generating random rgb colors from 32 to 
      let randomRed = Math.floor(Math.random()*191+32)
      let randomGreen = Math.floor(Math.random()*191+32)
      let randomBlue = Math.floor(Math.random()*191+32)
      boxesArray.push({
        id: i,
        holded: false,
        color: randomRed.toString(16)+randomGreen.toString(16)+randomBlue.toString(16), // setting up box bg color
        borderColor: (randomRed-16).toString(16)+(randomGreen-16).toString(16)+(randomBlue-16).toString(16), // setting up box border color to slightly darker than bg
        containerKey: Math.floor(Math.random()*2) // selecting random container to locate in
      })
    }
    return boxesArray
  }

  function toggleHold(boxId) {
    setBoxes(prevBoxes => prevBoxes.map(e => {
      return e.id === boxId
      ? {
        ...e,
        holded: !e.holded
      }
      : e
    }))

    setHold(boxId)
  }

  // creating saparete box arrays for each container
  const container0Boxes = boxes.filter(e=>e.containerKey===0)
  const container1Boxes = boxes.filter(e=>e.containerKey===1)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Drag n' Drop
        </p>
      </header>
      <main className="App-body">
        <Container key={0} boxes={container0Boxes} toggleHold={toggleHold} mousePosition={mousePosition}/>
        <Container key={1} boxes={container1Boxes} toggleHold={toggleHold} mousePosition={mousePosition}/>
      </main>
    </div>
  );
}

export default App;
